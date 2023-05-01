import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { loginUserFunction, signUpUserFunction } from '../api/apis'

const Signup = () => {

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    name: "", role: "", email: "", password: ""
  });

  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, role, email, password } = inputValues;

    if (name === "") {
      toast.error("Please enter a name")
    }
    else if (role === "") {
      toast.error("Please select a role")
    }
    else if (email === "") {
      toast.error("Please enter a email");
    }
    else if (password.length < 5) {
      toast.error("Password must be contain 5 or more character");
    }
    else {
      const data = new FormData();
      data.append("name", name);
      data.append("role", role);
      data.append("email", email);
      data.append("password", password);

      const apiResponse = await signUpUserFunction(data);

      if (apiResponse.status === 200) {
        toast.success(apiResponse.data.successMessage);
        setInputValues({ name: "", role: "", email: "", password: "" });
        navigate("/")
      }
      else if(apiResponse.data.success === false){
        toast.error(apiResponse.data.errorMessage)
      }
      else if (apiResponse.status === 400){
        toast.error(apiResponse.data.errors[0].msg)
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
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" name='name' value={inputValues.name} onChange={(e) => handleChange(e)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputRole" className="form-label">Role</label>
                    <input type="text" className="form-control" id="exampleInputRole" name='role' value={inputValues.role} onChange={(e) => handleChange(e)} />
                  </div>
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

export default Signup