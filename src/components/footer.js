import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const SiteFooter = styled.footer`
  padding: 2em 0;
  background-color: #000;
  color: #fff;
`

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Flexbox = styled.div`
  display: flex;
`

const SaleTag = styled.p`
  opacity: 0.4;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed (width:150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
      <SiteFooter id={`colophon`}>
          <Wrapper>
              <Flexbox>
                  <Link to={`/`} className="footer-logo" ><Image fixed={data.image.childImageSharp.fixed} alt="site logo" /></Link>
              </Flexbox>
              <SaleTag>Website built by <a href={`https://supersweetsites.com`}>Super Sweet Sites</a>.</SaleTag>
          </Wrapper>
      </SiteFooter>
  )
}

export default Footer