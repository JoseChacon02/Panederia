import React from "react";
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";
import Title from "../components/Title";
import Text from "../components/Text";
import ImagesContainer from "../components/ImagesContainer";
import { useLocation } from "react-router-dom";
import Map from "../layouts/Map";

export default function AboutUs() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <Nav />
      <div className="flex">
        <div className="w-6/12 h-[30rem]">
          <img
            src="/images/sobre-nosotros/1.webp"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-6/12 flex justify-center flex-col px-24">
          <Title type="h2" className="my-8">
            NUESTRA PANADERIA
          </Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            repellendus adipisci nobis dolor excepturi voluptates, nihil
            deleniti magni nisi modi dolorum officiis cumque vero corporis
            tenetur veritatis non sequi. Aliquam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Assumenda eveniet impedit, quas eos ea
            ab temporibus autem officiis voluptate iste. Maiores fuga debitis
            quo delectus quidem omnis totam suscipit deserunt.
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="w-6/12 flex justify-center flex-col px-24">
          <Title type="h2" className="my-8">
            NUESTRA PANADERIA
          </Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            repellendus adipisci nobis dolor excepturi voluptates, nihil
            deleniti magni nisi modi dolorum officiis cumque vero corporis
            tenetur veritatis non sequi. Aliquam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Assumenda eveniet impedit, quas eos ea
            ab temporibus autem officiis voluptate iste. Maiores fuga debitis
            quo delectus quidem omnis totam suscipit deserunt.
          </p>
        </div>
        <div className="w-6/12 h-[30rem]">
          <img
            src="/images/sobre-nosotros/2.webp"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/12 h-[30rem]">
          <img
            src="/images/sobre-nosotros/3.webp"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-6/12 flex justify-center flex-col px-24">
          <Title type="h2" className="my-8">
            NUESTRA PANADERIA
          </Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            repellendus adipisci nobis dolor excepturi voluptates, nihil
            deleniti magni nisi modi dolorum officiis cumque vero corporis
            tenetur veritatis non sequi. Aliquam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Assumenda eveniet impedit, quas eos ea
            ab temporibus autem officiis voluptate iste. Maiores fuga debitis
            quo delectus quidem omnis totam suscipit deserunt.
          </p>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
}
