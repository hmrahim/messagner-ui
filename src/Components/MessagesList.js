import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MessageCard from "./MessageCard";
import { user } from "../utility/user";

const MessagesList = () => {
  const [inputValue,setInputValue] = useState("")
  const [searchedUser,setSearchedUser] = useState([])
  const result = user.filter(data=> inputValue.toLocaleLowerCase() === data.name)
  
  console.log(result)
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between px-5 items-center ">
        <h3 className="font-bold">
          Messages{" "}
          <span className=" bg-orange-500 rounded-full px-2 py-0 text-white">
            5
          </span>
        </h3>
        <div>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
          onChange={(e)=> setInputValue(e.target.value)}
            className="w-28 outline-none p-2 "
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <div className=" px-5 h-full overflow-y-auto my-5 flex flex-col gap-5">
        {
          result.length !== 0 ? result.map((data, index) => (
            <MessageCard key={index} data={data} />
          )) :
        user.map((data, index) => (
          <MessageCard key={index} data={data} />
        ))
        
        }
      </div>
    </div>
  );
};

export default MessagesList;
