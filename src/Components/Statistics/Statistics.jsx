import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../Utility/localstorage";
import { PieChart, Pie, Cell, } from 'recharts';

const Statistics = () => {
    const statiticsData = useLoaderData()
    const [donationLength,setdonationLength] = useState([]);
    useEffect(()=>{
      const donationIds = getStoredDonationItem();
       if(donationIds.length >0) {
        const donation = statiticsData.filter ( donationItem => donationIds.includes(donationItem.id))
        setdonationLength(donation)
       }
    },[statiticsData])
    
  const sumLocalStorageItems = () => {
    const donation = donationLength.length;
    return donation;
  };

    
    const totalItemsSum = statiticsData.length;
    const totalLocalStorageSum = sumLocalStorageItems();
    
    const localstoragePercentage = (totalLocalStorageSum / totalItemsSum) * 1000;

    const mychart = 1000 - localstoragePercentage;

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(1)}%`}
        </text>
      );
    };
   
    return (
        <div className="flex flex-col items-center justify-center mt-20">
       
        <PieChart width={400} height={400}>
          <Pie
             data={[
              { name: 'Total Donation', value: mychart, },
              { name: 'Distribute Donation', value: localstoragePercentage, },
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
            <div className="flex flex-row gap-5">
                
                <p className="text-xl font-medium ">Your Donation </p>
                <div className="w-[100px] bg-[#00C49F] "></div>
                <p className="text-xl font-medium ">Total Donation</p>
                <div className="w-[100px] bg-[#FF444A]"></div>

            </div>
        </div>
      </div>
    );
    
};

export default Statistics;