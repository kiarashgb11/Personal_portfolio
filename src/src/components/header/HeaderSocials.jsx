import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kiarashalirezaei/" target="_blank">
        <BsLinkedin style={{ fontSize: '2rem' }} />
      </a>
      <a href="https://github.com/kiarashgb11" target="_blank">
        <AiOutlineGithub style={{ fontSize: '2rem' }} />
      </a>
    </div>
  );
};

export default HeaderSocials;
