import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../Utility/localstorage";

const DonationItem = () => {
    const donations = useLoaderData();
    const [allDonationItem,setAllDonationItem] = useState([])
    const [donationLength,setDonationLength] = useState(4)
    useEffect(()=>{
        const donatinIds = getStoredDonationItem();
        if(donatinIds.length>0){
            const donation = donations.filter(donationItem => donatinIds.includes(donationItem.id))
            setAllDonationItem(donation)
        }
    },[donations])
    return (
        <div className="container mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {
            allDonationItem.slice(0,donationLength).map(donation => <div className="border flex gap-3 rounded-lg" style={{backgroundColor: `${donation.category_bg_color}40`}} key={donation.id}>
               <div>
               <img className="w-[250px] h-[230px]" src={donation.picture} alt="" />
               </div>

                <div className=" space-y-4 pt-4 pb-4">
                    <button className="btn" style={{backgroundColor: `${donation.category_bg_color}40`, color: donation.category_bg_color}}>{donation.category}</button>
                    <h2 className="font-semibold text-2xl">{donation.title}</h2>
                    <p style={{color: donation.category_bg_color}} className="text-xl pb-3">${donation.price}.00</p>
                    <Link to= {`/donations/${donation.id}`}><button className="btn text-white " style={{backgroundColor: `${donation.category_bg_color}`}}>View Details</button></Link>
                </div>
            </div>)
        }
        </div>

        <div className={donationLength === donations.length  && 'hidden'}>
           <div className="text-center mt-10">
           <button onClick={() => setDonationLength(donations.length)} className="btn btn-primary" > See All</button>
           </div>
        </div>
    </div>
    );
};

export default DonationItem;