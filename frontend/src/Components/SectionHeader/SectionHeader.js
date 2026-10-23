import React from "react";

// Small purple label + big heading used at the top of each home page section.
const SectionHeader = ({ eyebrow, title, center = false, className = "" }) => (
  <div className={`${center ? "text-center" : ""} ${className}`}>
    <p className="font-body text-sm font-semibold tracking-[0.12em] text-accent mb-2.5">
      {eyebrow}
    </p>
    <h2 className="font-display font-semibold text-[clamp(30px,3.4vw,46px)] tracking-[-0.02em] leading-tight">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
