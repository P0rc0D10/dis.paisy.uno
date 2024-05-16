import './App.css';
import {WorkList,ProjectsList,SocialsList} from './components/workList.js'
import Header from './components/header'
// import Tagline from './components/taglines'
// import Contact from './components/contact';

import { FaGithub, FaCloudflare  } from 'react-icons/fa'
import DiscordProfile from "./components/discord_profiles/DiscordProfile.tsx";

const discordUser = {
  "id": "921732185562685492",
  "username": "malfunzionato",
  "global_name": "DisPaisy",
  "avatar": "a5fac2ecb783496c57633281a8bd1850",
  "banner": "9ed1e5803a0e7b293607f4cd123830e1",
  "discriminator": "0",
  "public_flags": 4588096,
  "flags": 4588128,
  "theme_colors": [13594997, 10193583],
  "bio": "lol",
  "locale": "en-GB",
  "mfa_enabled": true,
  "premium_type": 2,
  "avatar_decoration": 1212569433839636530,
  "verified": true,
  "theme": "dark",
}

function App() {
  return (
    <div className="App">
      <img style={{width: '100vw'}} alt={'A white and black background seperated horizontally by a wavy line, white on top black on bottom. On the white section is the text: "Hi, I\'m".'} src={`${process.env.PUBLIC_URL}/wave.svg`} />
      <Header />
      <div className='textcontainer'>
        <div>
          <p style={{ color: 'white' }}>{''}</p>
        </div>
      </div>
      <div className='embedcontainer'>
        <div>
          <h1 style={{ color: 'white' }}>Discord Profile</h1>
          <div style={{ display: 'flex', 'justify-content': 'center' }}>
            <DiscordProfile discordUser={discordUser}/>
        </div>
        <div>
          <h1 style={{ color: 'white' }}>Contact Information</h1>
          <div style={{ display: 'flex', 'justify-content': 'center' }}>
            <SocialsList />
          </div>
        </div>
      </div>
      <div className='footercontainer'>
        <div>
          <a target={'_blank'} href={'https://github.com/panley01/site'} style={{ color: 'white' }}><h1 style={{ color: 'white' }}>{<FaGithub />}{'  This website is OSS!'}</h1></a>
          <a target={'_blank'} href={'https://pages.cloudflare.com/'} style={{ color: 'white' }}><h2 style={{ color: 'white' }}>{<FaCloudflare />}{'  And hosted using Cloudflare Pages'}</h2></a>
        </div>
      </div>
    </div>
  );
}

export default App;
