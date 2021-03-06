import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from "./section"

const Flexbox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1100px) {
    flex-wrap: nowrap;
  }
`

const FlexboxItem = styled.div`
  text-align: center;
  padding: 1.2rem;

  .svg-inline--fa {
    height: 32px;
    width: auto;
    margin-bottom: 1em;
  }


  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    flex: 1 1;
  }
`

const heading = css`
  position: relative;
  text-align: center;

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

const subheading = css`
  font-size: 1.4em;
`

const WhyUs = (props) => (
  <Section className={`WhyUs`}>
    <h2 css={heading} >{props.title}</h2>
    <Flexbox>
        {/** Start loop */}
        {props.items.map(item => (
        <FlexboxItem>
            <FontAwesomeIcon icon={[`fa`, `${item.icon}`]} style={{ color: 'red' }} />
            <h3 css={subheading}>{item.title}</h3>
            <p>{item.description}</p>
        </FlexboxItem>
              ))}
        {/** End loop */}
    </Flexbox>
  </Section>
)

export default WhyUs