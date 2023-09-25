import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh]">
            <h1 className="text-4xl font-semibold">No Found Data</h1>
            <Link to='/'><button>Go Back Home</button></Link>
        </div>
    );
};

export default Errorpage;