import CorouselPage from "../atoms/corousel";
import {useNavigate} from 'react-router-dom';
const LandingPage=()=>{
    const navigate = useNavigate();
  const navigateToDashboard = () => navigate('/dashboard');
  const navigateToLogin = () => navigate('/login')
    return(
    <div>
        <div style={{height: '100vh'}} className="bg-green-500 h-100  text-center relative">
            <div className="flex flex-wrap  m-10 p-10 absolute bottom-0 top-0 right-0 left-0  bg-white border-gray-200 rounded-lg shadow">
               <div className=" border-slate-200   border-r-2 w-[30%] h-full">
              <span className="italic p-5"> We've used Inter font family for all of the Tailwind UI examples because it's a beautiful font for UI design and is completely 
               open-source and free. Using a custom font is nice because it allows us to make the components look the same on all browsers 
               and operating systems.</span>
               <button type="button" className="mt-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 
                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={navigateToDashboard}>Green</button>
               </div>
               <div className=" w-[70%] h-full ">
                <a className="absolute right-10 bold text-blue-500" href="#" onClick={navigateToLogin}>Login | Signup</a>
                <CorouselPage ></CorouselPage>
               </div>
            </div>
            
        </div>
    </div>)

}
export default LandingPage;