import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";

const SearchIcon = () => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    style={{
      display: "block",
      fill: "none",
      height: "16px",
      width: "16px",
      stroke: "currentColor",
      strokeWidth: "4",
      overflow: "visible",
    }}
    aria-hidden="true"
    role="presentation"
    focusable="false"
    width="32"
    height="32"
  >
    <path
      fill="none"
      d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
      stroke="#FFFFFF"
      strokeWidth="4px"
    ></path>
  </svg>
);

const Globe = () => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      height: "16px",
      width: "16px",
      fill: "currentcolor",
    }}
    width="16"
    height="16"
  >
    <path
      d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"
      fill="#222222"
    />
  </svg>
);

const Hamburger = () => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      fill: "none",
      height: "16px",
      width: "16px",
      stroke: "currentcolor",
      strokeWidth: "3",
      overflow: "visible",
    }}
    width="32"
    height="32"
  >
    <g fill="none" stroke="#222222" strokeWidth="3px">
      <path d="M2 16h28" stroke="#222222" fill="none" strokeWidth="3px" />
      <path d="M2 24h28" stroke="#222222" fill="none" strokeWidth="3px" />
      <path d="M2 8h28" stroke="#222222" fill="none" strokeWidth="3px" />
    </g>
  </svg>
);

