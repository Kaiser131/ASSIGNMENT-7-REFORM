import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantCook from "../WantCook/WantCook";
import CurrentCook from "../CurrentCook/CurrentCook";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    // handle cooking Data
    const [cooks, setCooks] = useState([]);
    const handleCook = cook => {
        const ifExists = cooks.find(got => got.recipe_id == cook.recipe_id);
        if (!ifExists) {
            setCooks([...cooks, cook]);
        }
        else {
            alert('You set it already !');
        }
    };

    const [prepare, setPrepare] = useState([]);
    // add to currently cook
    const handleCurrentCook = () => {
        setPrepare(cooks);
        setCooks([]);
    };

    return (
        <div>

            <div>
                <h1 className="text-4xl font-bold mt-5">Our Recipes</h1>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ducimus quis minima ut impedit consequatur illo doloribus inventore harum neque velit ea explicabo voluptate id omnis distinctio, nihil est! Doloremque!</p>
            </div>

            <div className="grid grid-cols-4 gap-10 ">

                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] col-span-2 gap-8 ">
                    {
                        recipes.map(got => <Recipe key={got.recipe_id} cookFunc={handleCook} given={got}></Recipe>)
                    }
                </div>

                <div className="col-span-2 border ">
                    <WantCook giveFromRecipe={cooks} handleCurrentCook={handleCurrentCook} ></WantCook>
                    <CurrentCook prepare={prepare}></CurrentCook>
                </div>

            </div>

        </div>
    );
};

export default Recipes;