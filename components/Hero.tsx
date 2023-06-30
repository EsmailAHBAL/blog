"use client"
import { Reem_Kufi } from "next/font/google"

  const font = Reem_Kufi({
 subsets:['arabic'],
 weight:"700"
})
const Hero =() => {

  return (
   <div className="max-w-7xl mx-auto select-none  mb-10 mt-6">
     <div
     
      className={font.className}>
         <div className="my-4 text-center">
         <p className="text-3xl md:text-5xl mb-4"
         
         >وسع معرفتك في عالم الويب ..... معنا</p>
         <span className="my-4 text-gray-400">ستجد الكثير من المقالات تتضمن  افكارا و حلولا هنا ، في جميع المجالات ،التي تحتاجها في عالم الويب</span>
         </div>
     </div>
   </div>
  )
}
export default Hero