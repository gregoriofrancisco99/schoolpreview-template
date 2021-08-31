import facebookIcon from './../assets/icons/facebook-f.svg';
import instagramIcon from './../assets/icons/instagram.svg';
import twitterIcon from './../assets/icons/twitter.svg';
import phoneIcon from './../assets/icons/phone-alt.svg';
import linkedInIcon from './../assets/icons/linkedin-in.svg';
import WhatsappIcon from './../assets/icons/whatsapp.svg';
import mapIcon from './../assets/icons/map-marker-alt.svg';
import envelopeIcon from './../assets/icons/envelope.svg';

import './../assets/style/contactUs.css';

export function ContactUs() {
  return (
    <div>
      <section id="contactUs">
        <div id="container">
          <div id="contactInfo">
            <div>
              <h2>Contactos</h2>
              <ul id="info">
                <li>
                  <span>
                    <img src={mapIcon} alt="Map Marker" />
                  </span>
                  <span>Bela Vista <br />
                    Lobito, Benguela <br />
                    Angola
                  </span>
                </li>
                <li>
                  <span>
                    <img src={envelopeIcon} alt="Envelope Icon" />
                  </span>
                  <span >Lorem@Ipsum.com</span>
                </li>
                <li>
                  <span>
                    <img src={phoneIcon} alt="Phone Icon" />
                  </span>
                  <span>+244 923545632</span>
                </li>
              </ul>
            </div>
            <ul id="sci">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img id="fb" src={facebookIcon} alt="Facebook Icon" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img src={instagramIcon} alt="Instagram Icon" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src={twitterIcon} alt="Twitter Icon" />
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                  <img src={WhatsappIcon} alt="Whatsapp Icon" />
                </a>
              </li>
            </ul>
          </div>

          <div id="contactForm">
            <h2>Fale Connosco</h2>

            <form action="">
              <div id="formBox">
                <div className="inputBox w50">
                  <input type="text" required />
                  <label>Nome</label>
                </div>
                <div className="inputBox w50">
                  <input type="text" required />
                  <label>Sobrenome</label>
                </div>
                <div className="inputBox w50">
                  <input type="email" required />
                  <label>Email</label>
                </div>
                <div className="inputBox w50">
                  <input type="phone" required />
                  <label>Número de telfone</label>
                </div>
                <div className="inputBox w100">
                  <textarea required></textarea>
                  <label>Em quê que está a pensar...?</label>
                </div>
                <div className="inputBox w100">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}