import * as React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.strapiArticles
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.Title}
        description={post.Description}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.Title}</h1>
          <p>{moment(post.created_at).format("Do MMMM YYYY")}</p>
        </header>
        {/* <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        /> */}
        <section>
          <ReactMarkdown>
            {post.Content}
          </ReactMarkdown>
        </section>
      </article>
      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query GetArticleBySlug( $id: String ) {
    site {
      siteMetadata {
        title
      }
    }
    strapiArticles(id: {eq: $id}) {
      id
      Title
      Content
      Description
      created_at
    }
  }
`
