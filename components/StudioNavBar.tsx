/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { type NavbarProps } from "sanity"

export default function StudioNavBar (props : NavbarProps){
 return <div className="border-black border-2 rounded-sm p-2">
 <div className="text-gray-700 p-4 font-extrabold text-center underline">Esmail WebSite  </div>
 <> {props.renderDefault(props)}</>
 </div>
}