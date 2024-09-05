import React, { useState } from 'react';
import { skillsArray } from '../arrays/skills';
import { useRefContext } from '../contexts';

const Skills: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const { skillRef } = useRefContext()

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="skills" ref={skillRef} className="w-full pt-24 px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5791b5]">Skills</p>
        <h2 className="py-4 font-bold text-3xl sm:text-4xl text-gray-700">What I Can Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsArray.slice(0, 8).map((skill) => (
            <div key={skill.name} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 xl:h-40">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <img alt={skill.name} loading="lazy" width="250" height="250" src={skill.image}></img>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}


          {showMore && skillsArray.slice(8, skillsArray.length).map((skill) => (
            <div key={skill.name} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 xl:h-40">
              <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
                <div className="m-auto">
                  <img alt={skill.name} loading="lazy" width="250" height="250" src={skill.image}></img>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {skillsArray.length > 8 && (
          <div className="mt-8 text-center">
            <button
              onClick={toggleShowMore}
              className="p-3 text-sm rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition hover:scale-105 duration-300 ease-in"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
