import './../assets/style/header.scss';
import {MenuItem} from './MenuItem';
import {SocialLink} from './SocialLink';

import facebookIcon from './../assets/icons/facebook-f.svg';
import instagramIcon from './../assets/icons/instagram.svg';
import twitterIcon from './../assets/icons/twitter.svg';
import clockIcon from './../assets/icons/clock.svg';
import phoneIcon from './../assets/icons/phone-alt.svg';

export function Header() {
  return (
    <header>
      <div id="upper-div">
        <div id="logo">
          <a href="free">
            <h1>Our Company</h1>
            <p id="slogan">Aprenda com quem sabe ensinar</p>
          </a>
        </div>
        
        <div id="contact-info">
          <div id="time-table">
            <span>
              <img src={clockIcon} alt="Clock Icon"></img>
            </span>
            <div className="info">
              <h2 id="weekday">Segunda à Sexta</h2>
            <p id="hour">8:00 AM - 4:00 PM</p>
            </div>
          </div>
  
          <div id="call-us">
            <span>
              <img src={phoneIcon} alt="Phone icon"></img>
            </span>
            <div className="info">
              <h2>Call Us</h2>
              <p>+244 923545632</p>
            </div>
          </div>

          <div id="social-links">
            <nav>
              <ul>
                <li id="fbIcon">
                  <SocialLink name="Facebook" url="https://facebook.com" target="blank" source={facebookIcon} alt="facebook logo"/>
                </li>
                <li>
                  <SocialLink name="Instagram" url="https://instagram.com" target="blank" source={instagramIcon} alt="instagram logo"/>
                </li>
                <li>
                <SocialLink name="Twitter" url="https://twitter.com" target="blank" source={twitterIcon} alt="twitter logo"/>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
      </div>
      <div id="bottom-div">
        <ul>
          <nav>
            <MenuItem name="Home" url="#home" target="_self" />
            <MenuItem name="Cursos" url="#" target="_self" />
            <MenuItem name="Preços" url="#" target="_self" />
            <MenuItem name="Sobre" url="#" target="_self" />
            <MenuItem name="Fale Connosco" url="#contactUs" target="_self" />
            <MenuItem name="Equipa" url="#" target="_self" />
          </nav>
        </ul>
      </div>
    </header>
  );
}