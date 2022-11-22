import React, { useState } from "react";
import Input from "@mui/material/Input";
// import { TextField, Autocomplete } from "@mui/material";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import ShortCard from "../components/ShortCard";
import NewTaskModal from "../components/NewTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { db } from "../firebase";
import { ref } from "firebase/database";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { collection, addDoc } from "firebase/firestore";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// import logo from "../assets/note.png";

const Main = () => {
  const [newDate] = useState(new Date());
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [ModalContent, setModalContent] = useState("");

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

  // const takers = ["minute taker one", "minute taker two"];
  // const handleChange = e => {
  //   console.log(e.getCurrentContent().getPlainText());
  // }

  const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const push = async (e) => {
    e.preventDefault();
    console.log("push btn clicked");
    const docRef = await addDoc(collection(db, "Tasks"), {
    name: "task from firebase react"
    });
    console.log(docRef.id);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    setCreateModal(true);
  };

  const handleEditTask = async (e, task) => {
    e.preventDefault();
    await setModalContent(task.content);
    await setEditModal(true);
  };

  const handleCreateModalClose = (e) => {
    e.preventDefault();
    setOpen(true);
    setCreateModal(false);
  };

  const handleEditModalClose = (e) => {
    e.preventDefault();
    setEditModal(false);
  };

  return (
    <div className="flex justify-center bg-[#e8eaed]">
      <div className="max-w-[1024px] w-[100%] p-[20px] shadow-md bg-[#f1f3f4]">
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
        {/* <div className="flex mt-[20px] items-center gap-3">
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
        </div> */}
        {/* <div className="h-[400px] w-[100%] mt-[30px]">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div> */}
        <div className="flex justify-center font-serif text-[30px] mb-[20px] mt-[30px]">
          <div
            className="rounded-lg border-dashed border-2 px-[10px] hover: cursor-pointer hover:bg-blue-900 hover:text-white hover:border-blue-900"
            onClick={push}
            // onClick={handleCreateTask}
          >
            <span>Create Task</span>
          </div>
          {createModal && (
            <NewTaskModal
              isOpen={createModal}
              onRequestClose={handleCreateModalClose}
            />
          )}

          {editModal && (
            <EditTaskModal
              isOpen={editModal}
              content={ModalContent}
              onRequestClose={handleEditModalClose}
            />
          )}
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              New task created successfully!
            </Alert>
          </Snackbar>
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
            <div key={index} onClick={(e) => handleEditTask(e, task)}>
              <ShortCard
                no={task.no}
                title={task.title}
                content={task.content}
                assignee={task.assignee}
                duedate={task.duedate}
                status={task.status}
              />
            </div>
          ))}
        </div>
        <div className="mb-[20px]">
          <div className="bg-teal-500 p-[6px] rounded">
            <p className="font-bold">PLANNING</p>
          </div>
          {tasksTwo.map((task, index) => (
            <div onClick={handleEditTask} key={index}>
              <ShortCard
                no={task.no}
                title={task.title}
                content={task.content}
                assignee={task.assignee}
                duedate={task.duedate}
                status={task.status}
                key={index}
              />
            </div>
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
