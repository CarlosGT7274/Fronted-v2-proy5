const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="flex flex-col bg-white w-72 h-80 rounded-md py-4 px-6 border mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-center font-bold text-xl text-gray-800 pb-2">
        ${price}
      </h3>
      <h3 className="text-base font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500 pb-3">{description}</p>

      <div className="flex justify-around items-center py-3">
        <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 px-4 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

