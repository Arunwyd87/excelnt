import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const cartItems=useSelector((store)=>{
      return  store.List.items;
    })
    const navigate = useNavigate();
   const moreHandler=()=>{
    
   navigate('/Cart');
    }
    const uploadHandler=()=>{
    
      navigate('/upload');
       }
    return(
        <div className="h-14  w-full bg-lime-500">
Header
<button onClick={moreHandler}>cart</button>
<button onClick={uploadHandler}>upload</button>
<span>{cartItems.length}</span>
        </div>
    )
}
export default Header;