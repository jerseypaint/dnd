import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`
const Section = styled.section`
  padding: 4em 1em;

  @media (min-width: 768px) {
    padding: 4em 0;
  }
`

const Container = ({children}) => (
    <Wrapper className={`container`}>{children}</Wrapper>
)

export default props => (
  <Section className={props.className} style={props.style}>
    <Container>{props.children}</Container>
  </Section>
)