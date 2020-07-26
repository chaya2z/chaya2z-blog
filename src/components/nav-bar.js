import React from "react"
import "./nav-bar.css"

class NavLinkItem extends React.Component {
  render() {
    return (
      <div className="navItem">
        <p className="titleText">{this.props.title}</p>
        <p className="subTitleText">{this.props.subTitle}</p>
      </div>
    )
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navBarContainer">
        <div className="imgItem">img</div>
        <NavLinkItem title="ホーム" subTitle="home"/>
        <NavLinkItem title="技術" subTitle="technology"/>
        <NavLinkItem title="雑記" subTitle="miscellaneous"/>
        <NavLinkItem title="プロフィール" subTitle="profile"/>
        <NavLinkItem title="お問い合わせ" subTitle="contact"/>
      </nav>
    )
  }
}

export default NavBar
