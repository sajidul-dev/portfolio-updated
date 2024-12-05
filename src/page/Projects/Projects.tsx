import { Project } from "./Project";

const projects = [
  {
    id: 1,
    title: "Filp-Dash",
    description:
      "Filp-Dash is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL.",
    image: "/sample.png",
    link: "https://flip-dash.netlify.app/",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Filp-Dash",
    description:
      "Filp-Dash is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL.",
    image: "/sample.png",
    link: "https://flip-dash.netlify.app/",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Filp-Dash",
    description:
      "Filp-Dash is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL.",
    image: "/sample.png",
    link: "https://flip-dash.netlify.app/",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];

export const Projects = () => {
  return (
    <div className="grid grid-cols-12 gap-6 h-[80vh] overflow-hidden">
      {projects.map((project) => (
        <div key={project.id} className="col-span-4">
          <Project props={project} />
        </div>
      ))}
    </div>
  );
};

Projects.displayName = "Projects";
