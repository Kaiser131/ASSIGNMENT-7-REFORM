import bannerImg from "../../../public/images/Rectangle 1.png";

const Banner = () => {

    return (
        <div style={{ backgroundImage: `url("${bannerImg}")`, }} className=" text-white py-40 px-32 space-y-6 bg-cover rounded-3xl bg-center" >
            <h1 className="font-bold text-6xl">Discover an exceptional cooking class tailored for you!</h1>
            <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div>
                <button className="px-7 mt-5 bg-[#0BE58A] py-3 text-black font-bold rounded-full mr-5">Explore Now</button>
                <button className="btn btn-outline text-white">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;