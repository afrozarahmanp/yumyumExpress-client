

const MenuItem = ({item}) => {

const {image, price, recipe, name} = item

    return (
        <div className="flex space-x-4">
            <img className="w-[100px] lg:w-[150px] mask mask-hexagon-2" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}---------</h3>
                <p>{recipe}</p>

            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;