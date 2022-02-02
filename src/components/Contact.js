import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/contact", {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      const res = await fetch(`/contact/${id}`, {
        method: "DELETE",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include"
      });
      fetchContacts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {contacts.map((contact) => {
        return (
          <div className="row justify-content-around border p-2 m-1">
            <div className="col-sm-8">
              <div className="row justify-content-around">
                <div className="col-sm-6">
                  <h5>Name: {contact?.name}</h5>
                </div>
                <div className="col-sm-6 text-right">
                  <p className="lead">{contact?.address}</p>
                </div>
                <div className="col-sm-6"></div>
              </div>
              <div className="row justify-content-around">
                <div className="col-sm-6">
                  <Link to="">
                    <img
                      className="img border-1 w-200"
                      width="100px"
                      // src={"uploads/" + props.contact.photograph}
                      alt="image loading.."
                    ></img>
                  </Link>
                </div>
                <div className="col-sm-6 text-right">
                  <p className="lead">{contact?.email}</p>
                </div>
              </div>
              <div className="row justify-content-around">
                <div className="col-sm-12 text-right">
                  <p className="lead">{contact?.phone}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <Link
                to={{
                  pathname: `/contact/${contact._id}`,
                }}
              >
                <button className="btn btn-primary">update</button>
              </Link>
            </div>
            <div className="col-sm-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteContact(contact._id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Contact = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();

    const res = fetch;
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 pl-5 about-info">
          <div className="tab-content profile-tab" id="mtTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div>
                  <label>
                    <h5>Welcome in :</h5>
                  </label>
                </div>
                <div>
                  <p> {userData.name} contact list</p>
                </div>
                <div className="col-sm-2">
                  <Link
                    to={{
                      pathname: `/contact/new`,
                    }}
                  >
                    <button className="btn btn-primary">New Contact</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactList />
    </div>
  );
};

export default Contact;
