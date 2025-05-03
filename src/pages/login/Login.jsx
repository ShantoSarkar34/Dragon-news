import React from "react";
import Header from "../../components/Header";
import { NavLink } from "react-router";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Login = () => {
  // const auth = getAuth();

  const handleUser = (e) => {
    e.preventDefault();
    const user = e.target;
    const email = user.email.value;
    const password = user.password.value;
    console.log(email, password);
    // createUserWithEmailAndPassword(auth,email,password)
    // .then((user)=> {
    //     const userInfo = user.user;
    // })
    // .catch((error)=> {
    //     console.log(error);

    // })
  };

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="py-20 ">
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm dark:text-gray-600">
              Login to access your account
            </p>
          </div>
          <form onSubmit={handleUser} className="space-y-12">
            <div className="space-y-4">
              {/* email  */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              {/* password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button type="submit" className="w-full btn btn-primary">
                  Log In
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Don't have an account yet?
                <NavLink
                  to="/signin"
                  className="hover:underline dark:text-default-600 pl-1"
                >
                  Sign up
                </NavLink>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
