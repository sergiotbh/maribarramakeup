import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from './Header';
import { StaticImage } from 'gatsby-plugin-image';
import { useAppContext } from '../context/app-context';
import Footer from './Footer';

const Layout = ({children, title, description, url}) => {

  const {offsetY, dispatch} = useAppContext()

  const isBrowser = typeof window !== "undefined"

  const handleScroll = () => dispatch({type: "OFFSET_CHANGE", value: isBrowser ? window.pageYOffset : 0})
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll )

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const data = useStaticQuery(query)

  const defaults = data.site.siteMetadata;

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: defaults.image,
    url: url || defaults.url
  };
  const ogImage = data.featuredImage?.childImageSharp?.gatsbyImageData;

  const metas = [
    // basic seo
    {
      name: 'description',
      content: seo.description,
    },
    {
      name: 'og:image',
      content: ogImage.images.fallback.src,
    },
    {
      name: 'og:image:width',
      content: `${ogImage.width}`,
    },
    {
      name: 'og:image:height',
      content: `${ogImage.height}`,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:title',
      content: seo.title,
    },
    {
      name: 'og:description',
      content: seo.description,
    },
    {
      name: 'og:site_name',
      content: data.site.siteMetadata.og.siteName,
    },
    {
      name: 'og:url',
      content: `${data.site?.siteMetadata?.url}`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: seo.description,
    },
    {
      name: 'twitter:title',
      content: seo.title,
    },
    {
      name: 'twitter:image',
      content: ogImage.images.fallback.src,
    },
  ];

  return(
    <main className="overflow-x-hidden">
      <Helmet
        htmlAttributes={{
          lang: 'es'
        }}
      >
        <title>Maribarramakeup</title>
        {metas.map(meta => (
          <meta key={meta.name} name={meta.name} content={meta.content} />
        ))}
      </Helmet>
      <Header
        offsetY={offsetY}
      />
      <Background
        offsetY={offsetY}
      />
      {children}
      <Footer/>
    </main>
  )
}

export default Layout;

export const query = graphql`
  query{
    site {
      siteMetadata {
        url
        title
        description
        image
        og {
          siteName
        }
      }
    }
    featuredImage: file(
      absolutePath: { glob: "**/src/images/logo_maribarra.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200)
      }
    }
  }
`;

const Background = ({offsetY}) => {

  return(
    <section className="absolute w-full -z-50">
      {/* Back section */}
      <div
        style={{
          transform: `translateY(${offsetY * 0.5}px)`
        }}
        className="grid grid-cols-2 overflow-x-clip"
      >
        <div className="-ml-32 md:-ml-24 lg:-ml-12 -mt-28 blur-sm">
          <StaticImage
            src="../images/home_graphic_05.jpg"
            width={400}
            layout="fixed"
            alt=""
          />
        </div>
        <div
          className="flex justify-end"
        >
          <div
            className="bg-periwinkle-500 blur-2xl w-1/2 h-1/2 -mt-10 -mr-10 opacity-75"
          >
          </div>
        </div>
        <div/>
        <div
          className="flex justify-end items-start blur-md -mt-24"
        >
          <StaticImage
            src="../images/home_graphic_06.jpg"
            width={400}
            layout="fixed"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}