function  Pagination ({getCurrentPage,nPage}:{getCurrentPage:(n:number)=> void,nPage:number}) { 
  const TAB = new Array(Math.ceil(nPage/3)).fill(0)
  if(!TAB.length) return <div className=""></div>
  return (
<ol className="flex justify-center gap-1 text-xs font-medium">


  {
   TAB.map((i,ii)=> (
    <li key={ii}>
    <p
    onClick={()=> getCurrentPage(ii+1)}
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      {ii +1}
    </p>
  </li>
   ))
  }

  </ol>
  )
}
export default Pagination 