import React from "react"
import { graphql } from "gatsby"
import { Jumbo } from "../components"
import { Layout, SEO } from "../components"
import styled from "styled-components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.4);
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button color="gray">Comprar</Button>
  </Layout>
)

export default IndexPage
