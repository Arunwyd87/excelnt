const ListView=(props)=>{
  
    const  {info} = props?.details;
    
  console.log("**",props?.details);
  
    return(
     
        <div  onClick={()=>props.propItem(info)}>
             <ul class="flex flex-col  border-b w-full ">
    <li class="flex flex-row">
      <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
        <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <a href="#" class="block relative">
            <img alt="profil" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" class="mx-auto object-cover rounded-full h-10 w-10" />
          </a>
        </div>
        <div class="flex-1 pl-1 mr-16">
          <div class="font-medium dark:text-white">{info?.name}</div>
          <div class="text-gray-600 dark:text-gray-200 text-sm">Developer</div>
        </div>
        <div class="text-gray-600 dark:text-gray-200 text-xs">6:00 AM</div>
      </div>
    </li>
    </ul>
        </div>
    )

}
export default ListView;