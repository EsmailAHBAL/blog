const Loading =() => {
 const size = 50
  return (
  <div className="">
    <div className="w-[90%] h-[30vh]  flex items-center justify-center">
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="animate-spin">
      <div className="h-full w-full border-4 border-t-black
       border-b-yellow-700 rounded-[50%]">
      </div>
    </div>
  </div>
  </div>
  )
}
export default Loading