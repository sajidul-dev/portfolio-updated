import { FaGithub } from "react-icons/fa";

type Project = {
  id?: number;
  title?: string;
  description?: string;
  image: string;
  liveLink: string;
  client?: string;
  server: string;
  tags: string[];
};

type ProjectProps = {
  props: Project;
};

export const Project = ({ props }: ProjectProps) => {
  console.log(props);
  return (
    <div className="w-[400px] h-[500px] bg-[#ebeef1] p-6 rounded-2xl shadow-xl">
      <div className="w-full h-[200px] group relative overflow-hidden outline outline-2 outline-black rounded-2xl">
        <img
          src={props.image}
          alt=""
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <a
          href={props.liveLink}
          target="_blank"
          className="absolute inset-center w-10 h-10 flex items-center justify-center bg-white rounded-full text-black opacity-0 transform scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        >
          👁️
        </a>
      </div>
      <p className="my-4 text-xl text-[#717171] font-semibold hover:text-black transition-all ease-in-out">
        {props.title}
      </p>
      <p>{props.description?.substring(0, 199)}...</p>
      <div className="my-2">
        {props.tags.map((tag) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
      <div>
        <a href={props.client} className="">
          <FaGithub style={{ color: "#000", padding: "", fontSize: "24px" }} />
        </a>
      </div>
    </div>
  );
};

Project.displayName = "Project";
