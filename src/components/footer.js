import React from "react"
import "./footer.css"

class IconsContents extends React.Component {
  render() {
    return (
      <div className="iconContents">
        <div className="iconItem">
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <path
              d="M400,200c0,110.5-89.5,200-200,200S0,310.5,0,200S89.5,0,200,0S400,89.5,400,200z M163.4,305.5
	c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6
	c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,0-48.2,21.6-48.2,48.2
	c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6
	c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5
	c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5"
              fill="#FFF"
            />
          </svg>
        </div>
        <div className="iconItem">
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              fill="#FFF"
            />
          </svg>
        </div>
      </div>
    )
  }
}

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="LinksContent">
        <div className="footerLink borderLineLeft">ホーム</div>
        <div className="footerLink borderLineLeft borderLineRight">サイトポリシー</div>
        <div className="footerLink borderLineRight">お問い合わせ</div>
      </div>
    )
  }
}

class Copyright extends React.Component {
  render() {
    return (
      <div className="copyrightContainer">
        &copy; 海底タランテラ 2020
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerContainer">
          <IconsContents/>
          <SiteLinks/>
          <Copyright/>
        </div>
      </footer>
    )
  }
}

export default Footer
