import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Components/Authcontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post("https://reqres.in/api/login", {email, password})
    .then((res) => {
      login(res.data.token)
      navigate("/product")
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="p-5 shadow rounded bg-white"
        style={{ width: '400px', maxWidth: '90%' }}
      >
        <h2 className="text-center mb-4" style={{ color: '#002142' }}>Welcome Back</h2>
        <p className="text-center text-muted mb-5">Please login to your account</p>

        <form>
          <div className="mb-4">
            <label className="form-label text-secondary">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-secondary">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type='submit' className='button border-0' onClick={handlesubmit}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
