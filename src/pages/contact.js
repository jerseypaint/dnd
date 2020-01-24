import React from "react"
import { graphql } from 'gatsby'
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import PageHeader from "../components/page-header"
import Section from "../components/section"
import Form from "../components/contact-form"

const widescreen = css`
  height: 400px;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

const Contact = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader title={data.contactJson.header} description={data.contactJson.description}></PageHeader>
    <Image css={widescreen} fluid={data.contactJson.image.childImageSharp.fluid} />
    <Section className="Contact">
      <Wrapper>
        <h2>{data.contactJson.content.title}</h2>
        <p>{data.contactJson.content.body}</p>
        <Form />
      </Wrapper>
    </Section>
  </Layout>
)

export const query = graphql`
  query Contact {
    contactJson {
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
      }
    }
  }
`

export default Contact
