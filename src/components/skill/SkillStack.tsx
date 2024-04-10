/** @format */

import React from "react";

import SkillItems from "./SkillItems";
import styles from "./SkillStack.module.css";
import { skillNames, mainSkills, subSkills, otherSkills } from "../../names";
const MyStack = () => {
  return (
    <div>
      <h1>My Stack</h1>
      <div className={styles.stack_flex}>
        <SkillItems skillName={skillNames[0]} item={mainSkills} />
        <SkillItems skillName={skillNames[1]} item={subSkills} />
        <SkillItems skillName={skillNames[2]} item={otherSkills} />
      </div>
    </div>
  );
};

export default MyStack;
