import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParms, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const success = searchParms.get("success");
  const orderId = searchParms.get("orderId");

  const verifyPayment = async () => {
    setIsLoading(true);
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);
  return isLoading ? (
    <div className="flex justify-center items-center w-full py-20 text-gray-500">
      Verifying payment...
    </div>
  ) : (
    <div></div>
  );
};

export default Verify;
