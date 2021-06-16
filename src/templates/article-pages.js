import * as React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  console.log({data});
  const post = data.strapiArticles
  const siteTitle = data.strapiArticles?.Title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.Title}
        description={'TODO:// Add Description here'}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.Title}</h1>
          <p>{post.created_at}</p>
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
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query GetArticleBySlug( $id: String ) {
    strapiArticles(id: {eq: $id}) {
      id
      Title
      Content
      created_at
    }
  }
`
