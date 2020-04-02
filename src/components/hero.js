import React from "react"
import styled from "@emotion/styled"
import Section from "./section"
import Image from "gatsby-image"


const Flexbox = styled.div`
  margin: 0 1em;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1100px) {
    padding: 4em 0;
  }
`
const Content = styled.div`
  @media (min-width: 768px) {
    max-width: 47%;
  }
`

const FeaturedImage = styled.div`
  margin: 0 -1em;

  @media (min-width: 768px) {
    position: absolute;
    left: auto;
    top: 0;
    right: 0;
    bottom: auto;
    z-index: -1;
    max-width: 53%;
    width: 100%;
    margin: auto;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 33% 100%);
    max-height: 800px;

    .gatsby-image-wrapper {
      max-height: 800px;
    }
  }
`

const Hero = (props) => (
  <Section className={'Hero'}>
    <Flexbox>
      <Content>
        <h2 className={`h1`}>{props.title}</h2>
        <p>{props.subtitle}</p>
      </Content>
      <FeaturedImage>
        <Image fluid={props.image} />
      </FeaturedImage>
    </Flexbox>
  </Section>
)

export default Hero