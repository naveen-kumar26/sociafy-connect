import React from "react";
import './style1.css';
import { Link } from 'react-router-dom';

import profile_pic2 from '../Assets/profile_pic2.png';
import post1 from '../Assets/trichy_srirangam.jpg';
import post2 from '../Assets/post_pic1.jpg';
import frnd1 from '../Assets/form-v8.jpg';
import frnd2 from '../Assets/profile_pic.jpg';
import frnd3 from '../Assets/blank_pic.jpg';
import frnd4 from '../Assets/profile_pic5.jpg';
import frnd5 from  '../Assets/profile_pic3.jpg';
import frnd6 from  '../Assets/profile_pic4.jpg';

const Username = () => {
    return(
        
     <>
  {/* Hello world */}
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
            src={profile_pic2}
            width="135px"
            height="135px"
            id="pro_img"
            alt=""
          />
          <br />
          <div className="container" id="user_id">
            <h3 style={{ color: "#1e1edb" }}>its_venkat._45</h3>
            <h4 style={{ color: "#717174" }}>Venkatraman</h4>
          </div>
          <hr />
          <div className="container">
            <p align="left">
              College Student
              <br />
              Lives at Trichy
              <br />
              Melophile
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
                src={profile_pic2}
                width="35px"
                height="35px"
                id="frnd_img"
              />{" "}
              <b>its_venkat._45</b>
            </div>
            <div className="time">
              <p style={{ fontSize: "smaller" }}>
                <i>2 hours ago</i>
              </p>
            </div>
            <div className="caption">
              <p>
                Srirangam sri Ranganathaswamy Temple always stands
                <br /> as a place of peace and spirituality !
              </p>
            </div>
            <div className="content">
              <img
                src={post1}
                height="400px"
                width="100%"
              />
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
                src={profile_pic2}
                width="35px"
                height="35px"
                id="frnd_img"
              />{" "}
              <b>its_venkat._45</b>
            </div>
            <div className="time">
              <p style={{ fontSize: "smaller" }}>
                <i>3 weeks ago</i>
              </p>
            </div>
            <div className="caption">
              <p>
                Like to share this scenery picture!
                <br /> Looks wonderful
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
          <Link to="/userpage2">
            <div className="frnd" align="left">
              <ul>
                <li>
                  <img
                    src={frnd1}
                    width="40px"
                    height="40px"
                    id="frnd_img"
                  />{" "}
                  Rajesh kumar
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
                  Sivashankar S.K
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
                  Gayathiri Maalini
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
                  kayalvizhi
                </li>
              </ul>
            </div>
          </a>
          <a href="#">
            <div className="frnd" align="left">
              <ul>
                <li>
                  <img
                    src={frnd6}
                    width="40px"
                    height="40px"
                    id="frnd_img"
                  />{" "}
                  Kavin
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

export default Username;