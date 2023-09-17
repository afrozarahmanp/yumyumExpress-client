

const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item
    const handleAddToCart = item => {
        console.log(item)
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 py-1">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4  border-orange-500 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;