import React, {useState} from "react";
import Modal from "react-modal";

import "./new_task_modal.css";

import MUIRichTextEditor from "mui-rte";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import MultiSelect from "../components/MultiSelect";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

const NewTaskModal = ({ isOpen, onRequestClose, name }) => {
  const [value, setValue] = useState("");
  const [dateValue, setDateValue] = useState(dayjs("2014-08-18T21:11:54"));
    const handleSave = (e) => {
      console.log(e);
      setValue("");
    };

    const handleChangeDate = (newValue) => {
      setDateValue(newValue);
    };
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className={{
        base: "modal-base",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={2000}
    >
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
        <MUIRichTextEditor
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
        />
        <Button
          variant="contained"
          size="medium"
          sx={{ marginTop: "50px", float: "right" }}
        >
          Save
        </Button>
      </div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default NewTaskModal;
