import React from "react";
import Nav from "../layouts/Nav";
import Title from "../components/Title";
import Footer from "../layouts/Footer";
import SnOne from "../components/home/SnOne";
import SnTwo from "../components/home/SnTwo";
import Map from "../layouts/Map";

export default function Home() {
  return (
    <div className="w-full">
      <Nav className="bg-transparent absolute transition-all" />
      <div className="bg-homeHead bg-fixed h-screen w-full bg-cover ">
        <div className="flex items-center justify-center h-full px-32 tracking-widest">
          <Title type={"h1"} className='text-white text-center'>
            PANADERIA <br />
            ANTOJITOS CON AMOR
          </Title>
        </div>
      </div>

      {/* Section 1 */}
      <SnOne />
      <SnTwo />

      {/* Footer */}
      <Map />
      <Footer />
    </div>
  );
}
