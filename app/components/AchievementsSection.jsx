import React from 'react';

const achievementsList = [
  {
    metric: "Projects",
    value: "20+",
  },
  {
    metric: "Users",
    value: "10.000+",
  },
  {
    metric: "Awards",
    value: "5+",
  },
  {
    metric: "Years",
    value: "2+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row justify-between items-center flex-wrap">
        {achievementsList.map((achievement, index) => {
          return (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center mx-4 my-2 w-1/4 sm:w-auto"
              style={{ wordBreak: 'break-word' }}
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;