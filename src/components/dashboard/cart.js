import { useSelector } from "react-redux"
import ListView from "./listView";
function  onClickListner(item){
    console.log("clicked",item.name);
   // dispatch(addItem(item))
}
const Cart=()=>{
    const CartItems=useSelector
((store)=>{
    return store.List.items;
})
    return(
        <div className="bg-white p-10 m-10 border-lg shadow "> 
            <span>{CartItems.map((item)=>{
             return(  <ListView details={item}  propItem={()=>onClickListner(item)} />)
            })}</span>
        </div>
    )
}
export default Cart;