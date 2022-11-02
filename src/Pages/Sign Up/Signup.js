import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Signup = () => {

    const handleSignUp = event =>{
        event.preventDefault();
    }

  return (
    <div className="hero mt-20 my-20 w-full ">
  <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left ">
      
      <img src={img} className="w-3/4" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
            <input type="submit" value="Sign Up" className='btn btn-primary' />
          
        </div>
      </form>

      <p className='text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Log in</Link></p>
    </div>
  </div>
</div>
  )
}

export default Signup