import React from "react";
import { Button } from "@nextui-org/react";
import Text from "../Text";
import { Link } from "@nextui-org/react";

export default function SnTwo() {
  return (
    <div className="my-36 flex justify-center">
      <div className="flex flex-col justify-center items-center w-4/12">
        <div className="w-72 h-72">
          <img className="rounded-full " src="/images/home/5.webp" alt="" />
        </div>
        <p className="text-center text-neutral-300 py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates officiis doloribus, atque nesciunt ab vero eum natus ex
        </p>
        <Button color="primary" variant="solid">
          <Link href="/sobre-nosotros"  className="text-brown-400">
            <Text>CONOCENOS</Text>
          </Link>
        </Button>
      </div>
    </div>
  );
}
