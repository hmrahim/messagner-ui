import React from "react";

const MessageCard = ({data}) => {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex gap-3">
        <img src={data.image} width="60px" height="60px" alt="profile pic" />
        <div>
          <h2 className="font-semibold text-2xl capitalize">{data.name}</h2>
          <p>{data.msg}</p>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <h4 className="text-[10px] text-right">10:33 pm</h4>
        <h4 className="text-[10px] text-right font-bold">5</h4>
      </div>
    </div>
  );
};

export default MessageCard;
