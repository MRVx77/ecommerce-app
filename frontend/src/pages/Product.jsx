import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProdcutData] = useState(false);
  const [image, setImage] = useState("");
  const review = Math.floor(Math.random() * 100) + 1;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleImageSwipe = () => {
    if (!touchStart || !touchEnd || !productData) return;

    const distance = touchStart - touchEnd;
    const imagesLength = productData.images.length;

    // Swipe LEFT → Next image
    if (distance > minSwipeDistance && currentImageIndex < imagesLength - 1) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
      setImage(productData.images[nextIndex]);
    }

    // Swipe RIGHT → Previous image
    if (distance < -minSwipeDistance && currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setImage(productData.images[prevIndex]);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProdcutData(item);
        setCurrentImageIndex(0);
        setImage(item.images[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*-------------- product Data ---------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*-------------- product images --------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((item, index) => (
              <img
                onClick={() => {
                  setImage(item);
                  setCurrentImageIndex(index);
                }}
                src={item}
                key={index}
                className={`w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer border ${
                  index === currentImageIndex
                    ? "border-black"
                    : "border-transparent"
                }`}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt=""
              className="w-full h-auto touch-pan-y select-none"
              onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
              onTouchEnd={handleImageSwipe}
            />
          </div>
        </div>
        {/*----------- proudct information ------------ */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">{"(" + review + ")"}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <button
            onClick={() => addToCart(productData._id)}
            className="bg-black text-white mt-3 px-8 py-3 text-sm active:bg-gray-700 cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on deilivery is avaliable on this product.</p>
            <p>Easly deliverd in 7 days and return policy.</p>
          </div>
        </div>
      </div>
      {/*----------------- discription and review section -------- */}
      <div className="mt-20">
        <div className="flex">
          <p className="border-t border-l border-r px-5 py-3 text-sm">
            Description
          </p>
          {/* <p className="border px-5 py-3 text-sm">Reviews (122)</p> */}
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Experience effortless elegance with this pure cotton saree,
            handwoven for superior comfort and all-day ease. Lightweight,
            breathable, and perfect for long working hours — the ideal choice
            for teachers and modern professionals. Designed in a soft pastel
            shade with a classic border that adds a touch of timeless charm.
          </p>
          <p>{productData.description}</p>
        </div>
      </div>
      {/* ----------- display related products ---------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
