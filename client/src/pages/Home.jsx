import React from "react";
import Navbar from "../layouts/Navbar";
import Title from "../components/Title";
import Footer from "../layouts/Footer";
import SnOne from "../components/home/SnOne";
import SnTwo from "../components/home/SnTwo";
import Map from "../layouts/Map";

export default function Home() {
  return (
    <div className="w-full">
      <header className="bg-homeHead bg-fixed h-screen w-full bg-cover">
        <Navbar className="bg-transparent" />
        <div className="flex items-center h-5/6 px-32 tracking-widest">
          <Title type={"h1"}>
            PANADERIA <br />
            ANTOJITOS CON AMOR
          </Title>
        </div>
      </header>

      {/* Section 1 */}
      <SnOne />
      <SnTwo/>

      {/* Footer */}
      <Map/>
      <Footer />
    </div>
  );
}
