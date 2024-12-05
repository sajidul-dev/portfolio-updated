import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import profile from "../../../assets/img/profile.png";
import { FaBitbucket } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";

export const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="side-bar bg-[#474BAE] rounded-lg text-white shadow-lg w-52 lg:w-52 xl:w-52 ml-2 my-2 fixed flex justify-center content-between">
      <div className="h-full relative container mx-auto py-3 flex flex-col">
        <div className="flex flex-col justify-center items-center mt-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            <div className="w-28 h-28 rounded-full">
              <img src={profile} alt="" className="w-full h-full" />
            </div>
          </NavLink>
          <p className="my-4 text-xl font-semibold">Md Sajidul Alam</p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div className={` w-full flex-grow flex justify-center`}>
          <ul className="w-full flex flex-col justify-center gap-6 mx-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <GoHomeFill style={{ fontSize: "18px" }} />
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : " px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <AiFillCode style={{ fontSize: "18px" }} />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <FaBitbucket style={{ fontSize: "18px" }} />
                Achievements
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchase-history"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <IoPerson style={{ fontSize: "18px" }} />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchase-history"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
