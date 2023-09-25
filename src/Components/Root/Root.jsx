import { Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";

const Root = () => {
    return (
        <div>
            <Layout></Layout>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;