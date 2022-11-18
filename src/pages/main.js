import React, { useState } from "react";
import Input from "@mui/material/Input";
import { TextField, Autocomplete } from "@mui/material";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import MUIRichTextEditor from "mui-rte";
// import InvertColorsIcon from "@mui/icons-material/InvertColors";
import MultiSelect from "../components/MultiSelect";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

// import logo from "../assets/note.png";

const Main = () => {
  const [newDate, setNewDate] = useState(new Date());
  // const [value, setValue] = useState("");
  const [dateValue, setDateValue] = useState(dayjs("2014-08-18T21:11:54"));
  const [flag, setFlag] = useState(false);

  const topics = [
    {
      name: "First",
      content:
        "The Gnosis mission has always been centered on building decentralized infrastructure for the Ethereum ecosystem. When Gnosis was founded in 2015, it focused on building p...",
      comFlag: true,
    },
    {
      name: "Second",
      content:
        "The Gnosis mission has always been centered on building decentralized infrastructure for the Ethereum ecosystem. When Gnosis was founded in 2015, it focused on building p...",
      comFlag: true,
    },
    {
      name: "Third",
      content:
        "The Gnosis mission has always been centered on building ecosystem. When Gnosis was founded in 2015, it focused on building p...",
      comFlag: true,
    },
  ];
  const takers = ["minute taker one", "minute taker two"];
  // const handleChange = e => {
  //   console.log(e.getCurrentContent().getPlainText());
  // }

  // const handleSave = (e) => {
  //   console.log(e);
  //   setValue("");
  // };

  const handleChangeDate = (newValue) => {
    setDateValue(newValue);
    setNewDate(newValue);
  };

  const handleFlag = (e) => {
    setFlag(!flag);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-[1024px] w-[100%] rounded border-2 h-[900px] p-[20px]">
        <span className="text-[15px] poppin-font">
          {JSON.stringify(newDate.getFullYear())}/
          {JSON.stringify(newDate.getMonth())}/
          {JSON.stringify(newDate.getDate())}
        </span>
        <div className="text-center">
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
          <p>Topics</p>
        </div>
        {topics.map((topic, index) => (
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
        ))}
        <div></div>
        <div className="flex flex-col md:flex-row mt-[30px] items-center">
          <div className="flex gap-2">
            <Input placeholder="Topic name" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Due date"
                inputFormat="MM/DD/YYYY"
                value={dateValue}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <MultiSelect />
        </div>
        <div className="w-[100%]">
          {/* <MUIRichTextEditor
            label="Start typing..."
            value={value}
            onSave={handleSave}
            customControls={[
              {
                name: "my-style",
                icon: <InvertColorsIcon />,
                type: "inline",
                inlineStyle: {
                  backgroundColor: "black",
                  color: "white",
                },
              },
            ]}
          /> */}
          <Button
            variant="contained"
            size="medium"
            sx={{ marginTop: "50px", float: "right" }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
