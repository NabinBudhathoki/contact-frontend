import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import signpic from "../images/signup.jpg";

const ContactForm = ({ onSubmit, contact }) => {
  const history = useHistory();
  const [user, setUser] = useState(contact);

  useEffect(() => {
    setUser({ ...contact });
  }, [contact]);

  const handleInputs = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">contact</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user?.name}
                    onChange={handleInputs}
                    placeholder="Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user?.email}
                    onChange={handleInputs}
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user?.phone}
                    onChange={handleInputs}
                    placeholder="Phone Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="off"
                    value={user?.address}
                    onChange={handleInputs}
                    placeholder="Address"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value={contact ? "Update" : "Add"}
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
