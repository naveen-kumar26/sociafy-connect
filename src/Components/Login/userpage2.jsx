import React from "react";
import './style1.css';
import { Link } from 'react-router-dom';

import profile_pic from '../Assets/form-v8.jpg';
import post1 from '../Assets/post_pic3.jpg';
import post2 from '../Assets/debugg.jpg';
import frnd1 from '../Assets/profile_pic2.png';
import frnd2 from '../Assets/profile_pic.jpg';
import frnd3 from '../Assets/blank_pic.jpg';
import frnd4 from '../Assets/profile_pic5.jpg';
import frnd5 from '../Assets/profile_pic3.jpg';

const Username2 = () => {
    return(
        <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <b>
        <a className="navbar-brand" href="#" style={{ color: "#1e1edb" }}>
          Social Media
        </a>
      </b>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  <div className="container text-center" id="post_tab">
    <div className="row">
      <div className="col" id="nav">
        <a href="#" />
        <i className="bi bi-pencil-square" /> Add Post
      </div>
      <div className="col" id="nav">
        <i className="bi bi-eye-fill" />
        View Post
      </div>
      <div className="col" id="nav">
        <i className="bi bi-gear" />
        Settings
      </div>
    </div>
  </div>
  {/*Personal Information*/}
  <div className="container px-4 text-center">
    <div className="row gx-5">
      <div className="col">
        <div className="p-3" id="c1">
          <img
            src={profile_pic}
            width="135px"
            height="135px"
            id="pro_img"
            alt=""
          />
          <br />
          <div className="container" id="user_id">
            <h3 style={{ color: "#1e1edb" }}>_.rajesh_101</h3>
            <h4 style={{ color: "#717174" }}>Rajesh kumar</h4>
          </div>
          <hr />
          <div className="container">
            <p align="left">
              Software Engineer
              <br />
              Lives at Trichy
              <br />
              Techical Person
            </p>
          </div>
        </div>
      </div>
      {/*Post uploading section*/}
      <div className="col">
        <div className="p-3" id="c2">
          <div className="post">
            <br />
            <div className="head">
              <img
                src={profile_pic}
                width="35px"
                height="35px"
                id="frnd_img"
              />{" "}
              <b>_.rajesh_101</b>
            </div>
            <div className="time">
              <p style={{ fontSize: "smaller" }}>
                <i>5 mins ago</i>
              </p>
            </div>
            <div className="caption">
              <p>
                Web Development comprises of HTML,CSS and JavaScript
                <br />
                It is my favorite feild of study
              </p>
            </div>
            <div className="content">
              <img src={post1} height="400px" width="100%" />
            </div>
            <br />
            <div className="rewards">
              <i className="bi bi-heart" />{" "}
              Like&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="bi bi-chat-left-text" />{" "}
              Comment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="bi bi-bookmark" /> Save
            </div>
            <br />
          </div>
          <br />
          <br />
          <div className="post">
            <br />
            <div className="head">
              <img
                src={profile_pic}
                width="35px"
                height="35px"
                id="frnd_img"
              />{" "}
              <b>_.rajesh_101</b>
            </div>
            <div className="time">
              <p style={{ fontSize: "smaller" }}>
                <i>a month ago</i>
              </p>
            </div>
            <div className="caption">
              <p>
                Code debugging is an interesting subject in coding
                <br />
                Bugs has to be identified and correcteds
              </p>
            </div>
            <div className="content">
              <img src={post2} height="400px" width="100%" />
            </div>
            <br />
            <div className="rewards">
              <i className="bi bi-heart" />{" "}
              Like&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="bi bi-chat-left-text" />{" "}
              Comment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="bi bi-bookmark" /> Save
            </div>
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
      {/*Friends List displaying*/}
      <div className="col">
        <div className="p-3" id="c3">
          <div>
            <h4>Friends Connected</h4>
          </div>
          <Link to="/userpage">
            <div className="frnd" align="left">
              <ul>
                <li>
                  <img
                    src={frnd1}
                    width="40px"
                    height="40px"
                    id="frnd_img"
                  />{" "}
                  Venkatraman
                </li>
              </ul>
            </div>
          </Link>
          <a href="#">
            <div className="frnd" align="left">
              <ul>
                <li>
                  <img
                    src={frnd2}
                    width="40px"
                    height="40px"
                    id="frnd_img"
                  />{" "}
                  Karthika{" "}
                </li>
              </ul>
            </div>
          </a>
          <a href="#">
            <div className="frnd" align="left">
              <ul>
                <li>
                  <img
                    src={frnd3}
                    width="40px"
                    height="40px"
                    id="frnd_img"
                  />{" "}
                  Adhithya
                </li>
              </ul>
            </div>
          </a>
          <a href="#">
            <div className="frnd" align="left">
              <ul>
                <li>
                  <img
                    src={frnd4}
                    width="40px"
                    height="40px"
                    id="frnd_img"
                  />{" "}
                  Naveen Kumar
                </li>
              </ul>
            </div>
          </a>
          <a href="#">
            <div className="frnd" align="left">
              <ul>
                <li>
                  <img
                    src={frnd5}
                    width="40px"
                    height="40px"
                    id="frnd_img"
                  />{" "}
                  Binu Joel
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</>

        )

    
}

export default Username2;