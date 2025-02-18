import Title from "../Title/Title";
import SingleProject from "./components/SingleProject";

const Projects = () => {
  const projects = [
    {
      image: "/projects/project-1.png",
      smallText: "Would like to",
      title: "Work on legacy projects",
      subTitle: "It will pay off with your deeds for humanity",
      text: "Leadership Development Platforms; On-Off Shore Franchise Management; Refinement of Educational Institutions",
    },
    {
      image: "/projects/project-2.png",
      smallText: "It will all",
      title: "Work out great in the end",
      subTitle: "if you learn the arts of",
      text: "Organisational Capacity Building, Compliance, QA for Sustainable Growth Management",
    },
    {
      image: "/projects/project-3.png",
      smallText: "Would like to",
      title: "Work on legacy projects",
      subTitle: "It will pay off with your deeds for humanity",
      text: "Leadership Development Platforms; On-Off Shore Franchise Management; Refinement of Educational Institutions",
    },
    {
      image: "/projects/project-4.png",
      smallText: "It will all",
      title: "Work out great in the end",
      subTitle: "if you learn the arts of",
      text: "Organisational Capacity Building, Compliance, QA for Sustainable Growth Management",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Title text="All Projects" />
      <div>
        {projects.map((project, index) => (
          <SingleProject key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
