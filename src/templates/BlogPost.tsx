import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../pages/demo-blog.css"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Paper } from "@material-ui/core"
import type { PostDataQuery } from  "../__generated__/gatsby-types"

interface PostData {
  data: PostDataQuery
}

export default function BlogPost({ data }: PostData) {
  const post = data.markdownRemark
  return (
    <div>
      <Header/>
      <article>
        <Paper className="max-w-screen-lg mt-16 mx-auto mb-8">
          <div className="p-5">
            <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
          </div>
          <div className="py-1 px-2.5">
            <div className="flex">
              <div>{post.frontmatter.date}</div>
            </div>
            <div>
              <h1 className="my-8 pb-4 text-4xl border-b-4 border-gray-500">{post.frontmatter.title}</h1>
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

export const postQuery = graphql`
    query PostData($slug: String!) {
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
