"use client";
import useMousePosition from "./utils/useMousePosition";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          We were good, we were gold <br /> Kinda dream that can't be sold
          <br /> We were right 'til we weren't
          <br /> Built a home and watched it burn
        </p>
      </motion.div>
      <div className={styles.body}>
        <p>
          Can love me better
          <br /> I can <span>love me better,</span> baby
          <br /> Can love me better
          <br /> I can love me better, baby
        </p>
      </div>
    </main>
  );
}
