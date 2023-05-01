import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { loginUserFunction } from '../api/apis'

const Login = () => {

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: "", password: ""
  });

  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = inputValues;

    if (email === "") {
      toast.error("Please enter a email");
    }
    else if (password.length < 5) {
      toast.error("Password must be contain 5 or more character");
    }
    else {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const apiResponse = await loginUserFunction(data);

      if (apiResponse.status === 200) {
        toast.success(apiResponse.data.successMessage);
        localStorage.setItem("logged", apiResponse.data.authenticationToken);
        localStorage.setItem("loggedTime", apiResponse.data.time);
        localStorage.setItem("user", apiResponse.data.user);
        localStorage.setItem("authO", apiResponse.data.authenticationToken);
        setInputValues({ email: "", password: "" });
        navigate("/")
      }
      else if(apiResponse.status === 400){
        toast.error(apiResponse.data.errorMessage);
      }
    }
  }

  return (
    <>
      <div className="auth-page default-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 m-auto">
              <div className="content">
                <form onSubmit={(event) => handleSubmit(event)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={inputValues.email} onChange={(e) => handleChange(e)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={inputValues.password} onChange={(e) => handleChange(e)} />
                  </div>
                  <button type="submit" className="btn btn-outline-success">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login