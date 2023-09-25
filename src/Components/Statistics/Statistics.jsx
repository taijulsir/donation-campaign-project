import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../Utility/localstorage";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Statistics = () => {
    const statiticsData = useLoaderData()
    const [donationPrice,setDonationPrice] = useState([]);
    

  // Sum the prices of the selected items in local storage
  const sumLocalStorageItems = () => {
    const sum = donationPrice.reduce((total, item) => total + item.price, 0);
    return sum;
  };

  const totalItemsSum = statiticsData.reduce((total, statistics) => total + statistics.price, 0);
  const totalLocalStorageSum = sumLocalStorageItems();
  
    
  console.log(totalItemsSum,totalLocalStorageSum)
    useEffect(()=>{
      const  donationIds = getStoredDonationItem();
       if(donationIds.length >0) {
        const donation = statiticsData.filter ( donationItem => donationIds.includes(donationItem.id))
        setDonationPrice(donation)
       }
    },[statiticsData])
    return (
        <div className="flex flex-col items-center justify-center mt-20">
        <PieChart width={400} height={400}>
          <Pie
            data={[
              { name: 'Total Donation', value: totalItemsSum, },
              { name: 'Distribute Donation', value: totalLocalStorageSum, },
            ]}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            <Cell fill="#FF444A" />
            <Cell fill="#00C49F" />
          </Pie>
         <Tooltip></Tooltip>
        </PieChart>

        <div>
            <h3 className="flex flex-row gap-10">
                <span>Your Donation: <span className="bg-[#00C49F] text-white">{totalLocalStorageSum}</span> $</span>
                <span>Total Donation: <span className="bg-[#FF444A] text-white">{totalItemsSum}</span> $ </span>
            </h3>
        </div>
      </div>
    );
};

export default Statistics;