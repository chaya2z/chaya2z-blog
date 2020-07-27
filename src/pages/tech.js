import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./list.css"

class TagTable extends React.Component {
  render() {
    return (
      <div className={"tagTable"}>
        <div className={'tag'}>Tag</div>
        <div className={'tagItem'}>プログラミング</div>
        <div className={'tagItem'}>ネットワーク</div>
        <div className={'tagItem'}>OS/低レイヤ</div>
        <div className={'tagItem'}>WWW</div>
        <div className={'tagItem'}>その他</div>
      </div>
    )
  }
}

class ArticleCard extends React.Component {
  render() {
    return (
      <div className="articleCardContents">
        <img className="thumbnail" src={require("../images/test.png")} alt={"thumbnail"}/>
        <div className="textArea">
          <h2 className={'cardTitle'}>ホームページ作成まとめ その1</h2>
          <p className={'cardText'}>このホームページを作成過程をまとめました。その1ではデザインの作成までをまとます。目次 1. 目的 2. 要件定義 ....</p>
        </div>
      </div>
    )
  }
}

export default function Home() {
  return (
    <div>
      <div className="titleSection">
        <h1 className={'title'}>技術記事一覧</h1>
      </div>
      <div className="navBarSection">
        <NavBar/>
      </div>
      <TagTable/>
      <div className="contentsContainer">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
      </div>
      <Footer/>
    </div>
  )
}
