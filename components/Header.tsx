import Link from "next/link"

const Header = () => {
  return (
   <>
   <div className="navbar font-extrabold bg-base-100 text-end">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm gap-y-4 text-center   dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className=""><Link href={`/`}>الصفحة الرئيسية</Link></li>
        <li>
          <a>المزيد من المعلومات</a>
          <ul className="p-2">
          <li><Link href={`/about`}>من نحن ؟</Link></li>
            <li><Link href={`/terms`}>شروط الاستخدام</Link></li>
            <li><Link href={`/privacy`}>سياسة الخصوصية</Link></li>
          </ul>
        </li>
        <li><Link href={`/contact`}>اتصل بنا</Link></li>
      </ul>
    </div>
    <a className="md:text-2xl text-sm md:pl-3">𝔀𝓮𝓫 𝓵𝓮𝓪𝓭𝓮𝓻𝓼</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    <li><Link href={`/contact`}>اتصل بنا</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>المزيد من المعلومات</summary>
          <ul className="p-2 gap-y-10">
          <li><Link href={`/about`}>من نحن ؟</Link></li>
            <li><Link href={`/terms`}>شروط الاستخدام</Link></li>
            <li><Link href={`/privacy`}>سياسة الخصوصية</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href={`/`}>الصفحة الرئيسية</Link></li>
    </ul>
  </div>
  <div className="navbar-end hidden sm:flex ">
    <a className="btn bg-white rounded-sm border-black border-4 mr-3">
     <span className="text-yellow-300">COD </span> NETWORK <span className="text-[5px]">blog</span>
    </a>
  </div>
</div>
   </>
  )

}
export default Header