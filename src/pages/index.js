import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { Paragraph, SectionTitle, SmallSubtitle, Subtitle, TextArea, TextField, Title } from "../components/TextComponents"
import EyeVideoGraphic from '../images/eye_animation.mp4'
import { useEffect } from "react"
import { useState } from "react"
import { IG_BASE_URL } from "../components/Constants"
import { useAppContext } from "../context/app-context"
import { useRef } from "react"
import ContactButton from "../components/ContactButton"
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const IndexPage = () => {

  const [_, setIgFeed] = useState([])

  useEffect(() => {
    fetch(`${IG_BASE_URL}/me/media?fields=id,caption,media_url&access_token=IGQVJWRTllN3JQQUhBV3RkX2Mta1NzMzZA1THAxTXJTYmNkQXR0aUloTkFneUtCY21pSEFPRld1MTM4OEJXaFU2dG92YWs0NWlyNmE1YndlTzZACekF3ZAjBiejhmcUd0a3pIdTA1MU1jaHJVaXVuU0NsWgZDZD`)
      .then(res => res.json())
      .then(response => setIgFeed(response?.data))
  }, [])

  return (
    <Layout>
      <section
        className="h-[80vh] md:h-screen w-screen grid grid-cols-3"
      >
        <div className="flex items-end -ml-20 mt-3">
          <StaticImage
            src="../images/home_graphic_07.jpg"
            width={450}
            layout="fixed"
            alt=""
            objectPosition="20%"
          />
        </div>
        <div className="flex items-end -mb-10 md:mb-36">
          <StaticImage
            src="../images/home_graphic_01.jpg"
            width={600}
            layout="fixed"
            objectPosition="55% 0%"
            alt=""
          />
        </div>
        <div className="flex items-end">
          <StaticImage
            src="../images/home_graphic_03.jpg"
            width={384}
            layout="fixed"
            objectPosition="55% 0%"
            alt=""
          />
        </div>
      </section>
      <Profile />
      {/* <section className="relative h-96 md:h-[517px] mt-24 md:mt-48">
        <SectionTitle customStyle="ml-4 lg:ml-32">@maribarramakeup</SectionTitle>
        <div
          className="absolute h-full w-full bg-yellow top-0 left-1/2 -z-50"
        />
        <div
          className="flex overflow-x-auto overflow-y-hidden py-1.5"
        >
          {igFeed?.map((i,n) => 
            <div key={n} className="flex-none h-72 aspect-square md:h-[402px] md:w-[402px] mr-5">
              <img
                src={i.media_url}
              />
            </div>
          )}
        </div>
      </section> */}

      <section
        className="mt-24 md:mt-48"
      >
        <ParallaxVideo
          title="Editorial"
          images={[
            <StaticImage
              src="../images/gallery/editorial_01.jpg"
              objectPosition="0% 10%"
            />,
            <StaticImage
              src="../images/gallery/editorial_02.jpg"
              objectPosition="50%"
            />
          ]}
        />
        <ParallaxVideo
          title="Social"
          images={[
            <StaticImage
              src="../images/gallery/social_01.jpg"
              objectPosition="0% 20%"
            />,
            <StaticImage
              src="../images/gallery/social_02.jpg"
            />
          ]}
          flipped
        />
        <ParallaxVideo
          title="Bridal"
          images={[
            <StaticImage
              src="../images/gallery/bridal_01.jpg"
            />,
            <StaticImage
              src="../images/gallery/bridal_02.jpg"
            />
          ]}
        />
        <ParallaxVideo
          title="Halloween"
          images={[
            <StaticImage
              src="../images/gallery/halloween_01.jpg"
            />,
            <StaticImage
              src="../images/gallery/halloween_02.jpg"
            />
          ]}
          flipped
        />
      </section>
      <Services />
      <section
        className="mt-32 relative flex flex-col"
      >
        <div className="px-4 pt-7 lg:px-32 mb-10">
          <Subtitle customStyle="uppercase text-2xl">Book now with</Subtitle>
          <SectionTitle customStyle="uppercase">Maritza Ibarra</SectionTitle>
          <Paragraph customStyle="max-w-sm mt-7 text-purplishGrey">
            Message me and I'll contact you to confirm your appointment in the San Diego area.
          </Paragraph>
        </div>
        <StaticImage
          src="../images/maribarra_bg.jpg"
          className="hidden md:flex -ml-14"
          placeholder="blurred"
          quality={60}
        />
        <div className="md:absolute flex flex-col top-0 right-2 lg:left-1/2 px-5 lg:p-0 justify-center">
          <BookForm />
        </div>
      </section>
    </Layout>
  )
}

