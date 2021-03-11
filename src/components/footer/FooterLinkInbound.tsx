import React from "react"
import { Link } from "gatsby"

const FooterLinkInbound: React.FC = () => {
  return (
    <div className="flex justify-center py-2">
      <Link to={"/"} className="border-r border-l w-48 hover:text-blue-500 duration-200 ease-in">ホーム</Link>
      <Link to={"/policy"} className="border-r w-48 hover:text-blue-500 duration-200 ease-in">サイトポリシー</Link>
      <Link to={"/contact"} className="border-r w-48 hover:text-blue-500 duration-200 ease-in">お問い合わせ</Link>
    </div>
  )
}

export default FooterLinkInbound
