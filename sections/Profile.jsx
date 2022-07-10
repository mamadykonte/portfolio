import Image from 'next/image';
import React from 'react'
import mamady from "../public/assets/mamadykonte.png";

const Profile = () => {
  return (
    <section className="relative h-[80vh]">
      <div className="circle-container bg-foreground dark:bg-foreground-dark w-1/2 h-1/2">
        <div id="circle">
          <svg
            id="round"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath
                  className="rotrating-text fill-main dark:fill-main-dark"
                  xlinkHref="#circlePath"
                >
                  Développeur Front-End -*- Intégrateur Web -*-
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <div className="round w-4/6 h-4/6 border-2 border-gray-400">
          {/* <Image src={mamady} className="p-20" /> */}
        </div>
      </div>

      <div className="container-info">
        <div className="info">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>
                Mamady Konte<span></span>
              </h1>
            </div>

            <div className="role">
              <div className="block"></div>
              <p>développeur</p>
            </div>
          </div>
        </div>

        <div className="more-projet">
          <a href="#project" className="cta">
            <span>Voir les projects</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile