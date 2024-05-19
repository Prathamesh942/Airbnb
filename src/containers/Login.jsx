import React from "react";

function Login({ setauth }) {
  return (
    <div
      className=" outsidelogin w-[100%] h-screen bg-[rgba(53,53,53,0.8)] z-50 fixed top-0 flex justify-center items-center"
      onClick={(e) => {
        console.log(e.target, this);
        if (event.target.classList.contains("outsidelogin")) {
          setauth();
          console.log("clicked outside");
        }
      }}
    >
      <div className="w-[500px] bg-white rounded-xl flex items-center justify-center gap-5 flex-col p-5">
        <span>Login</span>
        <form action="" className="flex flex-col w-[100%] px-5 gap-3">
          <input
            type="email"
            placeholder="Email"
            className=" border-zinc-500 border py-1 px-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className=" border-zinc-500 border px-3 py-1 rounded-lg"
          />
          <button className="w-[100%] p-2 bg-rose-500 rounded-xl text-white">
            Continue
          </button>
        </form>
        <div className="flex">
          <hr />
          <span>Or</span>
          <hr />
        </div>
        <button className="border border-zinc-800 rounded-md p-3 w-[90%]">
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
