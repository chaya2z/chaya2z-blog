import React from "react"
import FooterLinkOutbound from "./FooterLinkOutbound"
import FooterLinkInbound from "./FooterLinkInbound"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="text-center text-gray-50 py-4" style={{backgroundColor: "#222222"}}>
        <FooterLinkOutbound/>
        <FooterLinkInbound/>
        <div className="py-4 mt-6">&copy; 海底タランテラ 2020</div>
      </div>
    </footer>
  )
}

export default Footer
