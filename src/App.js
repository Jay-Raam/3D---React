import React from "react";
import Caption from "./components/One";
import Iron from "./components/Four";
import Thor from "./components/Six";
import Challa from "./components/Two";
import Deadpool from "./components/Three";
import Stange from "./components/Five";
// import { isMobile } from "react-device-detect";

const Data = [
  {
    title: "Deadpool",
    describe:
      "The Merc with a Mouth, blending irreverent humor with exceptional combat skills. Known for his breaking-the-fourth-wall antics and unparalleled resilience, Wade Wilson thrives in chaotic battles and offbeat adventures. With a penchant for witty one-liners and a knack for defying the norms, Deadpool proves that even in the darkest moments, laughter is the best weapon. 🎭💥",
    modal: <Deadpool />,
    tag: ["Marvel jesus"],
  },
  {
    title: "Captain America",
    describe:
      "The ultimate symbol of courage, justice, and unyielding patriotism. With his iconic shield and unwavering moral compass, Steve Rogers stands as the beacon of hope and resilience. Whether fighting against tyranny or leading by example, Captain America embodies the spirit of a true hero. 🦸‍♂️✨",
    modal: <Caption />,
    tag: ["CaptainAmerica", " Marvel", "HeroicLegacy"],
  },
  {
    title: "Thor",
    describe:
      "The God of Thunder, wielding Mjölnir with unrivaled might and majestic grace. As the protector of Asgard and defender of the Nine Realms, Thor’s thunderous presence and noble heart inspire awe and respect. From epic battles to cosmic adventures, he stands as a true champion of both power and honor. 🌩️🛡️",
    modal: <Thor />,
    tag: ["Thor", "GodOfThunder", "Marvel", "Avengers"],
  },
  {
    title: "T'Challa",
    describe:
      "The Black Panther, king of Wakanda, and a beacon of strength, wisdom, and leadership. As the guardian of his nation and its advanced technology, T'Challa combines regal authority with unparalleled agility and combat skills. With a heart dedicated to justice and the welfare of his people, he stands as a symbol of hope and resilience in the face of adversity. 🌟🐾",
    modal: <Challa />,
    tag: ["Marvel", "BlackPanther", "KingOfWakanda"],
  },
  {
    title: "Doctor Strange",
    describe:
      "The Master of the Mystic Arts who bends reality and defends against magical threats. With his unparalleled command over the mystical realms and a mind sharpened by both science and sorcery, Stephen Strange navigates the complexities of the universe with precision and courage. From conjuring powerful spells to unlocking hidden dimensions, Doctor Strange proves that the greatest magic lies within the mind. 🌀✨",
    modal: <Stange />,
    tag: ["Marvel", "DoctorStrange", "MysticArts"],
  },
  {
    title: "Iron - Man",
    describe:
      "The genius, billionaire, playboy, philanthropist who redefined what it means to be a superhero. With his cutting-edge armor and unparalleled intellect, Tony Stark takes innovation to new heights, proving that the real power lies in the mind. From the arc reactor to the battlefield, Iron Man shows us that bravery and brilliance go hand in hand. 💥🦾",
    modal: <Iron />,
    tag: ["IronMan", "TechGenius", "Marvel"],
  },
];

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-6 flex-wrap max-w-[1200px] mx-auto my-0">
        {Data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-6 sm:gap-0 md:h-[100vh] max-w-[1200px] w-full lg:flex-row"
          >
            <div className="three-d">{item.modal}</div>
            <div className="text">
              <h1 className="text-white text-3xl mb-3">{item.title}</h1>
              <p className="text-white mb-3">{item.describe}</p>
              <div className="tag">
                {item.tag.map((tag, i) => (
                  <span key={i} className="text-white ml-2">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
