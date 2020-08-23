import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./list.css"

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <div>
      <div className="titleSection">
        <h1 className={"title"}>技術記事一覧</h1>
      </div>
      <div className="navBarSection">
        <NavBar/>
      </div>
      <TagTable/>
      <div className="contentsContainer">
        {edges.map((edge) => (
          <div key={edge.node.date} className="articleCardContents">
            <Image
              fluid={edge.node.frontmatter.image.childImageSharp.fluid}
            />
            <div className="textArea">
              <h2 className={"cardTitle"}>{edge.node.frontmatter.title}</h2>
              <p className={"cardText"}>{edge.node.frontmatter.date}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

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

export const query = graphql`
query {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          date(formatString: "MM/DD YYYY")
          title
          image {
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 1280) {
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
