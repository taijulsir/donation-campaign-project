import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import DonationCard from "./DonationCard.jsx/DonationCard";
import { useState } from "react";



const Home = () => {
    const donations = useLoaderData();
    const [searchItem,setSearchItem] = useState('');
    const filterCardData = donations?.filter((item) => {
        if(item && item.category){
            return item.category.toLowerCase().includes(searchItem.toLowerCase());
        }
        
    })
    return (
        <div>
           <Banner donations = {donations} searchItem={searchItem} setSearchItem={setSearchItem}></Banner> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-5">
                {
                    filterCardData.map(donation => <DonationCard key={donation.id} donation = {donation} ></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;