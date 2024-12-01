import { Navbar } from "./Components/Navbar";
import { HeroSection } from "./Components/LandingPage.jsx/HeroSection";
import { Section1 } from "./Components/LandingPage.jsx/Section1";
import { Section2 } from "./Components/LandingPage.jsx/Section2";
import { Section3 } from "./Components/LandingPage.jsx/Section3";
import { Section4 } from "./Components/LandingPage.jsx/Section4";
import { Section5 } from "./Components/LandingPage.jsx/Section5";
import { Timeline } from "./Components/Timeline";
import { JudingCriteria } from "./Components/JudingCriteria";
import { Footer } from "./Components/Footer";
import { ThemeBetter } from "./Components/Themes/ThemeBetter";
import { Sponsors } from "./Components/Sponsors";

// import { Sponsors } from './Components/Sponsors';
import {StudentList} from './Components/StudentList';

// import { Themes } from './Components/Themes/Themes';
// import { IdeaSubmissionForm } from './Components/LandingPage.jsx/IdeaSubmissionForm';

function App() {
  return (
    <div className="bg-[#D9D9D9] bg-opacity-5">
        <Navbar />
        
      {/* <StudentList/> */}
      <HeroSection />
      <div className="lg:h-[10px]"></div>
      {/* <Sponsors /> */}
      <div className="h-[50px]"></div>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="lg:h-[175px]"></div>
      <Section4 />
      <div className="lg:h-[75px]"></div>
      <Section5 />
      <div className="h-[75px]"></div>
      <Timeline />
      <div className="lg:h-[75px]"></div>
      {/* <Themes /> */}
      <ThemeBetter />
      <div className="h-[75px]"></div>
      <JudingCriteria />
      <div className="h-[125px]"></div>
      
      {/* <IdeaSubmissionForm /> */}
      <div className="h-[100px]"></div>
      <Footer />
      <div className="h-[25px]"></div>
    </div>
  );
}

export default App;
