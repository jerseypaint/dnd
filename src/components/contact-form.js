import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Form = styled.form`
  display: block;
`
const Label = styled.label`
  display: block;
  p {
    margin-bottom: 4px;
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
  border: none;

  &:hover, &:focus {
      border-color: transparent;
      background:  #9d1b22;
      color:  #fff;
    }
  }
`

const fields = css`
  display: block;
  border: 1px solid #D8D8D8;
  padding: 7px;
  margin-bottom: 1em;
  width: 100%;
`

const ContactForm = (props) => (
  <Form name={props.name} method="post" netlify-honeypot="bot-field" data-netlify="true" id={props.name} className={props.className} >
    <input css={fields} type="hidden" name="bot-field" />
    <input css={fields} type="hidden" name="form-name" value={props.name} />
    <Label>
      <p>Name:</p>
      <input css={fields} type="text" name="name" id="name" placeholder="John Doe" />
    </Label>
    <Label>
    <p>Email:</p>
      <input css={fields} type="email" name="email" id="email" placeholder="johndoe@smallbiz.com" />
    </Label>
    <Label>
    <p>Message:</p>
      <textarea css={fields} name="message" id="message" rows="5" placeholder="I need a new website" />
    </Label>
    <button css={button} type="submit">Contact Us</button>
  </Form>
  )

  export default ContactForm
