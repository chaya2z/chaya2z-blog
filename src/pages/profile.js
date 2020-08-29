import React from "react"
import NavBar from "../components/nav-bar"
import Footer from "../components/footer"
import "./reset.css"
import "./profile.css"

class ProfileImg extends React.Component{
  render() {
    return (
      <div className={'profileImg'}>
        <img src={require("../images/profileBackImg.png")} alt={"profile header"}/>
      </div>
    )
  }
}

class ProfileIcon extends React.Component{
  render() {
    return (
      <div className={'profileIcon'}>
        <img className={'iconImg'} src={require("../images/icon.jpg")} alt={"profile icon"}/>
      </div>
    )
  }
}

export default function Home() {
  return (
    <div>
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
          <p>この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。この記事では画像サイズ・文字の大きさ・文字の種類といったデザインを確認できます。</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
