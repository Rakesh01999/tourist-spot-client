import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Residentials from "../Residentials/Residentials";

const Home = () => {
    return (
        <div>
            {/* <h2>This is home</h2> */}
            <Helmet>
                <title>EstateEase | Home</title>
            </Helmet>
            <Banner></Banner>
            <Residentials></Residentials>
        </div>
    );
};

export default Home;