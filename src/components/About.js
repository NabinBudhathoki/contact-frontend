import React, { useEffect, useState } from "react";
import profilepic from "../images/photo.jpg"
import {useHistory} from "react-router-dom";
import aboutpic from "../images/aboutpic.jfif"

const About = () => {

  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);



      if (!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      history.push('/login');

    }

  }

  useEffect (() => {
    callAboutPage();

  }, []);



  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img src={userData.name === "Nabin BUdhathoki" ? profilepic : aboutpic } alt="profile" width={200} height={200}/>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{ userData.name}</h5>
                <h6>{ userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">RANKING:<span>1/10</span></p>

                {/* <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                </li>
                
               </ul> */}


              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>

            </div>

          </div>

          <div className="row">
            <div className="col-md-12 pl-5 about-info">
              <div className="tab-content profile-tab" id="mtTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  
                <div className="row">
                  <div className="col-md-2">
                    <label>User ID</label>
                  </div>
                  <div className="col-md-2">
                    <p>{ userData._id}</p>
                  </div>
                  </div>

                  <div className="row mt-3">
                  <div className="col-md-2">
                    <label>Name</label>
                  </div>
                  <div className="col-md-4">
                    <p>{ userData.name}</p>
                  </div>
                  </div>

                  <div className="row mt-3">
                  <div className="col-md-2">
                    <label>Email</label>
                  </div>
                  <div className="col-md-4">
                    <p>{ userData.email}</p>
                  </div>
                  </div>

                  <div className="row mt-3">
                  <div className="col-md-2">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-4">
                    <p>{ userData.phone}</p>
                  </div>
                  </div>

                  <div className="row mt-3">
                  <div className="col-md-2">
                    <label>Professional</label>
                  </div>
                  <div className="col-md-4">
                    <p>{ userData.work}</p>
                  </div>
                  </div>

                </div>

              </div>

            </div>


          </div>

        </form>

      </div>
    </>
  );
};

export default About;
