/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PortableText } from "@portabletext/react"
import { myPortableTextComponents } from "components/RichText"
import RootLayout from "components/layout"
import { client } from "lib/client"
import { type Post } from "lib/type"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { groq } from "next-sanity"
import { Alexandria } from "next/font/google"
import Link from "next/link"

type props = {
  params : {
    slug :string
  }
}
const NFont = Alexandria({weight:'500',subsets:['arabic']})
 
export const getStaticPaths = async () => {
  const query = groq`
  *[_type=='post']
  {
  slug
  }
  `
  const slugs: Post [] = await client.fetch(query);
  const paths = slugs.map((slugp) => {
    const slug = slugp.slug.current.toString()
    return {
      params : {
        slug
      }
    }
  });
  
  
  return {
    paths,
    fallback: true,
  }
}
  
   
  export const getStaticProps : GetStaticProps =  async ({params}) => {
   const slug = params ? params.slug : ''
    const query = groq`
    *[_type=='post' && slug.current == $slug] [0]
  {
  ...,
  categories [] ->
  }`

 const post : Post =await client.fetch(query,{slug})
  return { props: { post } , revalidate: 60,}
  }
    
 
  
   
 
 function ContentPage ({post }: InferGetStaticPropsType<typeof getStaticProps>) {


    return  (
      <RootLayout>
    <article className={NFont.className}>
      
       <div className="flex justify-end"><BackToHome/></div>
      <section className="text-end p-4">
         <PortableText value={post.body as Post} components={myPortableTextComponents} /> 
        </section>
        <div className="flex justify-start my-4"><BackToHome/></div>

    </article>
      </RootLayout>
    )
  }
const BackToHome =() => {
  return  (
    <Link href={`/`}><div className="border-2 btn btn-outline rounded-sm btn-warning font-extrabold text-black">الصفحة الرئيسية 🔙  </div></Link>
  )
}
export default ContentPage
