import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./policy.css"
import Head from "../components/head"

export default function Home() {
  return (
    <div>
      <Head/>
      <div className="titleSection">
        <h1 className={'title'}>サイトポリシー</h1>
      </div>
      <div className={'navBarSection'}>
        <NavBar/>
      </div>
      <div className={'policyContainer'}>
        <div className={'textContent'}>
          <h2>1. Cookieについて</h2>
          <p>このウェブサイトでは，アクセス解析のため，Cookieを使用しています．</p>
          <h2>2. Googleアナリティクスについて</h2>
          <p>このサイトでは，Googleアナリティクスを使用しています．</p>
          <p>規約についての詳しい内容は，Googleの下記のページをご確認ください．</p>
          <a href={"https://policies.google.com/technologies/partner-sites?hl=ja"}>ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用</a>
          <h2>3. Googleフォームについて</h2>
          <p>このサイトでは，お問い合わせフォームにGoogleフォームを使用しています．</p>
          <p>規約についての詳しい内容は，Googleの下記のページをご確認ください．</p>
          <a href={"https://policies.google.com/technologies/partner-sites?hl=ja"}>ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用</a>
          <h2>4. 免責</h2>
          <p>当サイトに掲載された内容により，生じた損害等については一切の責任を負いかねます．</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
