/** @format */

import React, { DragEvent } from "react";
import styles from "./DragAndDrop.module.css";
const DragAndDrop = () => {
  const dragItem = React.useRef<null | number>(null);
  const dragOverItem = React.useRef<null | number>(null);
  const [list, setList] = React.useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const dragStart = (e: DragEvent, position: number) => {
    dragItem.current = position;
  };
  const dragEnter = (e: DragEvent, position: number) => {
    dragOverItem.current = position;
  };

  const drop = (e: DragEvent) => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItems);
    }
  };
  return (
    <div className={styles.flex}>
      {list &&
        list.map((item, index) => (
          <div
            className={styles.background}
            onDragStart={(e) => {
              dragStart(e, index);
            }}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default DragAndDrop;
