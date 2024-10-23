import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ given, cookFunc }) => {

    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = given;

    return (
        <div className="">

            <div className="border p-7 shadow-xl rounded-2xl text-left space-y-5">
                <img src={recipe_image} alt="" />
                <h1 className="text-xl font-bold">{recipe_name} </h1>
                <p>{short_description} </p>
                <hr />
                <p className="font-bold">Ingredients: {ingredients.length}</p>

                <ul className="pl-5">
                    {
                        ingredients.map((got, idx) => <li key={idx}>{got}</li>)
                    }
                </ul>

                <div className="flex gap-5 font-medium items-center">
                    <CiClock2 className="text-2xl"></CiClock2>
                    <p>{preparing_time} </p>
                    <FaFire className="text-2xl"></FaFire>
                    <p>{calories} </p>
                </div>

                <button onClick={() => cookFunc(given)} className="px-7 bg-[#0BE58A] py-2 font-bold rounded-full">Want To Cook</button>
            </div>


        </div>
    );
};

export default Recipe;