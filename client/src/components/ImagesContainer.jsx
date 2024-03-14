import React from "react";
import Image from "./Image";

export default function ImagesContainer({imgs }) {
  return (
    imgs == 1 ? 
    <ul className="flex w-full">
        <Image src="/images/home/1.webp" alt="Gelatinas" />
        <Image src="/images/home/2.webp" alt="Gelatinas" />
        <Image src="/images/home/3.webp" alt="Gelatinas" />
        <Image src="/images/home/4.webp" alt="Gelatinas" />
    </ul>
    :
    <div>
      <ul className="flex w-full">
        <Image src="/images/home/1.webp" alt="Gelatinas" />
        <Image src="/images/home/2.webp" alt="Gelatinas" />
        <Image src="/images/home/3.webp" alt="Gelatinas" />
        <Image src="/images/home/4.webp" alt="Gelatinas" />
      </ul>
      <ul className="flex w-full">
        <Image src="/images/home/5.webp" alt="Gelatinas" />
        <Image src="/images/home/6.webp" alt="Gelatinas" />
        <Image src="/images/home/7.webp" alt="Gelatinas" />
        <Image src="/images/home/8.webp" alt="Gelatinas" />
      </ul>
    </div>
  );
}
