import ClientRoute from "lib/ClientRoute"
import { urlForImage } from "lib/image"
import {  type  Post } from "lib/type"
import Image from "next/image"
import { type FC } from "react"
import type { Image as IM} from 'sanity'


type BlogListProps = {
 posts : Post []
}
const BlogList : FC<BlogListProps>=({posts}) => {
  return (<>
  

   <div className="grid grid-cols-1 md:grid-cols-3  gap-x-10 gap-y-20  pb-20 pt-10">
    {
     posts.map((p,i)=> (
     <ClientRoute key={p._id } route={`/post/${p.slug.current}`}>

      <div className="flex flex-col group cursor-pointer text-end " >
    <div className="relative w-full h-80">
    <Image
             className=" w-full object-cover object-left md:object-center scale-110 transition-all
             duration-400 hover:scale-100" 
             src={urlForImage(p.mainImage as unknown as IM).url()} alt="blog" 
                  fill
             />
    <div className="bg-opacity-20 bg-black absolute -bottom-4
    text-white
    font-extrabold
    w-full 
    rounded shadow-lg
    p-5
    backdrop-blur-lg">
      <p className="">{p.title}</p>
      <div className="flex justify-end">{p.categories?.map((c,i) => (
        <div className="px-1" key={i}>
        {
          c ? <div className="badge badge-warning gap-2 py-2 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        {c.title}
        </div> : 'unCategory'
        }
        </div>
      ))}</div>
    </div>
    </div>
    <div className="mt-10">
      <p className="p-4 text-gray-600 line-clamp-2 ">{p.description}</p>
    </div>
    <div className="pr-2 text-gray-400 text-xs flex justify-end items-center gap-x-5 ">
    <p className="">{new Date(p._updatedAt).toLocaleDateString("en-Us",{year:"numeric",month:'long',day:"numeric"})}</p>
      <p className="">{p.author.name}</p>


    </div>
    <div className="mt-7 text-center">
    <button className="btn btn-outline hover:bg-black hover:text-white rounded-sm">Read more</button>
    </div>
      
    </div>
             </ClientRoute>
     ))
    }
   </div>
    </>
  )
}
export default BlogList