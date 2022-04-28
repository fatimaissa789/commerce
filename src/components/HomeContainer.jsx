import React from "react";
import Livraison from "../image/livraison.png";
import HeroBg from "../image/heroBg.png";

export const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Livraison à Domicile
          </p>
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
            <img
              src={Livraison}
              className="w-full h-full object-contain"
              alt="livraison"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Livraison à Domicile Mom dé
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Dafa Nekh
          </span>
        </p>
        <p
          className="text-base text-textColor text-center md:text-left
      md:w-[80%]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, fugit
          eos ea repudiandae saepe laborum ex nemo corporis tempore
          necessitatibus ab quia. Aut id tempora sint unde et accusantium
          voluptas.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br md:w-auto from-orange-400 to-orange-500 w-full
      px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out
      duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-md"
          alt="hero-bg"
        />
        <div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center  py-4
        gap-4 flex-wrap "
        ></div>
      </div>
    </section>
  );
};
export default HomeContainer;
