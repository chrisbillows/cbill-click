"use client";

import { Chrono } from "react-chrono";
import { FaTwitter, FaEnvelope, FaSun } from "react-icons/fa";
import data from "../../data";

function TimelineWithCustomIcons() {
  return (
    <Chrono items={data} mode="VERTICAL_ALTERNATING">
      <div className="chrono-icons">
        <FaTwitter color="#1da1f2" />
        <FaEnvelope color="green" />
        <FaSun color="#f39c12" />
      </div>
    </Chrono>
  );
}

export default TimelineWithCustomIcons;
