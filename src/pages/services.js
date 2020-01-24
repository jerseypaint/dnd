import React from "react"
import { graphql } from 'gatsby'
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PageHeader from "../components/page-header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import Section from "../components/section"
import Cta from "../components/cta-banner"

const Flexbox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    margin: 0 0 3em 0;
  }
`

const Content = styled.div`
  border-bottom: 1px solid #D8D8D8;
  margin: 1em;
  padding: 0em 0em 4em;

  @media (min-width: 768px) {
    width: calc(33% - 1.5em);
    margin: 1em 1.5em 0 0;
  }
`

const Title = styled.h2`
  font-size: 1.2em;
  span {margin-right: .7em}
`

const Description = styled.p`
  font-size: .8889em;
  min-height: 8.125rem
`
const widescreen = css`
  height: 400px;
`

const Services = ({data}) => (
  <Layout>
    <SEO title="Services" />
    <PageHeader title={data.servicesJson.header} description={data.servicesJson.description}></PageHeader>
    <Image css={widescreen} fluid={data.servicesJson.image.childImageSharp.fluid} />
    <Section className="ServicesColumns">
    <Flexbox>
      {/* Start loop */}
      {data.servicesJson.content.services.map(service => (
        <Content className={'services--content'}>
          <Title><span><FontAwesomeIcon icon={[`fa`, `caret-right`]} style={{ color: 'red' }} /></span>{service.title}</Title>
          <Description>{service.description}</Description>
        </Content>
      ))}
      {/* End loop */}
      </Flexbox>
    </Section>
    <Cta 
      title={data.indexJson.cta.title} 
      linkText={data.indexJson.cta.link.text} 
      linkPath={data.indexJson.cta.link.path} />
  </Layout>
)

export const query = graphql`
  query Services {
    indexJson {
      cta {
        link {
          path
          text
        }
        title
      }
    }
    servicesJson {
      content {
        body
        title
        services {
          title
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      header
      description
      image {
        childImageSharp {
          fluid (maxWidth: 1920, quality: 95){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Services
