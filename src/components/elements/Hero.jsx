import { useState } from "react";
import { imageSection1 } from "../../assets";
import Modal from "./Modal";

const Hero = () => {
  const [selected, setSelected] = useState(false);
  return (
    <section className="flex items-center hero">
      <div className="absolute inset-0 z-20 flex flex-col justify-center w-full text-center md:relative md:w-1/2 hero-caption">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          The Room <br />
          You've Dreaming
        </h1>
        <h2 className="px-8 my-6 text-base tracking-wide md:px-0 md:text-lg">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa homey
        </h2>
        <div>
          <a
            href="#browse-the-room"
            className="flex-none inline-block px-8 py-3 mt-4 text-black transition duration-200 bg-pink-200 rounded-full hover:bg-black hover:text-pink-400"
          >
            Explore Now
          </a>
        </div>
      </div>
      <div className="inset-0 w-full md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className="inset-0 z-10 bg-black overlay opacity-35"></div>
          <div className="bottom-0 right-0 overlay md:inset-0">
            <button
              className="z-30 video hero-cta focus:outline-none modal-trigger"
              onClick={() => setSelected(!selected)}
            ></button>
            {selected === true ? (
              <Modal onclick={() => setSelected(!selected)} />
            ) : null}
          </div>
          <img
            src={imageSection1}
            alt="hero 1"
            className="absolute inset-0 object-cover object-center w-full h-full md:relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
