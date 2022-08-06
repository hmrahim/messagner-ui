import React from "react";
import { user } from "../utility/user";

const NewConnections = () => {
  return (
    <div className="w-full">
      <h3 className=" font-bold mt-5 ml-5">
        New Connectins{" "}
        <span className=" bg-orange-500 rounded-full px-2 py-0 text-white">
          2
        </span>{" "}
      </h3>
      <div className="flex overflow-x-auto gap-5 justify-center items-center mx-5">
        {user.map((data, index) => (
          <div className="flex flex-col  items-center mt-5">
            <img src={data.image} className="h-10 w-16" alt="User Photo" />
            <h4 className="text-gray-400">{data.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewConnections;
