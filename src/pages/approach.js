import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "gatsby-image"

import Section from "../components/section"
import PageHeader from "../components/page-header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cta from "../components/cta-banner"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`

const List = styled.ul`
  margin-left: 1.45rem;
`

const Bold = styled.span`
  font-weight: 700;
`
const widescreen = css`
  height: 400px;
`

const Approach = ({data}) => (
  <Layout>
    <SEO title="Approach" />
    <PageHeader title={data.approachJson.header} description={data.approachJson.description}></PageHeader>
    <Image css={widescreen} fluid={data.approachJson.image.childImageSharp.fluid} />
    <Section className="Approach">
      <Wrapper>
          <h2>{data.approachJson.content.title}</h2>
          <p>{data.approachJson.content.body}</p>
          <List className={`fa-ul`}>
            {data.approachJson.content.items.map(item => (
              <li><span className={`fa-li`}><FontAwesomeIcon icon={[`fa`, `caret-right`]} style={{ color: 'red' }} /></span><Bold>{item.title}: </Bold>{item.description}</li>
            ))}
          </List>
      </Wrapper>
    </Section>
    <Cta 
      title={data.indexJson.cta.title} 
      linkText={data.indexJson.cta.link.text} 
      linkPath={data.indexJson.cta.link.path} />
  </Layout>
)

export const query = graphql`
  query Approach {
    indexJson {
      cta {
        link {
          path
          text
        }
        title
      }
    }
    approachJson {
      header
      description
      image {
        childImageSharp {
          fluid (maxWidth: 1920, quality: 95){
            ...GatsbyImageSharpFluid
          }
        }
      }
      content {
        body
        title
        items {
          title
          description
        }
      }
    }
  }
`
export default Approach
