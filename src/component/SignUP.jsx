import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUP = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

	createUser(email, password)
	.then(result => {
		console.log(result.user)
		// new user has been created
		const createdAt = result.user?.metadata?.creationTime;
		const user = {email, createdAt};
		fetch('http://localhost:5000/user', {
			method: 'POST',
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.insertedId){
				Swal.fire({
					title: "Success",
					text: "User added successfully",
					icon: "success",
				  });
			}
		})
	})
	.catch(error => console.error(error))
  };

  return (
    <div className="flex flex-col max-w-md mx-auto shadow-2xl mt-10 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-600">
          Sign up to to create your account
        </p>
      </div>
      <form
        onSubmit={handleSignUp}
        noValidate=""
        action=""
        className="space-y-6"
      >
        <div className="space-y-1">
          <label htmlFor="username" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
        </div>
        <button className="block w-full p-3 text-center text-white bg-red-500 hover:bg-gray-800 rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Sign Up
        </button>
        <p className="px-6 text-center dark:text-gray-600">
          Alredy have an account?
          <a
            rel="noopener noreferrer"
            href="#"
            className="hover:underline dark:text-violet-600"
          >
            Sign Up
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default SignUP;
