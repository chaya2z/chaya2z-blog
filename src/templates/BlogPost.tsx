import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../pages/demo-blog.css"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Paper } from "@material-ui/core"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Header/>
      <article>
        <Paper className="blogContainer">
          <div className={"eyeCatchImg"}>
            <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
          </div>
          <div className={"textContents"}>
            <div className={"dataContainer"}>
              <div className={"ArticleDate"}>{post.frontmatter.date}</div>
            </div>
            <div>
              <h1 className={"articleTitle"}>{post.frontmatter.title}</h1>
              <section>
                <div
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  className={"blogText"}
                />
              </section>
            </div>
          </div>
        </Paper>
      </article>
      <Footer/>
    </div>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            rawMarkdownBody
            frontmatter {
                date(formatString: "YYYY年MM月DD日")
                slug
                tags
                title
                image {
                    childImageSharp {
                        fluid(maxHeight: 630, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`