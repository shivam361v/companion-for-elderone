import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MissionVisionPassion from "./MissionVisionPassion";
import ServiceSection from "./ServiceSection";
import ServiceOne from "./ServiceOne";
import ServiceThree from "./ServiceThree";
import ServiceSecond from "./ServiceSecond";
import ServiceFour from "./ServiceFour";

function WebApp()
{
    return <div>
            <Navbar/>
            <HeroSection/>
            <MissionVisionPassion />
            <ServiceSection />
            <ServiceOne />
            <ServiceSecond />
            <ServiceThree />
            <ServiceFour />
    </div>
}
export default WebApp;