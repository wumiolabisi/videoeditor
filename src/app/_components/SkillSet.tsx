'use client';
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export default function SkillSet({
  src,
  skillTitle,
  progress,
  children,
}: {
  src: string;
  skillTitle: string;
  progress: string;
  children?: React.ReactNode;
}) {
  return (
    <article>
        <AnimatePresence>
        <motion.div
          className="display-flex gap-5px align-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={src}
            height={30}
            width={30}
            className="size-30xy"
            alt={`Icône pour ${skillTitle}`}
          />
          <h3>{skillTitle}</h3>
        </motion.div>
        </AnimatePresence>
      <div className="progress-bar-container relative radius-15px">
        <motion.div
          className={"progress-bar-inside-" + progress + " absolute z-index-1"}
           style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
      </div>
      {children && <div className="skill-details">{children}</div>}
    </article>
  );
}
