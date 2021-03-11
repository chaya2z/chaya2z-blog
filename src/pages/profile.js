import React from "react"
import "./reset.css"
import "./profile.css"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

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
      <Header />
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
