import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import Header from "../../components/Header";
import { AuthContext } from "../../authProvider/AuthProvider";

const signin = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegester = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="py-20 ">
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-600">
              Sign in to access your account
            </p>
          </div>

          <form onSubmit={handleRegester} className="space-y-12">
            <div className="space-y-4">
              {/* name  */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  required
                  placeholder="your name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              {/* photo url  */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Your Photo URL
                </label>
                <input
                  type="text"
                  name="text"
                  required
                  placeholder="photo url"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              {/* email  */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              {/* password */}
              <div>
                <div className="mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  onClick={handleNavigate}
                  className="w-full btn btn-primary"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center">
                Ardly have an account?
                <NavLink to="/login" className="hover:underline pl-1">
                  LogIn
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

export default signin;
