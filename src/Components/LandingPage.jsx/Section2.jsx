import React from "react";
import "./Section2.css";

export const Section2 = () => {
  return (
    <div className="lg:flex lg:flex-col justify-center items-center py-4 Box_sizing" >
      <div className="text-5xl font-extrabold SCIFI text-[#4776E6]">Why  SCI<span id="eta">&#951;</span>
              <span id="prime">&#8242;</span>TFIC ?</div>
      <div className="text-[1.4rem] from-neutral-600 pt-6 text-justify lg:w-[950px] AdjustContent3">
        <ol style={{ listStyleType: "initial" }}>
          <li className="py-1.5 text-justify">
            To bring awareness about the recent science and technological
            development among young students.
          </li>
          <li className="py-1.5 text-justify">
            {" "}
            To develop a zeal for exploring science and technology in the young
            generation.
          </li>
          <li className="py-1.5 text-justify">
            {" "}
            To make them realize the interdependence of science, technology and
            society and the responsibility of the scientists/engineers of
            tomorrow.
          </li>
          <li className="py-1.5 text-justify">
            To encourage school students for higher education in science and
            technology.
          </li>
        </ol>
      </div>
    </div>
  );
};
