import React, {useState, useContext} from "react";
import { NavLink ,useHistory} from "react-router-dom";
import loginpic from "../images/pic.jpg";

import { UserContext } from "../App";

const Login = () => {

 const {state, dispatch} = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data =  res.json();

    if (res.status === 400 || !data ){
      window.alert("invalid registration");
      
    } else {
      dispatch({type:"USER", payload:true})
      window.alert("Login successfull");
      history.push("/");
    }

  }

  return (
    <>
    
        <section className="sign-in"
        // style={{
        //   backgroundImage: `url(${loginpic})`,
        //   backgroundsize: "cover",
        //   backgroundPosition: "center",

        //   backgroundRepeat: "no-repeat"}}
        >
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signin-form">
              <h2 className="form-title">Login</h2>
              <form method="POST" className="register-form" id="register-form">

               

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"/>
                </div>

                

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"/>
                </div>

                

                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Log In"
                  onClick={loginUser}
                  />
                  

                </div>
                <div>
                <NavLink to="/signup" className="signup-image-link">create an account</NavLink>
                </div>

              </form>
              </div>
             

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
