"use client"
import { client } from "lib/client"
import { groq } from "next-sanity"
import React, { useState, type FC, useEffect } from "react"
type props = {
 getCategory :(s:string)=> void}
const getCategoryDB= async () => {
  const req = groq`
  *[_type == 'category']  {
    title 
  }`
  const data : {title:string} [] = await client.fetch(req)
  return data
}
const Bar : FC<props>=({getCategory}) => {
 const [categories,setCategories]= useState([] as {title:string}[])
 const [active,isAcitve]= React.useState(0)
 const handler= (c:string,i:number) => {
  isAcitve(i)
  getCategory(c)
 }
 useEffect(() => {
   // eslint-disable-next-line @typescript-eslint/no-floating-promises
   getCategoryDB().then((res)=> setCategories(res))
 },[])
  return (<>
      <div className="w-full flex justify-end  pr-5 " onClick={()=> getCategory('')}>
         <p className="border-4 border-black px-10 border-b-yellow-500">All</p> 
      </div>

   <div className="my-4 text-xs md:text-sm text-center md:max-w-7xl ">
    <div className="grid grid-cols-3 md:grid-cols-6   ">
    {
      categories.map((c,i)=> (
        <div className={`${active === i 
          ? 'text-yellow-600 border-8  px-2 border-black border-t-0 border-x-0'
          : 'py-2 md:py-2  border-2 border-gray-300 border-t-0 p-3  border-x-0'}`} key={i}
          onClick={()=> handler(c.title,i)}>
       {c.title}
      </div>
     ))
    }
    </div>
   </div>
    </>
  )
}
export default Bar