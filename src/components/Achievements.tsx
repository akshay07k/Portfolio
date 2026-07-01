import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { achievementsArray, education, Achievement } from '../arrays/achievements';

const iconMap: Record<Achievement['icon'], React.ReactNode> = {
  EmojiEvents: <EmojiEventsIcon style={{ fontSize: 32 }} />,
  Code: <CodeIcon style={{ fontSize: 32 }} />,
  WorkspacePremium: <WorkspacePremiumIcon style={{ fontSize: 32 }} />,
};

const Achievements: React.FC = () => {
  return (
    <div id="achievements" className="w-full pt-24 px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5791b5]">
          Education &amp; Achievements
        </p>
        <h2 className="py-4 text-3xl sm:text-4xl font-bold m-0 text-gray-800">
          Milestones
        </h2>

        {/* (A) Education card */}
        <div className="mt-4 shadow-xl shadow-gray-400 rounded-xl p-6 hover:scale-105 ease-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="bg-gradient-to-r from-[#306279] to-[#5791b5] text-white rounded-xl p-4 flex items-center justify-center w-fit">
              <SchoolIcon style={{ fontSize: 36 }} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                {education.institution}
              </h3>
              <p className="text-gray-700 font-medium">{education.degree}</p>
              <p className="text-gray-600">{education.duration}</p>
            </div>
            <div className="sm:text-right">
              <span className="inline-block font-bold text-[#f15627] text-lg">
                {education.score}
              </span>
            </div>
          </div>
        </div>

        {/* (B) Achievements grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {achievementsArray.map((achievement) => (
            <div
              key={achievement.title}
              className="shadow-xl shadow-gray-400 rounded-xl p-6 hover:scale-105 ease-in duration-300 flex flex-col"
            >
              <div className="bg-gradient-to-r from-[#306279] to-[#5791b5] text-white rounded-xl p-3 flex items-center justify-center w-fit mb-4">
                {iconMap[achievement.icon]}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
