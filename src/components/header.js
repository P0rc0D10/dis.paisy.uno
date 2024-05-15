import React from 'react';
import '../css/header.css'
import sites from '../data/socials.json'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaReddit, FaSteam, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiHackerone } from 'react-icons/si'

function Header() {
    const [currentSite, setCurrentSite] = React.useState(0);
    const [site, setSite] = React.useState(sites[0]); // is the default value
    const iconMapping = {
        twitter: <FaTwitter />,
        discord: <FaDiscord />,
        github: <FaGithub />,
        instagram: <FaInstagram />,
        reddit: <FaReddit />,
        youtube: <FaYoutube />,
        steam: <FaSteam />,
        hackerone: <SiHackerone />,
        twitch: <FaTwitch />,
        linkedin: <FaLinkedin />,
        email: <HiOutlineMail />
    }
    
    const incrementCurrentSite = () => {
      if (currentSite < sites.length - 1) {
        setCurrentSite(currentSite + 1);
      } else {
        // reset to 1 if reached the end
        setCurrentSite(0);
      }
    };
    
    return (
      <div className="container">
        <h1 className="header"
          onMouseEnter={() => {
            incrementCurrentSite();
            setSite(sites[currentSite]);
          }}>
          <a  target="_blank" rel="noopener noreferrer" style={{color: 'whitesmoke', backgroundColor: 'rgb(13, 12, 14)'}} href={`${site.link}`}><span className="prefix">{site.name_prefix}</span>
            DisPaisy
          <span className="suffix">{site.name_suffix} {((iconMapping[site.site]) ? iconMapping[site.site] : '')}</span></a>
        </h1>
      </div>
    );
}

export default Header
