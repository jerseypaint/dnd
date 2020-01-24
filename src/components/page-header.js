import React from "react"
import Section from "./section"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const pageHeader = css`
  border-bottom: 1px solid #D8D8D8;
`

const Flexbox = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const Title = styled.h1`
  @media (min-width: 768px) {
    flex: 1 1;
    margin: 0 1.5em;
  }
`
const Description = styled.p`
  font-size: 1.167em;
  
  @media (min-width: 768px) {
    margin: 0 1.5em;
    flex: 1 1;
  }
`


const Hero = (props) => (
  <Section css={pageHeader} className={`page-header`}>
    <Flexbox>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Flexbox>
  </Section>
)

export default Hero
