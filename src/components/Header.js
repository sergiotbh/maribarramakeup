import React from 'react';
import MaribarraLogo from '../images/icon/logo_maribarra_black.svg'
import InstagramLogo from '../images/icon/icon_ig.svg';

const Header = ({offsetY}) => {

  return(
    <nav
      className={`fixed w-full z-10 py-2 transform transition-all duration-500 bg-gradient-to-b from-white to-transparent`}
    >
      <div className="flex md:px-28 justify-center">
        <div
          className="flex flex-col items-center justify-center"
        >
          <MaribarraLogo
            className="w-[150px] md:w-[250px]"
            style={{
              transform: `scale(${offsetY > 100 ? 1 : 1.5 - (0.5/99)*(offsetY-1)}) translateY(${offsetY < 50 ? 50 - offsetY : 0}px)`
            }}
          />
        </div>
        <div
          className="absolute right-0 md:right-10 top-8 md:py-4"
        >
          <div className="flex">
            <InstagramLogo
              className="scale-75 md:scale-100 hover:fill-yellow fill-black mx-4 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;