export function Navbar({ scrolled, setScrolled, padding = 20 }) {
  const [profileclicked, setprofileclicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [auth, setauth] = useState(null);
  console.log(auth);
  return (
    <>
      {auth == "login" ? (
        <Login
          setauth={function close() {
            setauth(null);
          }}
        />
      ) : auth == "signup" ? (
        <Signup setauth={setauth} />
      ) : (
        <></>
      )}
      <nav
        className={` fixed top-0 w-screen flex z-30 justify-between px-${padding} py-4 h-20 bg-white items-center z-10 max-md:px-10`}
      >
        <Link to="/">
          <div className="flex items-center gap-2">
            <svg width="30" height="32" style={{ display: "block" }}>
              <path
                d="M29.3864 22.7101C29.2429 22.3073 29.0752 21.9176 28.9157 21.5565C28.6701 21.0011 28.4129 20.4446 28.1641 19.9067L28.1444 19.864C25.9255 15.0589 23.5439 10.1881 21.0659 5.38701L20.9607 5.18316C20.7079 4.69289 20.4466 4.18596 20.1784 3.68786C19.8604 3.0575 19.4745 2.4636 19.0276 1.91668C18.5245 1.31651 17.8956 0.833822 17.1853 0.502654C16.475 0.171486 15.7005 -9.83959e-05 14.9165 4.23317e-08C14.1325 9.84805e-05 13.3581 0.171877 12.6478 0.503224C11.9376 0.834571 11.3088 1.31742 10.8059 1.91771C10.3595 2.46476 9.97383 3.05853 9.65572 3.68858C9.38521 4.19115 9.12145 4.70278 8.8664 5.19757L8.76872 5.38696C6.29061 10.1884 3.90903 15.0592 1.69015 19.8639L1.65782 19.9338C1.41334 20.463 1.16057 21.0102 0.919073 21.5563C0.75949 21.9171 0.592009 22.3065 0.448355 22.7103C0.0369063 23.8104 -0.094204 24.9953 0.0668098 26.1585C0.237562 27.334 0.713008 28.4447 1.44606 29.3804C2.17911 30.3161 3.14434 31.0444 4.24614 31.4932C5.07835 31.8299 5.96818 32.002 6.86616 32C7.14824 31.9999 7.43008 31.9835 7.71027 31.9509C8.846 31.8062 9.94136 31.4366 10.9321 30.8639C12.2317 30.1338 13.5152 29.0638 14.9173 27.5348C16.3194 29.0638 17.6029 30.1338 18.9025 30.8639C19.8932 31.4367 20.9886 31.8062 22.1243 31.9509C22.4045 31.9835 22.6864 31.9999 22.9685 32C23.8664 32.002 24.7561 31.8299 25.5883 31.4932C26.6901 31.0444 27.6554 30.3161 28.3885 29.3804C29.1216 28.4447 29.5971 27.3341 29.7679 26.1585C29.9287 24.9952 29.7976 23.8103 29.3864 22.7101ZM14.9173 24.377C13.1816 22.1769 12.0678 20.1338 11.677 18.421C11.5169 17.7792 11.4791 17.1131 11.5656 16.4573C11.6339 15.9766 11.8105 15.5176 12.0821 15.1148C12.4163 14.6814 12.8458 14.3304 13.3374 14.0889C13.829 13.8475 14.3696 13.7219 14.9175 13.7219C15.4655 13.722 16.006 13.8476 16.4976 14.0892C16.9892 14.3307 17.4186 14.6817 17.7528 15.1151C18.0244 15.5181 18.201 15.9771 18.2693 16.4579C18.3556 17.114 18.3177 17.7803 18.1573 18.4223C17.7661 20.1349 16.6526 22.1774 14.9173 24.377ZM27.7406 25.8689C27.6212 26.6908 27.2887 27.4674 26.7762 28.1216C26.2636 28.7759 25.5887 29.2852 24.8183 29.599C24.0393 29.9111 23.1939 30.0217 22.3607 29.9205C21.4946 29.8089 20.6599 29.5239 19.9069 29.0824C18.7501 28.4325 17.5791 27.4348 16.2614 25.9712C18.3591 23.3846 19.669 21.0005 20.154 18.877C20.3723 17.984 20.4196 17.0579 20.2935 16.1475C20.1791 15.3632 19.8879 14.615 19.4419 13.9593C18.9194 13.2519 18.2378 12.6768 17.452 12.2805C16.6661 11.8842 15.798 11.6777 14.9175 11.6777C14.0371 11.6777 13.1689 11.8841 12.383 12.2803C11.5971 12.6765 10.9155 13.2515 10.393 13.9589C9.94707 14.6144 9.65591 15.3624 9.5414 16.1465C9.41524 17.0566 9.4623 17.9822 9.68011 18.8749C10.1648 20.9993 11.4748 23.384 13.5732 25.9714C12.2555 27.4348 11.0845 28.4325 9.92769 29.0825C9.17468 29.5239 8.34007 29.809 7.47395 29.9205C6.64065 30.0217 5.79525 29.9111 5.0162 29.599C4.24581 29.2852 3.57092 28.7759 3.05838 28.1217C2.54585 27.4674 2.21345 26.6908 2.09411 25.8689C1.97932 25.0334 2.07701 24.1825 2.37818 23.3946C2.49266 23.0728 2.62663 22.757 2.7926 22.3818C3.0274 21.851 3.27657 21.3115 3.51759 20.7898L3.54996 20.7197C5.75643 15.9419 8.12481 11.0982 10.5894 6.32294L10.6875 6.13283C10.9384 5.64601 11.1979 5.14267 11.4597 4.6563C11.7101 4.15501 12.0132 3.68171 12.3639 3.2444C12.6746 2.86903 13.0646 2.56681 13.5059 2.35934C13.9473 2.15186 14.4291 2.04426 14.9169 2.04422C15.4047 2.04418 15.8866 2.15171 16.3279 2.35911C16.7693 2.56651 17.1593 2.86867 17.4701 3.24399C17.821 3.68097 18.1242 4.15411 18.3744 4.65538C18.6338 5.13742 18.891 5.63623 19.1398 6.11858L19.2452 6.32315C21.7097 11.0979 24.078 15.9415 26.2847 20.7201L26.3046 20.7631C26.5498 21.2936 26.8033 21.8419 27.042 22.382C27.2082 22.7577 27.3424 23.0738 27.4566 23.3944C27.7576 24.1824 27.8553 25.0333 27.7406 25.8689Z"
                fill="#fd5c63"
              ></path>
            </svg>
            <span className=" font-bold text-rose-500 text-xl">airbnb</span>
          </div>
        </Link>
        {!scrolled ? (
          <ul className="flex justify-between w-2/4 max-w-80 absolute left-2/4 transform -translate-x-1/2 max-md:hidden ">
            <li>Stays</li>
            <li>Experiences</li>
            <li>Online Experiences</li>
          </ul>
        ) : (
          <div
            onClick={() => setScrolled(0)}
            className=" w-1/4 flex justify-between items-center rounded-full border-2 px-3 pr-2 py-2 gap-3 absolute left-2/4 transform -translate-x-1/2 max-md:hidden"
          >
            <div className="flex-[2_2_0%] justify-center border-r-2">
              <span>Anywhere</span>
            </div>
            <div className="flex-[2_2_0%] justify-center border-r-2">
              <span>Any week</span>
            </div>
            <div className="flex-[3_3_0%] flex justify-between items-center">
              <span>Add guest</span>
              <button className="bg-rose-500 w-8 h-8 rounded-full flex items-center justify-center">
                <SearchIcon />
              </button>
            </div>
          </div>
        )}
        <div className="flex gap-5 items-center relative cursor-pointer">
          <span className=" max-sm:hidden">Switch to hosting</span>
          <Globe />
          <div
            className="flex items-center gap-4 border-2 p-2 rounded-full"
            onClick={() => {
              setprofileclicked(!profileclicked);
            }}
          >
            <Hamburger />
            <span className=" flex size-8 rounded-full bg-black text-white items-center justify-center">
              P
            </span>
          </div>
          {profileclicked ? (
            <div className=" absolute top-[60px] flex flex-col right-0 bg-white shadow-md p-5 gap-2 rounded-lg items-start">
              <button
                onClick={() => {
                  setauth("login");
                  setprofileclicked(false);
                }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setauth("signup");
                  setprofileclicked(false);
                }}
              >
                Signup
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="md:hidden">
        <button className="" onClick={() => setOpen(!open)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h16M4 12h16M4 16h16"
          ></path>
        </svg>
      </button>
      <nav
        className={` flex gap-5 font-medium justify-start items-start ${
          open
            ? "flex-col absolute right-0 top-16 p-3 bg-white"
            : "hidden"
        }`}
      >
        <button>Stays </button>
        <button>Experience </button>
        <button>Online experience</button>
      </nav>
        </div>
      </nav>
    </>
  );
}

function Searchbar({setQuery}) {
  console.log("searchbar");
  return (
    <div className=" flex justify-center fixed w-screen top-20 mt-0 z-20 bg-white h-24 max-md:h-16 pb-2 min-w-[400px]">
      <div className=" w-3/5 flex px-10 pr-2 items-center py-2 border-2 rounded-full gap-4 text-sm shadow mx-auto text-center h-5/6">
        <div className="flex-[2_2_0%] border-r-2">
          <input className=" outline-none text-xl max-md:text-sm" onChange={(e)=>{setQuery(e.target.value)}} type="text" placeholder="Search destination" />
        </div>
        <button className="bg-rose-500 w-12 h-12 rounded-full flex items-center justify-center max-md:w-8 max-md:h-8 aspect-square">
            <SearchIcon />
          </button>
      </div>
    </div>
  );
}

function Header({setQuery}) {
  const [scrolled, setScrolled] = useState(0);
  const handlescroll = () => {
    window.scrollY > 0 ? setScrolled(1) : setScrolled(0);
  };
  console.log(scrolled);
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <div className="header w-[100%]">
      <Navbar scrolled={scrolled} setScrolled={setScrolled} />
      {scrolled == 0 ? <Searchbar setQuery={setQuery} /> : <></>}
    </div>
  );
}

export default Header;