const ParallaxVideo = ({ images, title, flipped }) => {
  const { offsetY } = useAppContext()
  const videoRef = useRef(null)

  return (
    <section
      className={`relative overflow-hidden flex flex-col ${flipped ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      ref={videoRef}
    >
      <video
        style={{
          transform: `translateY(${(videoRef?.current?.offsetTop - offsetY) * 0.15}px)`
        }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-[-100%] md:top-[-75%] left-0 -z-50 w-full h-[150%] md:h-[200%] object-cover"
      >
        <source src={EyeVideoGraphic} type="video/mp4" />
      </video>
      <div className="flex flex-1 text-center py-8 items-center justify-center">
        <Subtitle customStyle="uppercase">{title}</Subtitle>
      </div>
      <div
        className="flex-1"
      >
        {React.cloneElement(images[0], { className: "w-1/2 aspect-square" })}
        {React.cloneElement(images[1], { className: "w-1/2 aspect-square" })}
      </div>
    </section>
  )
}

const Profile = () => {

  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2 mt-48 md:mt-64 px-8"
    >
      <div className="flex justify-end">
        <StaticImage
          src="../images/maritza_profile.jpg"
          layout="constrained"
          alt=""
          className="lg:w-[384px] transform rounded-tl-[100px] rounded-tr-lg rounded-br-[100px] rounded-bl-lg md:max-w-sm -z-10"
        />
      </div>
      <div className="max-w-2xl">
        <div className="">
          <Title
            customStyle="bg-yellow pl-2 xl:p-2 md:pl-16 xl:pl-16 md:-ml-14 whitespace-nowrap"
          >
            Maritza Ibarra
          </Title>
          <Subtitle
            customStyle="uppercase ml-2 lg:mt-2 md:ml-2 lg:ml-4 whitespace-nowrap"
          >
            Makeup Artist
          </Subtitle>
        </div>
        <Paragraph
          customStyle="max-w-md md:ml-14 lg:ml-32 lg:mt-8"
        >
          Versatility would be the word to describe Maritza best when it comes to her approach to makeup. When she finished her fashion studies at FIDM in 2008, she realized her passion was in the artistry of makeup. She honed her skills as a professional makeup artist in Barcelona, Spain where she attended the Elite Makeup Academy (EPRO).
          <br/>
          <br/>
          Since then, she has never wanted to allow herself to get stuck in one style of makeup and over the years, she has become a jack of all trades in the makeup industry. She has worked with over 200 brides, on editorial content, film and theatrical makeup, countless social and charity events, and even does men’s grooming. She can enhance a bride’s natural feminine beauty with elegance and sophistication one moment then experiment with color and texture to create something completely unique the next.
          <br/>
          <br/>
          Based in San Diego, California, Maritza is a freelance artist who is ready to show up at your doorstep and get you glammed up in the comfort of your home. She is also available to travel. With over a decade of experience in the makeup industry, Maritza’s versatility and vast experience leaves her clients feeling their best selves.
        </Paragraph>
      </div>
    </section>
  )
}

const BookForm = () => {

  return (
    <div>
      <section
        className="relative overflow-hidden bg-white transform rounded-lg rounded-tl-[100px] py-8 px-10 drop-shadow-md w-[384px] lg:w-[486px]"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
        }}
      >
        <SectionTitle customStyle="text-yellow uppercase text-right mb-10">Contact me</SectionTitle>
        <ul className="pt-2 flex space-x-10 text-6xl">
          <li className="flex-1">
            <a href="http://instagram.com/maribarramakeup" target="_blank">
              <ContactButton
                title="Go to my Instagram"
                icon={<InstagramIcon fontSize="inherit" />}
              />
            </a>
          </li>
          <li className="flex-1">
            <ContactButton
              title="Email (press to copy)"
              onPress={() => {
                navigator.clipboard.writeText('maritzaibarramua@gmail.com')
              }}
              icon={<EmailOutlinedIcon fontSize="inherit" />}
            />
          </li>
        </ul>
        {/* <TextField
          label="Name"
        />
        <TextField
          label="Phone"
        />
        <TextArea
          label="Message"
        />
        <SubmitButton/>
        <div
          className="bg-black absolute transform rounded-lg w-full h-full top-0 left-0 transition-opacity opacity-30 lg:opacity-25 lg:hover:opacity-60 flex items-center justify-center"
        >
          <SmallSubtitle customStyle="text-white">Coming soon</SmallSubtitle>
        </div> */}
      </section>
    </div>
  )
}

const SubmitButton = () => {

  return (
    <div className="flex">
      <button
        className="grow py-4 bg-yellow rounded"
      >
        <span className="font-extrabold italic uppercase">Book now</span>
      </button>
    </div>
  )
}

const Services = () => (
  <section className="px-4 md:px-24 lg:px-32 pt-36 lg:pt-48">
    <SectionTitle>SERVICES</SectionTitle>
    <ul className="mt-6 divide-y">
      <li className="flex flex-col md:flex-row items-center justify-between py-4">
        <Subtitle customStyle="uppercase">Social Makeup</Subtitle>
        <Subtitle customStyle="uppercase">$150</Subtitle>
      </li>
      <li className="flex flex-col md:flex-row items-center justify-between py-4">
        <Subtitle customStyle="uppercase">Bridal</Subtitle>
        <Subtitle customStyle="uppercase">$250</Subtitle>
      </li>
      <li className="flex flex-col md:flex-row items-center justify-between py-1 lg:py-4">
        <Subtitle customStyle="uppercase pt-3 lg:pt-0">Halloween</Subtitle>
        <div className="flex flex-col lg:flex-row items-center md:items-end">
          <Subtitle customStyle="text-xs lg:text-sm xl:text-sm py-1 lg:mr-2 leading-none uppercase">hourly rate starting at</Subtitle>
          <Subtitle customStyle="uppercase leading-none lg:leading-normal">$150</Subtitle>
        </div>
      </li>
    </ul>
    <Paragraph customStyle="px-4 text-xs lg:text-sm max-w-2xl before:content-['*'] before:mr-2 -indent-4 mt-10 md:mt-2">
      These rates apply for San Diego area only.
      For other places, travel expenses will apply depending on the location (airfare, food, transport...)
    </Paragraph>
  </section>
)

export const query = graphql`
  query{
    maribarraBackground: file(relativePath: { eq: "maribarra_bg.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
