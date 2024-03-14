import React from "react";
import { MdLocationOn } from "react-icons/md";
import Text from "../components/Text";

export default function Map() {
  return (
    <div className="bg-neutral-500 py-48 w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <MdLocationOn size={56} color="#ffff" />
        <Text className='text-white'>ABRIR UBICACION</Text>
      </div>
    </div>
  );
}
