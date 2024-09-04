import React from "react";

interface Achievement {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "150+ completed projects",
    description:
      "With over 150 successful projects under our belt, we have a proven track record of turning ideas into remarkable designs.",
  },
  {
    title: "9 main team members",
    description:
      "Our core team of nine talented individuals is the creative force behind our agency, bringing diverse skills and expertise to every project.",
  },
  {
    title: "300+ creative freelancers",
    description:
      "We collaborate with a vast network of 300+ skilled freelancers, ensuring that every project benefits from a wealth of creative talent.",
  },
  {
    title: "25+ awards & featured",
    description:
      "Our work speaks for itself, earning us recognition with over 25 awards and features in industry publications.",
  },
  {
    title: "10+ years experience",
    description:
      "With a decade of experience, we've honed our craft, delivering exceptional design solutions that stand the test of time.",
  },
  {
    title: "$25B+ revenue",
    description:
      "Our impact is far-reaching, having contributed to the generation of over $25 billion in revenue for our clients.",
  },
];

export const Achievements: React.FC = () => {
  return (
    <section className="py-14 md:py-28 bg-black">
      <div className="px-6 md:px-12">
        <div className="flex flex-col w-full">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-col lg:flex-row flex lg:justify-between items-start py-4 lg:py-14 lg:gap-64 gap-16 border-b border-b-zinc-600 border-opacity-50"
            >
              <h2 className="flex-1 text-left text-5xl font-regular text-white">
                {achievement.title}
              </h2>
              <p className="flex-1 text-base text-white/80">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
