import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import logoMaribarra from "../images/logo_maribarra.svg"

const IndexPage = () => {
  return (
    <Layout>
      <section className="absolute w-full h-full grid grid-cols-2 overflow-hidden blur-sm">
        <div className="-ml-32 md:-ml-24 lg:-ml-12 -mt-64 md:-mt-28">
          <StaticImage
            src="../images/home_graphic_01.jpg"
            width={400}
            layout="fixed"
          />
        </div>
        <div className="flex justify-end -mt-56">
          <StaticImage
            src="../images/home_graphic_02.jpg"
            width={400}
            layout="fixed"
          />
        </div>
        <div className="-ml-32 md:-ml-24 lg:ml-0 mt-32 md:mt-24">
          <StaticImage
            src="../images/home_graphic_03.jpg"
            width={400}
            layout="fixed"
          />
        </div>
        <div className="flex justify-end mt-48 md:mt-12 md:-mr-16">
          <StaticImage
            src="../images/home_graphic_04.jpg"
            width={400}
            layout="fixed"
          />
        </div>
      </section>
      <section className="relative flex h-full justify-center items-center flex-col overflow-hidden">
        {/* <StaticImage
          src="../images/logo_maribarra.png"
          width={800}
          placeholder="none"
          className="w-11/10 md:w-auto"
        /> */}
        <img
          src={logoMaribarra}
          width={800}
        />
        <h1 className="font-black uppercase text-4xl text-white">It's coming</h1>
        <a  href="https://instagram.com/maribarramakeup" target="_blank">
          <h2 className="text-white">Hit me up on Instagram ⟶</h2>
        </a>
      </section>
    </Layout>
  )
}

export default IndexPage
