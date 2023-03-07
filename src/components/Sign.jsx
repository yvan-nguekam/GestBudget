import React from 'react'
// import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

function Sign() {

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background: "#103cbe"}}>
                <div className="featured-image mb-3">
                    <img src="src\assets\images\1.png" className="img-fluid" style={{width: '250px'}} />
                </div>
                <p className="text-white fs-2 style" style={{ fontWeight: "600" }}>Be Verified</p>
                <small className="text-white text-wrap text-center style" style={{width: "17rem" }}>Join experienced Designers on this platform.</small>
            </div> 
   
            <div className="col-md-6 right-box">
                {/* <Login/> */}
                <Register/>
            </div> 

        </div>
    </div>
  )
}

export default Sign