import { useEffect, useState } from "react";
import Residential from "../Residential/Residential";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { Fade} from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Residentials = () => {
    // const [residentials, setResidentials] = useState([]);
    // useEffect(() => {
    //     fetch('residentials.json')
    //         .then(res => res.json())
    //         .then(data => setResidentials(data));
    // }, [])

    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/spot')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, [])

    // const spots = useLoaderData();
    console.log(spots);

    return (
        <div>
            <div>
                <Fade>
                    <div className="text-center mt-3">
                        <h2 className="text-xl md:text-[40px] text-lime-500 font-bold">Tourists Spots:{spots.length} </h2>
                    </div>

                </Fade>

                {/* <div className='w-[500px]  md:w-[1540px] mx-auto md:mx-auto flex flex-col md:flex-row '> */}
                <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {
                            // residentials.map(residential => <Residential key={residential.id} residential={residential}></Residential>)
                            spots.map(spot => <Residential key={spot._id} spot={spot}></Residential>)
                        }
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Residentials;
