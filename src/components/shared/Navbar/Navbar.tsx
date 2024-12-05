import { memo } from "react";
import { NavLink } from "react-router-dom";
import profile from "../../../assets/img/profile.png";
import { FaBitbucket, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";

export const Navbar = memo(() => {
  return (
    <nav className="side-bar bg-[#ebeef1] rounded-lg text-white shadow-lg w-64 lg:w-64 xl:w-64 ml-2 my-2 fixed flex justify-center content-between">
      <div className="h-full relative container mx-auto py-3 flex flex-col">
        <div className="flex flex-col justify-center items-center mt-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            <div className="w-40 h-40 rounded-full group relative overflow-hidden">
              <img
                src={profile}
                alt=""
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 outline outline-2 outline-black group-hover:outline-blue-500"
              />
            </div>
          </NavLink>
          <p className="my-4 text-xl text-[#717171] font-semibold hover:text-black transition-all ease-in-out cursor-pointer">
            Md Sajidul Alam
          </p>
        </div>

        {/* <button
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
        </button> */}

        {/* Menu Items */}
        <div className={` w-full flex-grow flex justify-center`}>
          <ul className="w-full flex flex-col justify-center gap-6 mx-2">
            <li>
              <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 text-black bg-[#cfd0fa] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 text-[#717171] flex justify-start gap-3 items-center"
                }
              >
                <GoHomeFill style={{ fontSize: "18px" }} />
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " px-4 py-2 text-black bg-[#cfd0fa] rounded-lg flex justify-start gap-3 items-center"
                    : " px-4 py-2 text-[#717171] flex justify-start gap-3 items-center"
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
                    ? "px-4 py-2 text-black bg-[#cfd0fa] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 text-[#717171] flex justify-start gap-3 items-center"
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
                    ? "px-4 py-2 text-black bg-[#cfd0fa] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 text-[#717171] flex justify-start gap-3 items-center"
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
                    ? "px-4 py-2 text-black bg-[#cfd0fa] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 text-[#717171] flex justify-start gap-3 items-center"
                }
              >
                <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-around items-center">
          <a
            href="https://github.com/sajidul-dev"
            target="_blank"
            className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
          >
            <FaGithub
              style={{ color: "#000", padding: "", fontSize: "24px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sajidul-alam/"
            target="_blank"
            className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
          >
            <FaLinkedin
              style={{ color: "#000", padding: "", fontSize: "24px" }}
            />
          </a>
          <a
            href="https://x.com/MdSajidulAlam1"
            target="_blank"
            className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
          >
            <RiTwitterXLine
              style={{ color: "#000", padding: "", fontSize: "24px" }}
            />
          </a>
          {/* <FaLinkedin />
          <RiTwitterXLine /> */}
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
