import React from "react";
import Image from "./Image";

export default function ImagesContainer({ children}) {
   return <ul className="flex w-full flex-wrap">{children}</ul>
}
