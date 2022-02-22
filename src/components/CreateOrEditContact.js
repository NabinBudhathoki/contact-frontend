import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import ContactForm from "./ContactForm";
import {baseUrl} from "../utils/constants"


const CreateOrEditContact = (props) => {
  const [contact, setContact] = useState(null);
  const history = useHistory();

  const fetchContact = async () => {
    const { _id } = props.match.params;
    const response = await fetch(`${baseUrl}/contact/${_id}`);
    const data = await response.json();
    setContact(data);
  };

  useEffect(() => {
    if (props.match.params?._id != "new") {
      fetchContact();
    }
  }, []);

  const onSubmit = async (contact) => {
    if (props.match.params?._id === "new") {
      await fetch(baseUrl + "/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      history.push("/contact");

    } else {
      const response = await fetch(`${baseUrl}/contact/${contact._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      setContact(data);
      history.push("/contact");
    }
  };

  return (
    <div>
      <h3>{contact != null ? "Edit Contact" : "Create Contact"}</h3>
      <ContactForm contact={contact} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateOrEditContact;
