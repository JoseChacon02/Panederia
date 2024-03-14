import React, { useEffect, useState } from "react";
import { Link } from "@nextui-org/react";

export default function HeaderLink({
  children,
  href,
  className,
  menu,
  objects,
}) {
  return (
    <li className={`cursor-pointer ${className}`}>
      <Link
        className="text-xs text-neutral-100 tracking-wide"
        href={href}
        underline="none"
      >
        {children}
      </Link>
      {menu && (
        <ul className="bg-neutral-500">
          {objects.forEach((element) => {
            <li>
              <Link className="text-xs text-neutral-100 tracking-wide">
                {element}
              </Link>
            </li>;
          })}
        </ul>
      )}
    </li>
  );
}
