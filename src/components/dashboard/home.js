import ListView from "./listView";
//import data from '../../assets/db.json'
import Header from "../common/header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearitem, addItem } from "../../utils/AppSlice";
async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("inside1", checkData);
        // if checkData is not undefined then return it
        if (checkData !== undefined) {
            console.log("inside2", checkData);
            return checkData;
        }
    }
}


const Dashboard = () => {
    const dispatch = useDispatch();
    const [listData, setListData] = useState([]);
    const filterData = listData.filter((item) => {
        console.log("123", item);
        return item.info.name !== "KFC"
    })
    useEffect(() => { getDummyData(); }, []);
    async function getDummyData() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const jsonDaata = await data.json();
        console.log("jsondata1", jsonDaata);
        const checkData = await checkJsonData(jsonDaata);

        console.log("jsondata2", checkData);
        setListData(checkData);
        console.log("ListData3", listData);
    }
    function onClickListner(item) {
        console.log("clicked", item.name);
        dispatch(addItem({ info: item }))
    }
    const props = { onClick: onClickListner }
    const filter = null;
    //const filterData=filterFunction(listData);

    return (

        <div className="bg-white w-full h-full">
            <Header />


            <div className="flex">
                <div className="border-2 flex-3 mt-1 ml-1 rounded-sm ">
                    <div>{console.log("mater", filterData)}
                        {listData.map((item) => (

                            <ListView details={item} propItem={onClickListner} />
                        )
                        )}
                    </div>
                </div>
                <div className="flex-1">Detailedview</div>
            </div>
        </div>
    )
}
export default Dashboard;