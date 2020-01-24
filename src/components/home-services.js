import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from "./section"

const Flexbox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

const FlexboxItem = styled.div`
  @media (min-width: 768px) {  
    flex: 1 1;
    &:nth-of-type(1){
      padding: 0 1em 0 0;
    }
  }
`

const button = css`
  background-color: #c00;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding: 1.25em 2em;
  width: auto;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7778em;
  font-weight: 700;
  line-height: 1.2;
  transition: all 200ms;
  margin-bottom: 1em;
  margin-left: 33%;

  &:hover, &:focus {
      border-color: transparent;
      background:  #9d1b22;
      color:  #fff;
  }

  @media (min-width: 768px) {
    margin-left: 0;
  }
`

const heading = css`
  position: relative;

  &:before {
    content: ' ';
    display: inline-block;
    position: relative;
    left: 0;
    top: 0;
    background-color: red;
    width: 34px;
    height: 4px;
    margin: 0 16px 7px 0;
  }
`

const homeServices = css`
  padding-bottom: 0;
  @media (min-width: 768px) {
    padding-bottom: 4em;
  }
`

const image = css`
  margin: 0 -1em;
  @media (min-width: 768px) {
    margin: auto;
  }
`

const HomeServices = (props) => (
  <Section css={homeServices} className={`HomeServices`}>
    <Flexbox>
      <FlexboxItem>
        <h2 css={heading} >{props.title}</h2>
        <p>{props.description}</p>
        <ul className={`fa-ul`}>
          {/** Start Loop */}
          {props.services.map(service => (
          <li><span className={`fa-li`}><FontAwesomeIcon icon={[`fa`, `caret-right`]} style={{ color: 'red' }} /></span>{service.title}</li>
          ))}
          {/** End Loop */}
        </ul>
        <Link css={button} to={'/services'}>Learn more</Link>
      </FlexboxItem>
      <FlexboxItem>
        <Image css={image} fluid={props.image}/>
      </FlexboxItem>
    </Flexbox>
  </Section>
)

export default HomeServices