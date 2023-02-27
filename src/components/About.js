import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
           {/* This is where we put the company name */}
           Humble Hands Painting
            <br className="hidden lg:inline-block" />  {/*more text here*/}
          </h1>
          <p className="mb-8 leading-relaxed">
                {/* this is where we will put all the info about the company */}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
              Get a quote from me now!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-black-400 bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./headshot.jpeg"
            TODO: need to have a headshot from delawn here for the webiste
          /> */}
        </div>
      </div>
    </section>
  );
}