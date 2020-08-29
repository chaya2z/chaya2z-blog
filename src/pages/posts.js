import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./list.css"

class TagTable extends React.Component {
  render() {
    return (
      <div className={"tagTable"}>
        <div className={"tag"}>Tag</div>
        <div className={"tagItem"}>プログラミング</div>
        <div className={"tagItem"}>ネットワーク</div>
        <div className={"tagItem"}>OS/低レイヤ</div>
        <div className={"tagItem"}>WWW</div>
        <div className={"tagItem"}>その他</div>
      </div>
    )
  }
}

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className="titleSection">
        <h1 className={"title"}>技術記事一覧</h1>
      </div>
      <div className="navBarSection">
        <NavBar/>
      </div>
      <TagTable/>
      <div className="contentsContainer">
        { edges.map((edge) => (
          <div key={ edge.node.date } className="articleCardContents">
            <Link to={ edge.node.fields.slug }>
              <Image
                fluid={ edge.node.frontmatter.image.childImageSharp.fluid }
              />
              <div className="textArea">
                <h2 className={"cardTitle"}>{ edge.node.frontmatter.title }</h2>
                <p className={"cardText"}>{ edge.node.excerpt }</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
            edges {
                node {
                    excerpt(format: PLAIN, pruneLength: 80, truncate: true)
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
            group(field: frontmatter___tags) {
                fieldValue
            }
        }
    }
`