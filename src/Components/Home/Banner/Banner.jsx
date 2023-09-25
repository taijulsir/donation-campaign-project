

const Banner = () => {
    return (
        <div>
        <div className="hero h-[600px] -mt-[108px]  "  style={{backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU)'}}>
            <div className="hero-overlay bg-[#FFFFFFF2] "></div>
            <div className="hero-content text-center">
                <div className="">
                <h1 className="mb-5 lg:text-5xl text-2xl font-bold">I Grow By Helping People In Need</h1>
               <div className="flex lg:ml-40">
               <input className=" outline-none lg:w-[400px] h-[50px] shadow-xl rounded-xl border border-[#DEDEDE] px-5" type="text" name="" id="" placeholder="Search here..."/>
                <button className="btn  bg-[#FF444A] text-white">Search</button>
               </div>
                </div>
            </div>
            </div>
       </div>
      
    );
};

export default Banner;