const UploadPage = ()=>{
    return(
        <div className="  relative   h-96">
        <div className="w-6/12 h-56 items-center justify-center flex  absolute top-[50%] left-[30%] bg-white rounded-sm border-2 shadow-sm">
            <input type="file"/>
            <button className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  >upload</button>

        </div>
        </div>
    )
}
export default UploadPage;