import React from "react";

const projects = [
  {
    title: "Group Project 2",
    repolink: "https://github.com/haden-liu/Project-2"
  },

  {
    title: "Burger",
    repolink: "https://github.com/haden-liu/Burger"
  },
  {
    title: "Employee Tracker",
    repolink: "https://github.com/haden-liu/Homework12"
  }

];

function Project() {
  return (
    <React.Fragment>
      {projects.map(project => (
        <section class="feature column column--mobile">
          <div id="absolute">
            <strong>{project.title}</strong><a href={project.repolink}><img src="assets/images/github-icon.png" alt="GitHub icon" /></a>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
}

export default Project;
