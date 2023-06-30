import { type NextApiRequest,  type NextApiResponse } from "next";

export default function preview (req:NextApiRequest,res :NextApiResponse){
 res.setPreviewData({})
 res.writeHead( 307,{location:"/"})
 res.end()
}