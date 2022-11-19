import React, { useState } from "react";
import Input from "@mui/material/Input";
import { TextField, Autocomplete } from "@mui/material";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import ShortCard from "../components/ShortCard";
import NewTaskModal from "../components/NewTaskModal";

// import logo from "../assets/note.png";

const Main = () => {
  const [newDate] = useState(new Date());
  const [createModal, setCreateModal] = useState(false);
  // const [flag, setFlag] = useState(false);

  const tasks = [
    {
      no: "1.1",
      title: "GENERAL",
      content:
        "The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.",
      assignee: "Alle",
      duedate: "11/2/2022",
      status: "determination",
    },
    {
      no: "1.2",
      title: "MEETINGS",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "GSG",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "1.3",
      title: "PROJECT | SUPERIOR",
      content:
        "The client, GSG, decides to stop the project completely on September 13, 2022. BZ informs the client about the associated effects and, in particular, risks in a decision proposal BZ-EV027 on September 22nd, 2022 and September 27th, 2022.",
      assignee: "Alle",
      duedate: "11/22/2022",
      status: "determination",
    },
    {
      no: "to1.3",
      title: "",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "THA",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "to1.3",
      title: "",
      content:
        "BZ, Mr. Wenzel, once again draws the GSG's attention to the effects of the complete project stop decision of September 13th, 2022 and clearly emphasizes the recommendation of a complete conclusion of the LPH5 and continuation of the essential tender LPH6.",
      assignee: "Alle",
      duedate: "11/18/2022",
      status: "done",
    },
  ];

  const tasksTwo = [
    {
      no: "2.1",
      title: "GENERAL",
      content:
        "The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.",
      assignee: "THA",
      duedate: "11/2/2022",
      status: "determination",
    },
    {
      no: "2.2",
      title: "MEETINGS",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "GSG",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "2.3",
      title: "PROJECT | SUPERIOR",
      content:
        "The client, GSG, decides to stop the project completely on September 13, 2022. BZ informs the client about the associated effects and, in particular, risks in a decision proposal BZ-EV027 on September 22nd, 2022 and September 27th, 2022.",
      assignee: "Alle",
      duedate: "11/22/2022",
      status: "determination",
    },
    {
      no: "to2.3",
      title: "",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "THA",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "to2.3",
      title: "",
      content:
        "BZ, Mr. Wenzel, once again draws the GSG's attention to the effects of the complete project stop decision of September 13th, 2022 and clearly emphasizes the recommendation of a complete conclusion of the LPH5 and continuation of the essential tender LPH6.",
      assignee: "GSG",
      duedate: "11/18/2022",
      status: "done",
    },
  ];

  const takers = ["minute taker one", "minute taker two"];
  // const handleChange = e => {
  //   console.log(e.getCurrentContent().getPlainText());
  // }

  const handleCreateTask = (e) => {
    e.preventDefault();
    setCreateModal(true);
  }

  const handleCreateModalClose = e => {
    e.preventDefault();
    setCreateModal(false);
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-[1024px] w-[100%] p-[20px]">
        <span className="text-[15px] poppin-font">
          {JSON.stringify(newDate.getFullYear())}/
          {JSON.stringify(newDate.getMonth())}/
          {JSON.stringify(newDate.getDate())}
        </span>
        <div className="text-center">
          {/* <span className="text-[40px] font-serif opacity-20">Title</span> */}
          {/* <Input placeholder="" /> */}
          <Input placeholder="Title" />
        </div>
        <div className="flex mt-[20px] items-center gap-3">
          <p className="text-[20px] font-serif w-[150px]">Minute Taker</p>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={takers}
            sx={{ width: 300, fontFamily: "Poppins" }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ fontFamily: "Poppins" }}
                label="pick or create"
              />
            )}
          />
        </div>
        <div className="flex my-[20px] items-center gap-3">
          <p className="text-[20px] font-serif w-[150px]">Attendees</p>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={takers}
            sx={{ width: 300, fontFamily: "Poppins" }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ fontFamily: "Poppins" }}
                label="pick or create"
              />
            )}
          />
        </div>
        {/* <div className="h-[400px] w-[100%] mt-[30px]">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div> */}
        <div className="flex justify-center font-serif text-[30px] mb-[20px]">
          <div className="rounded-lg border-dashed border-2 px-[10px] hover: cursor-pointer transition delay-100 hover:scale-115 hover:bg-blue-900 hover:text-white hover:border-none" onClick={handleCreateTask}>
            <span>Create Task</span>
          </div>
          {
            createModal && <NewTaskModal isOpen = {createModal} onRequestClose={handleCreateModalClose}/>
          }
        </div>
        {/* {topics.map((topic, index) => (
          <div
            className="flex items-center border-[1px] rounded p-[5px] mb-[5px]"
            key={index}
          >
            <span className="flex-none w-[100px] ml-[10px] font-serif text-[20px]">
              {topic.name}
            </span>
            <span className="shrink poppin-font text-ellipsis overflow-hidden whitespace-nowrap px-[5px]">
              {topic.content}
            </span>
            <Checkbox
              checked={flag}
              onChange={handleFlag}
              inputProps={{ "aria-label": "controlled" }}
            />
            <IconButton aria-label="delete" size="large">
              <DeleteIcon />
            </IconButton>
          </div>
        ))} */}
        <div className="mb-[20px]">
          <div className="bg-red-300 p-[6px] rounded">
            <p className="font-bold">GENERAL / ORGANIZATION</p>
          </div>
          {tasks.map((task, index) => (
            <ShortCard
              no={task.no}
              title={task.title}
              content={task.content}
              assignee={task.assignee}
              duedate={task.duedate}
              status={task.status}
              key={index}
            />
          ))}
        </div>
        <div className="mb-[20px]">
          <div className="bg-teal-500 p-[6px] rounded">
            <p className="font-bold">PLANNING</p>
          </div>
          {tasksTwo.map((task, index) => (
            <ShortCard
              no={task.no}
              title={task.title}
              content={task.content}
              assignee={task.assignee}
              duedate={task.duedate}
              status={task.status}
              key={index}
            />
          ))}
        </div>
        <div className="mb-[20px]">
          <div className="bg-blue-500 p-[6px] rounded">
            <p className="font-bold">EXECUTION</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-violet-500 p-[6px] rounded">
            <p className="font-bold">REQUIREMENTS | QUALITIES</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-pink-200 p-[6px] rounded">
            <p className="font-bold">EVENTS</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-yellow-500 p-[6px] rounded">
            <p className="font-bold">COSTS</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-lime-200 p-[6px] rounded">
            <p className="font-bold">CONTRACTS | FORGIVED</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-stone-500 p-[6px] rounded">
            <p className="font-bold">OTHER</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Main;
