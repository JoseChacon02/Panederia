import React from "react";
import Text from "../components/Text";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full h-96 flex flex-col items-center justify-between py-16">
      <div className="flex justify-between w-8/12">
        <div className="flex items-center">
          <MdLocationOn size={56} color="#EB6878"/>
          <div>
            <Text className="text-1xl text-neutral-400">UBICACION</Text>
            <p>C. Principal Urb. Los ceibos</p>
          </div>
        </div>
        <div className="flex items-center">
          <MdOutlineMail size={56} color="#EB6878"/>
          <div>
            <Text className="text-1xl text-neutral-400">EMAIL</Text>
            <p>Los ceibos</p>
          </div>
        </div>
        <div className="flex items-center">
          <MdOutlinePhone size={56} color="#EB6878"/>
          <div>
            <Text className="text-1xl text-neutral-400">LLAMANOS</Text>
            <p>04163710463</p>
          </div>
        </div>
        <div className="flex items-center">
          <MdAccessTime size={56} color="#EB6878"/>
          <div>
            <Text className="text-1xl text-neutral-400">HORARIO</Text>
            <p>Lunes Sabado 7:30 A 20hs <br/>
            Domingo 8:00 A 19hs</p>
          </div>
        </div>
      </div>
      <div className="">
        <p>@ Jose Chacon 2024</p>
      </div>
    </footer>
  );
}
