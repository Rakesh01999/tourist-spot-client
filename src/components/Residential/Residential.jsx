import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPricetags } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import { GrStatusCriticalSmall } from "react-icons/gr";

const Residential = ({ residential }) => {
    const { id, estate_title, image, area, location, price, status } = residential;
    
    return (
        <div className="my-10 mx-auto">
            {/* <div className="max-w-full bg-opacity-10 rounded-3xl shadow-xl flex flex-col items-center mb-10"> */}
            <div className="max-w-full bg-violet-300 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                <figure className="md:px-10 mt-10">
                    <img src={image} alt="house" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{estate_title}</h2>
                    <div className="flex gap-2 items-center text-xl text-green-500 md:text-2xl">
                        <IoPricetags />
                        <p>{price}</p>
                    </div>
                    <div className="border-b-2 my-4"></div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-lg md:text-xl">
                            <FaLocationDot />
                            <p>{location}</p>
                        </div>
                        <div className="flex gap-2 items-center text-lg md:text-xl">
                            <BiSolidArea />
                            <p>{area}</p>
                        </div>
                        <div className="flex items-center gap-2 text-lg md:text-xl">
                            <GrStatusCriticalSmall />
                            <p><span className="font-bold">Status :</span> {status}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/residential/${residential.id}`}>
                    <div className="text-center mb-2">
                        <button className="btn btn-primary md:w-[200px] rounded-full md:text-lg text-white mb-4">
                            View Property
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Residential;
