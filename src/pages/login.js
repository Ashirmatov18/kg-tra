import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const logIn = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", true);
    router.push("/adminadd");
  };

  
  return (
    <div>
      <form onSubmit={(e) => logIn(e)}>
        <h1>Log In</h1>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button>Log In</button>
      </form>
    </div>
  );
}
// "react": "18.2.0",
// "react-dom": "18.2.0",
