import React from "react";

const Projects = ({ item, toggleModal }) => {
  return (
    <div
      onClick={() => {
        toggleModal(item);
      }}
      className="my-project"
    >
      <img src={item.img_url} alt={`${item.project_title} project`} />
      <div>
        <h4>{item.project_title}</h4>
      </div>
    </div>
  );
};

export default Projects;
