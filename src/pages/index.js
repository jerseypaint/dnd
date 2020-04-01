import React from "react"
import { graphql } from 'gatsby'
import { Global, css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import WhyUs from "../components/why-us"
import HomeServices from "../components/home-services"
import Cta from "../components/cta-banner"

const IndexPage = ({data}) => (
  <Layout>
    <Global
      styles={css`
        p, li {
          font-size: 1.167em;
        }
        h2 {
          font-size: 2.222em;
        }
      `}
    />
    <SEO title="Home" />

    <Hero 
      title={data.indexJson.hero.title}
      subtitle={data.indexJson.hero.subtitle}
      image={data.indexJson.hero.image.childImageSharp.fluid} />

    <WhyUs 
      title={data.indexJson.whyus.title}
      items={data.indexJson.whyus.items} />

    <HomeServices 
      title={data.indexJson.services.title} 
      description={data.indexJson.services.description} 
      services={data.servicesJson.content.services}
      image={data.indexJson.services.image.childImageSharp.fluid} />

    <Cta 
      title={data.indexJson.cta.title} 
      linkText={data.indexJson.cta.link.text} 
      linkPath={data.indexJson.cta.link.path} />

  </Layout>
)

export const query = graphql`
  query Index {
    indexJson {
      hero {
        image {
          childImageSharp {
            fluid (maxHeight: 800, quality: 95){
              ...GatsbyImageSharpFluid
            }
          }
        }
        subtitle
        title
      }
      cta {
        link {
          path
          text
        }
        title
      }
      services {
        description
        title
        image {
          childImageSharp {
            fluid (maxWidth: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      whyus {
        items {
          description
          icon
          title
        }
        title
      }
    }
    servicesJson {
      content {
        services {
          title
        }
      }
    }
  }
`

export default IndexPage
