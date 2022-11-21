import React from "react";
// import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ShortCard = (props) => {
  return (
    <div className="flex border-[1px] p-[5px] pt-[10px] card mt-[3px] hover:cursor-pointer hover:bg-blue-900 hover:text-[white]">
      <div>
        <span className="ml-[10px] font-serif text-[20px]">{props.no}</span>
      </div>
      <div className="w-[95%] px-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="flex-none ml-[10px] font-serif text-[20px]">
            {props.title}
          </span>
          <div className="flex gap-4 items-center">
            <span>{props.assignee}</span>
            <div className="py-[3px] px-[10px] rounded-3xl shadow-md">
              <span>{props.duedate}</span>
            </div>
            <div className="py-[3px] px-[10px] rounded-3xl shadow-md">
              <span>{props.status}</span>
            </div>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon sx={{ color: "#dd4148" }} />
            </IconButton>
          </div>
        </div>
        <div className="p-[15px] poppin-font text-[15px] rounded text-ellipsis overflow-hidden whitespace-nowrap">
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default ShortCard;
