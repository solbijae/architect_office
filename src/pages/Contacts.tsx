import { ContactsContainer } from 'styles/Contacts';
import Navbar from 'components/Navbar';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

function Contacts() {
  return (
    <ContactsContainer>
      <Navbar />
      <Contact />
      <Footer />
    </ContactsContainer>
  );
}

export default Contacts;