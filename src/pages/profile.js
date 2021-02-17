import React from "react"
import NavigationBar from "../components/header/navBar/NavigationBar"
import Footer from "../components/footer"
import "./reset.css"
import "./profile.css"
import CustomHead from "../components/head"

class ProfileImg extends React.Component {
  render() {
    return (
      <div className={"profileImg"}>
        <img
          src={require("../images/profileBackImg.png")}
          alt={"profile header"}
        />
      </div>
    )
  }
}

class ProfileIcon extends React.Component {
  render() {
    return (
      <div className={"profileIcon"}>
        <img
          className={"iconImg"}
          src={require("../images/icon.jpg")}
          alt={"profile icon"}
        />
      </div>
    )
  }
}

export default function Home() {
  return (
    <div>
      <CustomHead />
      <div className="titleSection">
        <h1 className={"title"}>プロフィール</h1>
      </div>
      <div className="navBarSection">
        <NavigationBar />
      </div>
      <div className="profileSection">
        <ProfileImg />
        <ProfileIcon />
        <div className={"textContents"}>
          <p>名前：茶屋辻</p>
          <br />
          <p>クラウド・コンテナ・仮想マシン関係の仕事がしたいです．</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
