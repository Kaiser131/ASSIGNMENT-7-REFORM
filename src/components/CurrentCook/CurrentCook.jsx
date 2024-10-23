
const CurrentCook = ({ prepare }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Preparing...</h1>

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
                        prepare.map((got, idx) => <tr key={idx}>
                            <td>{got.recipe_name}</td>
                            <td>{got.preparing_time}</td>
                            <td>{got.calories}</td>
                        </tr>)
                    }
                </tbody>

            </table>


        </div>
    );
};

export default CurrentCook;