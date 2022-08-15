import React from 'react';
import MaribarraLogo from '../images/icon/logo_maribarra_black.svg'
import Wave from '../images/wave.svg'
import { Paragraph, SectionTitle, SmallSubtitle } from './TextComponents';

const Footer = () => {
  return(
    <footer className="relative bg-white grid grid-cols-2 mb-11">
      <img
        src={Wave}
        className='absolute bottom-[60%] z-0'   
      />
      <div className="flex flex-col items-center z-10">
        <MaribarraLogo
          className="w-[150px] md:w-[250px]"
        />
        <SmallSubtitle customStyle="text-sm">hola@maribarramakeup.com</SmallSubtitle>
      </div>
      <div className='z-10 flex justify-center items-end'>
        <Paragraph><span className="font-bold">{'</>'}</span> by <a className="font-bold" href='https://sergiotbh.dev'>sergiotbh.dev</a></Paragraph>
      </div>
    </footer>
  )
}

export default Footer;