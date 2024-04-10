/** @format */

import React from "react";
import styles from "./Resize.module.css";
import registMouseDownDrag from "./registMouseDownDrag";
const Resize = () => {
  const inrange = (v: number, min: number, max: number) => {
    if (v < min) return min;
    if (v > max) return max;
    return v;
  };
  const BOUNDARY_MARGIN = 12;
  const MIN_W = 10;
  const MIN_H = 10;
  const [{ x, y, w, h }, setConfig] = React.useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  const boundaryRef = React.useRef<HTMLDivElement>(null);
  // 2️⃣
  React.useEffect(() => {
    const boundary = boundaryRef.current?.getBoundingClientRect();

    if (boundary) {
      const DEFAULT_W = 50;
      const DEFAULT_H = 50;
      setConfig({
        x: Math.floor(boundary.width / 2 - DEFAULT_W / 2),
        y: Math.floor(boundary.height / 2 - DEFAULT_H / 2),
        w: DEFAULT_W,
        h: DEFAULT_H,
      });
    }
  }, []);

  return (
    <div className={styles.boxCover} ref={boundaryRef}>
      <div
        style={{ width: w, height: h, left: x, top: y }}
        className={styles.relative}
        {...registMouseDownDrag((deltaX, deltaY) => {
          if (!boundaryRef.current) return;

          const boundary = boundaryRef.current.getBoundingClientRect();
          setConfig({
            x: inrange(
              x + deltaX,
              BOUNDARY_MARGIN,
              boundary.width - w - BOUNDARY_MARGIN
            ),
            y: inrange(
              y + deltaY,
              BOUNDARY_MARGIN,
              boundary.height - h - BOUNDARY_MARGIN
            ),
            w,
            h,
          });
        })}
      >
        <div
          className={styles.top}
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            if (!boundaryRef.current) return;

            const boundary = boundaryRef.current.getBoundingClientRect();

            setConfig({
              x,
              y: inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H),
              w,
              h: inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
            });
          }, true)}
        />
        <div
          // 3️⃣
          className={styles.bottom}
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            if (!boundaryRef.current) return;

            // 3️⃣
            const boundary = boundaryRef.current.getBoundingClientRect();
            setConfig({
              x,
              y,
              w,
              h: inrange(
                h + deltaY,
                MIN_H,
                boundary.height - y - BOUNDARY_MARGIN
              ),
            });
            // 2️⃣
          }, true)}
        />
        <div
          className={styles.left}
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            setConfig({
              x: inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W),
              y,
              w: inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN),
              h,
            });
          }, true)}
        />
        <div
          className={styles.right}
          style={{ backgroundColor: "#12121250" }}
          {...registMouseDownDrag((deltaX, deltaY) => {
            setConfig({
              x,
              y,
              w: inrange(w + deltaX, MIN_W, x + w - BOUNDARY_MARGIN),
              h,
            });
          }, true)}
        />
      </div>
    </div>
  );
};

export default Resize;
