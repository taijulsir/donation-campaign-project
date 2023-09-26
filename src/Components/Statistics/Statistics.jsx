import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../Utility/localstorage";
import { PieChart, Pie, Cell, } from 'recharts';

const Statistics = () => {
    const statiticsData = useLoaderData()
    const [donationPrice,setDonationPrice] = useState([]);
    useEffect(()=>{
      const donationIds = getStoredDonationItem();
       if(donationIds.length >0) {
        const donation = statiticsData.filter ( donationItem => donationIds.includes(donationItem.id))
        setDonationPrice(donation)
       }
    },[statiticsData])
    
  const sumLocalStorageItems = () => {
    const sum = donationPrice.reduce((total, item) => total + item.price, 0);
    return sum;
  };
  
    const totalItemsSum = statiticsData.reduce((total, statistics) => total + statistics.price, 0);
    const totalLocalStorageSum = sumLocalStorageItems();

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
   
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
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            
            <Cell fill="#FF444A" />
            <Cell fill="#00C49F" />
          </Pie>
        </PieChart>
        

        <div>
            <div className="flex flex-row gap-10">
                <p className="text-xl font-medium bg-[#00C49F] ">Your Donation: <span className=" text-white">{totalLocalStorageSum}</span> $</p>
                <p className="text-xl font-medium bg-[#FF444A]">Total Donation: <span className=" text-white">{totalItemsSum}</span> $ </p>
            </div>
        </div>
      </div>
    );
    
};

export default Statistics;