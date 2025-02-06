/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import '../index.css';
import kit3 from '../assets/images/kit3.jpeg';

function Promo() {
  return (
    <section 
      style={{ backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${kit3}) ` }} 
      className="bg-cover bg-center  flex bg-balck"
    >

      <div className="flex flex-col md:flex-row justify-between items-center w-full p-8">
        {/* Text Container */}
        <div className="md:w-1/2">
          <p className="text-[var(--second-color)]">Promo video</p>
          <h4 className="font-bold text-4xl text-white">
            Ensuring a safe experience <br /> from design to installation
          </h4>
          <p className="text-white text-lg mt-3">
            Our team of experts will work with you to create a custom solution that meets your needs and exceeds your expectations.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg">
            <a href="https://youtu.be/byOfs8EyQzY?si=crrADdzlrFQ6ZVc7">More Videos</a>
          </button>
        </div>

        {/* Video Container */}
        <div className="md:w-1/2 flex justify-center">
          <iframe
            width="560"
            height="400"
            src="https://www.youtube.com/embed/aL27fX5kv9U"
            title="kitchen decoration"
            className="rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
    </section>
  );
}

export default Promo;
