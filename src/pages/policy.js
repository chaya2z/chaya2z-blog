import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./policy.css"

export default function Home() {
  return (
    <div>
      <div className="titleSection">
        <h1 className={'title'}>サイトポリシー</h1>
      </div>
      <div className={'navBarSection'}>
        <NavBar/>
      </div>
      <div className={'policyContainer'}>
        <div className={'textContent'}>
          <h2>見出し1</h2>
          <p>この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
