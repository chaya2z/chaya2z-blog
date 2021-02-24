import React from "react"
import FooterLinkOutbound from "./FooterLinkOutbound"
import FooterLinkInbound from "./FooterLinkInbound"

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <FooterLinkOutbound/>
        <FooterLinkInbound/>
        <div>&copy; 海底タランテラ 2020</div>
      </div>
    </footer>
  )
}

export default Footer
