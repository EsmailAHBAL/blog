/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlForImage } from "lib/image"
import Image from "next/image"
import Link from "next/link"

export const myPortableTextComponents = {
 types: {
  // eslint-disable-next-line @next/next/no-img-element, @typescript-eslint/no-unsafe-argument
  image: ({value}:any) =>(
   <div className="relative w-full h-96 m-10 mx-auto">
     <Image
  fill
  className="object-contain"
  alt="hello"
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  src={urlForImage(value).url()}  
  />
   </div>
  ),
  callToAction: ({value, isInline}:any) =>
    isInline ? (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      <a href={value.url}>{value.text}</a>
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      <div className="callToAction">{value.text}</div>
    ),
},

            list: {
             bullet: ({ children }: any) => (
             <ul className="ml-10 py-5 list-item  space-y-5 ">{children}</ul>),
             number: ({ children }: any) => (
             <ol className="mt-lg list-decimal">{children}</ol>
             ),
             },
             block: {
              h1: ({ children }: any) => (
              <h1 className="text-5xl py-10 font">{children}</h1>
              ),
              h2: ({ children }: any) => (
               <h2 className="text-4xl py-10 font">{children}</h2>
               ),h3: ({ children }: any) => (
                <h3 className="text-3xl py-10 font">{children}</h3>
                ),h4: ({ children }: any) => (
                 <h4 className="text-2xl py-10 font">{children}</h4>
                 )}
              
              
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ,blockquote: ({ children }: any) => (
               <blockquote className=" Iborder-l-[#F7AB0A] border-1-4 pl-5 py-5 my-5">
               {children}
               </blockquote>
               ),              marks: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                link: ({ children, value }: any) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                const rel=!value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
                
                return (
                <Link
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                href={value.href}
                rel={rel}
                className="underline Idecoration-[#F7AB0A] text-red-700 □hover: decoration-black">
                {children}
                </Link>
                );
             
                }
  }
               
              }


             

