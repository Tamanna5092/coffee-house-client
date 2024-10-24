import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const SignIn = () => {
  const {signInUser} = useContext(AuthContext)

  const handleSignIn = e => {
    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);


    signInUser(email, password)
    .then(result => {
      console.log(result.user)
      const user = {
        email,
        lastLoggedAt: result.user?.metadata?.lastSignInTime
      }
      // update last logged at in the database
      fetch('http://localhost:5000/user' , {
        method: 'PATCH',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

      
    })
    .catch(error => {
      console.log(error)
    })
  }
  
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign In now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign In</a>.
			</p>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignIn;