/** @format */

import React from "react";
import project from "./explanation";
import type { RootState } from "../../app/store";
import styles from "./HoverPage.module.css";
import { useSelector } from "react-redux";
const HoverPage = () => {
  const hoverElementName = useSelector((state: RootState) => state.list.hover);

  const selectedProjects = project.filter(
    (pro) => pro.name === hoverElementName
  );

  return (
    <>
      {hoverElementName && (
        <div className={styles.fade}>
          {selectedProjects.map((project) => (
            <div key={project.name}>
              <p>{project.expl}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HoverPage;
