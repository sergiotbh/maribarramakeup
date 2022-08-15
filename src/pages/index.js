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
          />
        </div>
        <div className="flex items-end -mb-20">
          <StaticImage
            src="../images/home_graphic_01.jpg"
            width={384}
            layout="fixed"
            alt=""
          />
        </div>
        <div className="flex items-end">
          <StaticImage
            src="../images/home_graphic_03.jpg"
            width={384}
            layout="fixed"
            alt=""
          />
        </div>
      </section>
      <Profile/>
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
            />,
            <StaticImage
              src="../images/gallery/editorial_02.jpg"
            />
          ]}
        />
        <ParallaxVideo
          title="Social"
          images={[
            <StaticImage
              src="../images/gallery/social_01.jpg"
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
              src="../images/gallery/halloween_01.jpg"
            />
          ]}
          flipped
        />
      </section>
      <section
        className="md:mt-14 lg:mt-32 relative flex flex-col"
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
        <div className="md:absolute flex top-0 right-2 lg:left-1/2 px-5 lg:p-0 justify-center">
          <BookForm/>
        </div>
      </section>
    </Layout>
  )
}

const ParallaxVideo = ({images, title, flipped}) => {
  const { offsetY } = useAppContext()
  const videoRef = useRef(null)

  return(
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
        <source src={EyeVideoGraphic} type="video/mp4"/>
      </video>
      <div className="flex flex-1 text-center py-8 items-center justify-center">
        <Subtitle customStyle="uppercase">{title}</Subtitle>
      </div>
      <div
        className="flex-1"
      >
        {React.cloneElement(images[0], {className: "w-1/2 aspect-square"})}
        {React.cloneElement(images[1], {className: "w-1/2 aspect-square"})}
      </div>
    </section>
  )
}

const Profile = () => {
  
  return(
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
          customStyle="max-w-sm md:ml-14 lg:ml-32 lg:mt-8"
        >
          My experience as a make-up artist began in 2008 when I finished my studies as a fashion designer at FIDM in Los Angeles, CA.  I realized then that my true passion and calling was make up artistry. It is when I applied to attend Elite Makeup Academy (EPRO) in Barcelona, Spain that I truly began to pursue my career as a professional make up artist. Since then I have worked with over 200 brides, editorial content, television, film and theatrical makeup, and thousands of social events and charities.
        </Paragraph>
      </div>
    </section>
  )
}

const BookForm = () => {

  return(
    <form>
      <section
        className="relative overflow-hidden bg-white rounded-lg rounded-tl-[100px] py-8 px-10 drop-shadow-md w-[384px] lg:w-[486px]"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
        }}
      >
        <SectionTitle customStyle="text-yellow uppercase text-right mb-10">Contact me</SectionTitle>
        <TextField
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
          className="bg-black absolute w-full h-full top-0 left-0 transition-opacity opacity-30 lg:opacity-25 lg:hover:opacity-60 flex items-center justify-center"
        >
          <SmallSubtitle customStyle="text-white">Coming soon</SmallSubtitle>
        </div>
      </section>
    </form>
  )
}

const SubmitButton = () => {

  return(
    <div className="flex">
      <button
        className="grow py-4 bg-yellow rounded"
      >
        <span className="font-extrabold italic uppercase">Book now</span>
      </button>
    </div>
  )
}

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
