import {
  ContactWrap,
  MapContainer,
  ContactInfo,
  IconWrap,
} from 'styles/Contact';
import HomeIcon from 'assets/icons/HomeIcon';
import MailIcon from 'assets/icons/MailIcon';
import PhoneIcon from 'assets/icons/PhoneIcon';
import WorkIcon from 'assets/icons/WorkIcon';

function Contact() {
  return (
    <ContactWrap>
      <MapContainer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4481512418074!2d127.03650177715741!3d37.52093182673969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca38a1c116e73%3A0x8c1bc54076b9069e!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kgMTAxLTI!5e0!3m2!1sko!2skr!4v1732175857211!5m2!1sko!2skr"></iframe>
      </MapContainer>
      <ContactInfo>
        <IconWrap>
          <PhoneIcon />
          <p>+82-2-548-8508</p>
        </IconWrap>
        <IconWrap>
          <MailIcon />
          <p>yoo@hyunjoonyoo.com</p>
        </IconWrap>
        <IconWrap>
          <HomeIcon />
          <p>
            <span>101-2, Nonhyeon-dong, Gangnam-gu, Seoul, Korea </span>
            <span>(27, 54-gil, Dosan-daero 0606)</span>
          </p>
        </IconWrap>
        <IconWrap>
          <WorkIcon />
          <p>
            <span>Apply staff/intern position at </span>
            <span>yoo@hyunjoonyoo.com</span>
          </p>
        </IconWrap>
      </ContactInfo>
    </ContactWrap>
  );
}

export default Contact;
