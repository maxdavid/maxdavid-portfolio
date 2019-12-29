import React from "react";
import styled from "styled-components";
import { ProjectLink } from "./ProjectLink";
import { projects } from "./projects/briefs/homepage";

export const ProjectList = () => {
  return (
    <StyledProjectList className="flow">
      {projects.map(project => (
        <ProjectLink key={project.title} {...project} />
      ))}
    </StyledProjectList>
  );
};

const StyledProjectList = styled.div``;
