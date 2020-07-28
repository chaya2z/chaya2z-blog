import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./demo-blog.css"

class ArticleEyeCatch extends React.Component {
  render() {
    return (
      <div className={"eyeCatchImg"}>
        <img src={require("../images/test.png")} alt={"eye catch"}/>
      </div>
    )
  }
}

class ArticleData extends React.Component {
  render() {
    return (
      <div className={"dataContainer"}>
        <div className={"ArticleDate"}>
          2020.07.31
        </div>
        <div className={"ArticleTag"}>
          プログラミング
        </div>
      </div>
    )
  }
}

class ArticleTitle extends React.Component {
  render() {
    return (
      <div>
        <h1 className={"articleTitle"}>記事タイトル</h1>
      </div>
    )
  }
}

class ArticleIndex extends React.Component {
  render() {
    return (
      <div className={'articleIndex'}>
        <div className={'indexText'}>目次</div>
        <ol className={'indexList'}>
          <li className={''}>見出し</li>
          <li className={''}>見出し</li>
          <ul>
            <li>hoge</li>
            <li>huga</li>
          </ul>
          <li className={''}>見出し</li>
        </ol>
      </div>
    )
  }
}

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="blogContainer">
        <ArticleEyeCatch/>
        <div className={"textContents"}>
          <ArticleData/>
          <ArticleTitle/>
          <p>この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。</p>
          <ArticleIndex/>
          <h2 className={'caption1'}>見出し1</h2>
          <p>この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。</p>
          <h3 className={'caption2'}>見出し2</h3>
          <p>この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。</p>
          <h4 className={'caption3'}>見出し3</h4>
          <p>この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
