import React, {useState} from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Register(props) {
  // 1 . State
  const [first_name, setName] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://127.0.0.1:8000/api/auth";
  const [error, setError] = useState("");

  const SignUp = async (e) => {
    e.preventDefault();
    // setLonding(true);
    const data = {
      first_name,
      last_name,
      email,
      password,
    };
    try {
    //   props.registerUser(null);
      // const response = await axios.post(`${baseURL}/register`, data);
       fetch(`${baseURL}/register`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(data)
       })
      //  console.log(response.json())
      .then((res) => res.json())
       .then((response) => {
          if (response.status === true) {
              //   setLonding(false);
              //   localStorage.setItem("auth_token", response.data.token);
              //   localStorage.setItem("auth_email", response.data.user.email);
              //   // props.registerUserSuccess(response.data.user);
                // Swal.fire('Success', 'Register successfully', 'success')
                Swal.fire({
                  icon: "success",
                  title: "Register successfully",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/");  //go to dashboard
                  }
                });
              } else{
                setError(response.errors);
                // console.log(error)
                Swal.fire({
                  icon: "warning",
                  title: error.email[0],
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                })
              }
          })
      } catch (error) {
        setError(reponse.errors.data);
        console.log(error);
    }
  };

  // 2 . Evenement

  // 3 . Affichage
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#103cbe" }}
        >
          <div className="featured-image mb-3">
            <img
              src="src\assets\images\1.png"
              className="img-fluid"
              style={{ width: "250px" }}
            />
          </div>
          <p className="text-white fs-2 style" style={{ fontWeight: "600" }}>
            Be Verified
          </p>
          <small
            className="text-white text-wrap text-center style"
            style={{ width: "17rem" }}
          >
            Join experienced Designers on this platform.
          </small>
        </div>

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Welcome</h2>
              <p>😆</p>
            </div>
            <div className="input-group mb-3">
            {error && error.hasOwnProperty('first_name') &&  (<span className="text-danger">{error.first_name[0]}</span>)}
            <br />
              <input
                value={first_name}
                type="text"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Nom"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
            {error && error.hasOwnProperty('last_name') &&  (<span className="text-danger">{error.last_name[0]}</span>)}
              <input
                value={last_name}
                type="text"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Prenom"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
            {error && error.hasOwnProperty('email') &&  (<span className="text-danger">{error.email[0]}</span>)}
              <input
                value={email}
                type="email"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-1">
            {error && error.hasOwnProperty('password') &&  (<><span className="text-danger">{error.password[0]}</span><br /></>)}
              <input
                value={password}
                type="password"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                />
                <label className="form-check-label text-secondary">
                  <small>Remember Me</small>
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <button
                className="btn btn-lg btn-primary w-100 fs-6"
                type="submit"
                onClick={(e) => SignUp(e)}
              >
                Register
              </button>
            </div>
            <div className="row">
              <small>
                My account exist <Link to={"/login"}> Sign In</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
