
const WantCook = ({ giveFromRecipe, handleCurrentCook }) => {

    return (
        <div className="p-7">

            <h1 className="text-2xl font-bold my-5">Want To Cook :{giveFromRecipe.length}</h1>


            <hr />

            <table className="w-full border my-5">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>

                <tbody className="bg-[#150b2b0d] ">
                    {
                        giveFromRecipe.map((got, idx) => <tr key={idx}>
                            <td>{got.recipe_name}</td>
                            <td>{got.preparing_time}</td>
                            <td>{got.calories}</td>
                        </tr>)
                    }
                </tbody>

            </table>

            <button onClick={handleCurrentCook} className="px-7 mt-5 bg-[#0BE58A] py-2 font-bold rounded-full">Prepare</button>

        </div>
    );
};

export default WantCook;