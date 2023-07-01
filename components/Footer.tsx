import Link from "next/link"
import Facebook from "./media/Facebook"

const Footer =() => {
  return  (
   <div className="max-w-7xl select-none mt-5 mx-auto">
    <div className="w-full h-1 bg-black mb-4"></div>
   
      <div className="text-center">Pages - الصفحات</div>
     <div className="flex justify-end items-center  justify-center my-10 sm:pr-4">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-5 gap-x-7 text-xs md:text-sm">
       <Link href={`/contact`} className="">اتصل بنا </Link>
       <Link  href={`/terms`}  className="">شروط الاستخدام </Link>
       <Link href={`/privacy`}  className="">سياسة الخصوصية</Link>
       <Link href={`/about`}>من نحن ؟</Link>
       <Link href={`/`}  className="">الصفحة الرئيسية</Link>
      </div>
     </div>
     <div className="my-10 flex justify-end items-center sm:pr-4">
      <Facebook/>
     </div>
     <div className="text-center my-4">Copyright @ .....<span className="text-yellow-600">WebLeaders</span> ...... @حقوق النشر </div>
   </div>
  )
}
export default Footer