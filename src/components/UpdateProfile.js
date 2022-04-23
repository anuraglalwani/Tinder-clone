import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, useParams } from "react-router";
import axios from "./axios.js";
import "./UpdateProfile.css";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");
  const history = useHistory();
  const { id } = useParams();

  function HandleSubmit(e) {
    e.preventDefault();
    const detailsDb = {
      name: name,
      age: age,
      language: language,
    };
    axios.put("/profile/" + id, detailsDb);
    history.go(-1);
  }

  return (
    <div className="updateProfile">
      <div className="header">
        <Link to="/profile">
          <IconButton>
            <ArrowBackIosIcon fontSize="large" className="header_icon" />
          </IconButton>
        </Link>
        <h1>Update Profile</h1>
      </div>

      <div className="formBody">
        <form onSubmit={HandleSubmit} className="form">
          <div className="block">
            <label className="name">Name</label>
            <input
              placeholder="ex: Rob Willson"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
          </div>

          <div className="block">
            <label className="age">Age</label>
            <input
              placeholder="ex:24"
              value={age}
              type="number"
              onChange={(e) => setAge(e.target.value)}
            ></input>
            <br />
          </div>

          <div className="block">
            <label className="language">Language</label>
            <input
              placeholder="ex: English"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            ></input>
            <br />
          </div>

          <div className="custombutton">
            <button type="button" onClick={HandleSubmit} class="btn btn-light">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
