import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

export default function EmailRow({ id, Title, Subject, Description, Time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        Title,
        Subject,
        Description,
        Time,
      })
    );
    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />

        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow_title">{Title}</h3>

      <div className="emailRow_message">
        <h4>
          {Subject} <span className="emailRow_description">-{Description}</span>
        </h4>
      </div>

      <div className="emailRow_time">{Time}</div>
    </div>
  );
}
