import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/user/profile", {
        headers: { token },
      });

      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) fetchProfile();
  }, [token]);

  if (!user) {
    return (
      <div className="flex justify-center items-center w-full py-20 text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-16 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 text-center border">
        <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-4xl font-semibold text-gray-600 mb-4">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-1 wrap-break-word">
          {user.name}
        </h2>

        <p className="text-gray-600 mb-6 wrap-break-word">{user.email}</p>

        <div className="bg-gray-100 rounded-xl p-4 text-left mb-4 wrap-break-word">
          <p className="text-sm text-gray-500">Full Name</p>
          <p className="text-lg font-medium text-gray-800 wrap-break-word">
            {user.name}
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-left wrap-break-word">
          <p className="text-sm text-gray-500">Email Address</p>
          <p className="text-lg font-medium text-gray-800 wrap-break-word">
            {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
