import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Residentials from "../Residentials/Residentials";
import Countries from "../Countries/Countries";

const Home = () => {
    return (
        <div>
            {/* <h2>This is home</h2> */}
            <Helmet>
                <title>Tourizzo | Home</title>
            </Helmet>
            <Banner></Banner>
            <Residentials></Residentials>
            <Countries></Countries>
        </div>
    );
};

export default Home;