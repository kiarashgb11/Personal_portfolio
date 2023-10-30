import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/kiarashalirezaei/" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/kiarashgb11" target="_blank"> <AiOutlineGithub /> </a>    

    </div>
  )
}

export default HeaderSocials