import React from "react"
import { Link } from "gatsby"
import "./nav-bar.css"

class NavLinkItem extends React.Component {
  render() {
    return (
      <Link to={this.props.link} className="navItem">
        <p className="titleText">{this.props.title}</p>
        <p className="subTitleText">{this.props.subTitle}</p>
      </Link>
    )
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navBarContainer">
        {/*<div className="imgItem"></div>*/}
        <NavLinkItem link={"/"} title="ホーム" subTitle="home" />
        <NavLinkItem link={"/posts"} title="ブログ" subTitle="blog" />
        <NavLinkItem
          link={"/profile"}
          title="プロフィール"
          subTitle="profile"
        />
        <NavLinkItem
          link={"/contact"}
          title="お問い合わせ"
          subTitle="contact"
        />
      </nav>
    )
  }
}

export default NavBar
