import React from "react"
import { graphql, Link } from "gatsby"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./index.css"
import Image from "gatsby-image/index"

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <div>
      <div className="heroImgSection">
        <h1 className="websiteTitle">海底タランテラ</h1>
      </div>
      <div className="navBarSection">
        <NavBar/>
      </div>
      <div className="indexContentsContainer">
        <h2>このサイトについて</h2>
        <div className={"siteDescription"}>
          <p>この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。</p>
        </div>
        <div className={"latestPostContainer"}>
          <h2>最近の投稿</h2>
          {edges.map((edge) => (
            <div key={edge.node.date}>
              <Link to={edge.node.fields.slug}>
                <div className={"gridParent"}>
                  <div className={"thumbnailItem"}>
                    <Image
                      fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                    />
                  </div>
                  <div className={"textItem"}>
                    <h3>{edge.node.frontmatter.title}</h3>
                    <p>{edge.node.excerpt}</p>
                    <p className={"nextArticleText"}>記事を読む</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={"morePostsButton"}>
          <p>その他の投稿を見る</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export const LatestPageQuery = graphql`
    query LatestPageQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
            edges {
                node {
                    excerpt(format: PLAIN, pruneLength: 100, truncate: true)
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "MM/DD YYYY")
                        tags
                        image {
                            childImageSharp {
                                fluid(maxWidth: 600, maxHeight: 315) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

