import React from "react";

const Card = (props) => {
  return (
    <div className="flex border-[1px] p-[5px] pt-[10px] card mt-[3px] hover:cursor-pointer hover:bg-blue-900 hover:text-[white]">
      <div>
        <span className="ml-[10px] font-serif text-[20px]">{props.no}</span>
      </div>
      <div className="w-[100%] px-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="flex-none ml-[10px] font-serif text-[20px]">
            {props.title}
          </span>
          <div className="flex gap-4 items-center">
            <span>{props.assignee}</span>
            <div className="border-2 p-[3px] rounded-3xl border-lime-300">
              <span>{props.duedate}</span>
            </div>
            <div className="border-2 p-[3px] rounded-3xl border-indigo-400">
              <span>{props.status}</span>
            </div>
          </div>
        </div>
        <div className="p-[15px] poppin-font text-[15px] rounded mt-[10px]">
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Card;
