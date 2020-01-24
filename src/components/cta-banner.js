import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Section from "./section"
import { Link } from "gatsby"

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`
const ctaBanner = css`
  background-color: #c00;
  color: #fff;

  h2 {
    color: #fff;
  }
`

const button = css`
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding: 1.25em 2em;
  width: auto;
  text-decoration: none;
  border: 1px solid #fff;
  text-transform: uppercase;
  font-size: 0.7778em;
  font-weight: 700;
  line-height: 1.2;
  transition: all 200ms;

  &:hover, &:focus {
      background:  #fff;
      color:  #000;
    }
  }
`
const CtaBanner = (props) => (
  <Section css={ctaBanner} className={`CtaBanner`}>
    <Wrapper>
      <h2>{props.title}</h2>
      <Link css={button} to={props.linkPath}>{props.linkText}</Link>
    </Wrapper>
  </Section>
)

export default CtaBanner