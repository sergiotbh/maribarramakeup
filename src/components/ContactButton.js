import React from 'react';
import { Paragraph } from './TextComponents';

const ContactButton = ({title, icon, onPress}) => {
  return(
    <button
      onClick={onPress}
      className={`border-yellow border-2 rounded-xl w-full h-full py-8 flex flex-col items-center shadow-lg`}
    >
      {icon}
      <Paragraph customStyle="max-w-[100px] mt-4">{title}</Paragraph>
    </button>
  )
}

export default ContactButton;