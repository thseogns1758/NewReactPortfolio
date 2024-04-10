import React from "react";
import ProjectItems from "./ProjectItems";
import styles from "./MyProject.module.css";
import HoverPage from "./HoverPage";
const MyProject = () => {
  return (
    <div className={styles.cover}>
      <HoverPage />
      <ProjectItems />
    </div>
  );
};

export default MyProject;
