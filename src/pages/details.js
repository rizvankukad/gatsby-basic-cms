import React from 'react'
import { Link, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;
const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
      {data.allStrapiArticles.edges.map(document => (
        <div key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.Title}</Link>
          </h2>
            <ReactMarkdown>
                {document.node.Content}
            </ReactMarkdown>
          
        </div>
      ))}
    
    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticles {
      edges {
        node {
          id
          Title
          Content
        }
      }
    }
  }
`