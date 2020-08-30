import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./profile.css"
import Head from "../components/head"

class ProfileImg extends React.Component {
  render() {
    return (
      <div className={"profileImg"}>
        <img src={require("../images/profileBackImg.png")} alt={"profile header"}/>
      </div>
    )
  }
}

class ProfileIcon extends React.Component {
  render() {
    return (
      <div className={"profileIcon"}>
        <img className={"iconImg"} src={require("../images/icon.jpg")} alt={"profile icon"}/>
      </div>
    )
  }
}

export default function Home() {
  return (
    <div>
      <Head/>
      <div className="titleSection">
        <h1 className={"title"}>プロフィール</h1>
      </div>
      <div className="navBarSection">
        <NavBar/>
      </div>
      <div className="profileSection">
        <ProfileImg/>
        <ProfileIcon/>
        <div className={"textContents"}>
          <p>名前：茶屋辻</p><br/>
          <p>好きな分野は低レイヤ（OS・CPU）です．</p>
          <p>プログラミング言語はPythonを一番使っています．100行ほどの簡単なスクリプトや機械学習（主に自然言語処理）に使っています．競技プログラミング（AtCoder）ではPythonを使っています．</p>
          <p>ウェブサイト制作もします．このページもReact.jsを使い作りました．</p>
          <p>また，自宅サーバをやっています．将来はインフラ（クラウド基盤系）の仕事がしたいです．</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
