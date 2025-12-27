import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, images, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden border rounded shadow-sm">
        {/* Fixed aspect ratio container */}
        <div className="w-full aspect-4/5 overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 will-change-transform sm:hover:scale-105"
          />
        </div>
        <div className="p-2">
          <p className="pt-2 pb-1 text-sm">{name}</p>
          <p className="text-sm font-medium">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ProductItem);
