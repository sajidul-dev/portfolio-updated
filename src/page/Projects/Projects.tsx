import { Project } from "./Project";

const projects = [
  {
    id: 1,
    title: "Filp-Dash",
    description:
      "Filp-Dash is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL.",
    image: "/project-1.png",
    liveLink: "https://flip-dash.netlify.app/",
    client: "",
    server: "",
    tags: ["Next JS", "Mongoose", "MongoDB"],
  },
  {
    id: 2,
    title: "Filp-Dash",
    description:
      "Filp-Dash is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL.",
    image: "/project-2.png",
    liveLink: "https://manufacturer-app-ea238.web.app/",
    client: "https://github.com/sajidul-dev/plex-tools-client",
    server: "https://github.com/sajidul-dev/plex-tools-server",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Filp-Dash",
    description:
      "Filp-Dash is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL. It is a web application that allows users to view and manage their finances. It is a full-stack application that uses React, Node.js, and PostgreSQL.",
    image: "/project-3.png",
    liveLink: "https://warehouse-management-949b6.web.app/",
    client: "https://github.com/sajidul-dev/perfumania-client-A11",
    server: "https://github.com/sajidul-dev/perfumania-server-A11",
    tags: ["React", "Express", "MongoDB"],
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
