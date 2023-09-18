import React, { useState } from "react";
import { useRouter } from "next/router";

interface INavbarItem {
  title: string;
  link: string;
}

const NavbarItem: INavbarItem[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Categories",
    link: "#",
  },
  {
    title: "Products",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
];

function Navbar() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchHandler = () => {
    router.push({
      pathname: "/search",
      query: {
        keyword: searchKeyword,
      },
    });
  };

  return (
    <nav className="header-area">
      <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-none">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">.Apk</a>
        </div>
        <div className="navbar-center w-2/5">
          <div className="form-control w-full">
            <input
              type="text"
              value={searchKeyword}
              placeholder="Search"
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchHandler()}
              className="input input-bordered bg-white md:w-auto border border-black rounded-full"
            />
          </div>
        </div>
        <div className="navbar-end">
          <ul className="sm:flex hidden space-x-2">
            {NavbarItem.map((item, i) => {
              return (
                <li key={i}>
                  <a>{item.title}</a>
                </li>
              );
            })}
          </ul>
          <div className="dropdown sm:hidden dropdown-end dropdown-bottom">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              {NavbarItem.map((item, i) => {
                return (
                  <li key={i}>
                    <a>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
