import React from "react";
import Image from "./Image";

export default function ImagesContainer({imgs, href}) {
  console.log(`/images${href}scroll/1.webp`)
  return (
    imgs == 1 ? 
    <ul className="flex w-full">
        <Image src={`/images${href}/scroll/1.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/2.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/3.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/4.webp`} alt="Gelatinas" />
    </ul>
    :
    <div>
      <ul className="flex w-full">
        <Image src={`/images${href}/scroll/1.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/2.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/3.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/4.webp`} alt="Gelatinas" />
      </ul>
      <ul className="flex w-full">
        <Image src={`/images${href}/scroll/5.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/6.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/7.webp`} alt="Gelatinas" />
        <Image src={`/images${href}/scroll/8.webp`} alt="Gelatinas" />
      </ul>
    </div>
  );
}
