import React from "react";
import { ThemeCard } from "./ThemeCard";
import { ThemeCard1 } from "./ThemeCard1";
import { ThemeCard2 } from "./ThemeCard2";

export const ThemeBetter = () => {
  const themes = {
    "C3-5": [
      {
        name: "Water Conservation",
        image: "./assets/themes/Water Conservation.jpeg",
        description:
          'Disaster management refers to actions that can be taken in case of a "disaster", like a flood, avalanche, landslide, etc. Disaster management will include questions like "How to prevent such Disasters?" and "What is to be done in case such an event occurs?". Students can provide ideas about the prevention of both man-made and natural disasters. They can also provide solutions for recovery efforts to minimize damage and help the most number of people possible.',
      },
      {
        name: "Waste to Best",
        image: "./assets/themes/Waste to best.jpeg",
        description:
          'Disaster management refers to actions that can be taken in case of a "disaster", like a flood, avalanche, landslide, etc. Disaster management will include questions like "How to prevent such Disasters?" and "What is to be done in case such an event occurs?". Students can provide ideas about the prevention of both man-made and natural disasters. They can also provide solutions for recovery efforts to minimize damage and help the most number of people possible.',
      },
      {
        name: "Nutritional Values",
        image: "./assets/themes/Nutritional value.jpeg",
        description:
          "Healthcare is a basic need. Optimum healthcare cannot be provided without proper sanitation. Cleanliness or, more formally, sanitation, is an aspect that often goes overlooked when thinking of ways to improve healthcare services. Students should think about the link between these concepts and talk about how to ensure the best of both government or private facilities.",
      },
    ],
    "C5-8": [
      {
        name: "Water Crisis and Managment",
        image: "./assets/themes/Water crisis and management.jpeg",
        description:
          'Disaster management includes both the processes of "preparing for" and "recovery after" a disaster. The topics span many fields like prevention, preparation, response and recovery, and surveying after. Students are encouraged to provide an in-depth assessment of any of these subtopics and provide ideas on how to link these processes together effectively.',
      },
      {
        name: "Impact of Plastic on Marine Life",
        image: "./assets/themes/Impact of plastic.jpeg",
        description:
          "Smart Education is education that goes beyond the boundaries of traditional education. Smart Education would incorporate the internet seamlessly into the curriculum and would have courses that impart skills necessary to survive in today's fast-paced economy. Smart Education would also incorporate all the latest technologies and would provide a framework to update the curriculum as and when the tides shift and the technologies become obsolete.",
      },
      {
        name: "Food Chain and Web Models",
        image: "./assets/themes/Food chain and web models.jpeg",
        description:
          "healthcare and sanitation go hand in hand. numerous diseases are caused simply by the lack of adequate sanitation facilities. expansion of both healthcare providers and safe sanitation is required. rural areas do not hold much to attract private healthcare providers, nor do they have safe and well-kept sanitation facilities. Models which can help both cases are the need of the hour.",
      },
    ],
    "C9-12": [
      {
        name: "Artifical Intelligence and its Application",
        image: "./assets/themes/Artificial intelligence.jpeg",
        description:
          "Security is a concern for everyone. Security systems that are not invasive and which protect both your physical belongings and your digital footprint are a requirement. Devising systems that manage the security of your belongings and your safety would be a much-needed innovation in this sphere.",
      },
      {
        name: "Sustainable Technologies for Future Cities",
        image: "./assets/themes/Sustainable development.jpeg",
        description:
          "Women's Safety is an often discussed problem. To tackle this issue, one must think of solutions that are non-obtrusive, cannot be used against the victim, ensure timely intervention and act as a deterrent to prevent future such actions. If it is an app-based solution, the data collected must also be kept secure so that it cannot be used for nefarious purposes. An ideal solution would tackle all these pitfalls and give an out-of-the-box idea that can be made accessible quickly.",
      },
      {
        name: "Journey of Evolution in Science from Old to New Era",
        image: "./assets/themes/Journey of evolution.jpeg",
        description:
          "Smart Education goes beyond the notion of E-Learning. Smart Education doesn't just mean including courses about technology, it also means giving a framework to quickly and efficiently update the learning materials, methodology, tools, etc. It would also provide ideas to cover the Digital Divide and prevent it from widening further. One must ponder on how to bring all the necessary life skills imparted in a traditional classroom to a future, 'SMART' classroom",
      },
      
    ],
  };

  return (
    <div
      style={{ scrollMargin: "20vmin" }}
      className="w-full flex flex-col items-center font-extrabold space-y-10"
      id="themes"
    >
      <div className="uppercase text-4xl font-extrabold pb-10">Themes</div>

      <div className="w-full flex flex-col sm:flex-row px-10  justify-center items-center sm:justify-between">
        <div className="basis-1/3 flex-col  bg-gradient-to-r from-[#FF8008] to-[#FFC837] inline-block text-transparent bg-clip-text text-center pt-10 ">
          <div className="text-[20px]">Class</div>
          <div className="text-[60px]">3-5</div>
        </div>
        <div className="basis-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-7">
          {themes["C3-5"].map((theme, index) => {
            return (
              <ThemeCard
                color={["#FF8008", "#FFC837"]}
                theme={theme}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row  px-10 justify-center items-center sm:justify-between">
        <div className="basis-1/3 flex-col  bg-gradient-to-r from-[#0052D4] to-[#6FB1FC] inline-block text-transparent bg-clip-text text-center pt-10 ">
          <div className="text-[20px]">Class</div>
          <div className="text-[60px]">6-8</div>
        </div>
        <div className="basis-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7">
          {themes["C5-8"].map((theme, index) => {
            return (
              <ThemeCard1
                color={["#0052D4", "#6FB1FC"]}
                theme={theme}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row px-10  justify-center items-center sm:justify-between">
        <div className="basis-1/3 flex-col  bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] inline-block text-transparent bg-clip-text text-center pt-10 ">
          <div className="text-[20px]">Class</div>
          <div className="text-[60px]">9-12</div>
        </div>
        <div className="basis-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-3">
          {themes["C9-12"].map((theme, index) => {
            return (
              <ThemeCard2
                color={["#4CB8C4", "#3CD3AD"]}
                theme={theme}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
