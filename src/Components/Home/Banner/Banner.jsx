/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

const Banner = ({donations,searchItem,setSearchItem}) => {
   

 
 const handleButtonClick = () => {
   const searchValue = document.getElementById('search-input').value;
   setSearchItem(searchValue)
 }
    return (

        <div className="mb-[100px]">

        <div className="hero h-[600px] -mt-[108px]  "  style={{backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU)'}}>

            <div className="hero-overlay bg-[#FFFFFFF2] "></div>
            <div className="hero-content text-center">
                <div className="">
                <h1 className="mb-5 lg:text-5xl text-2xl font-bold">I Grow By Helping People In Need</h1>
               <div className="flex lg:ml-40">
               <input className=" outline-none lg:w-[400px] h-[50px] shadow-xl rounded-xl border border-[#DEDEDE] px-5" id="search-input" placeholder="Search here..."/>
                <button onClick={handleButtonClick} className="btn  bg-[#FF444A] text-white -ml-2">Search</button>
               </div>
                </div>
            </div>
            </div>
       </div>
      
    );
};
Banner.propTypes = {
    donations: PropTypes.array
}

export default Banner;