import Link from "next/link"
import React, { type FC } from "react"
type clientRouteType = {
 route:string,
 children :React.ReactNode
}
const ClientRoute : FC<clientRouteType>= ({children,route}) => {
  return (
   <Link href={route}>{children}</Link>
  )
}
export default ClientRoute