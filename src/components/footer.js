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
  display: flex;
  flex-wrap: wrap;
`

const Flexbox = styled.div`
  display: flex;
  margin-right: 2rem;
`

const LinkList = styled.ul`
  flex: 1 1;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    padding: 0 1rem;

    a {
      text-decoration: none;
      color: white;
      transition: all 200ms;

      &:hover {
          color: #c00;
        }
    }
  }
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
          fixed (height:100) {
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
              <LinkList>
                {data.site.siteMetadata.menuLinks.map(menuLink => (
                  <li><Link to={menuLink.link}>{menuLink.name}</Link></li>
                ))}
              </LinkList>
          </Wrapper>
      </SiteFooter>
  )
}

export default Footer