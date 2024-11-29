import { useState } from 'react';
import { HighlightContainer, HighlightsNav, NavItem } from 'styles/Highlight';
import Navbar from 'components/Navbar';
import Philosophy from 'components/Philosophy';
import Awards from 'components/Awards';
import Publications from 'components/Publications';
import Exhibitions from 'components/Exhibitions';
import Footer from 'components/Footer';

function Highlights() {
  const [clickedOption, setClickedOption] = useState('PHILOSOPHY');

  const handleClick = (option: string) => {
    setClickedOption(option);
  };

  const renderContent = () => {
    switch (clickedOption) {
      case 'PHILOSOPHY':
        return <Philosophy />;
      case 'AWARDS':
        return <Awards />;
      case 'PUBLICATIONS':
        return <Publications />;
      case 'EXHIBITIONS':
        return <Exhibitions />;
      default:
        return <div>Select an option</div>; // Fallback for unexpected values
    }
  };

  return (
    <HighlightContainer>
      <Navbar />
      <HighlightsNav>
        <ul>
          <NavItem
            isActive={clickedOption === 'PHILOSOPHY'}
            onClick={() => handleClick('PHILOSOPHY')}
          >
            PHILOSOPHY
          </NavItem>
          <NavItem
            isActive={clickedOption === 'AWARDS'}
            onClick={() => handleClick('AWARDS')}
          >
            AWARDS
          </NavItem>
          <NavItem
            isActive={clickedOption === 'PUBLICATIONS'}
            onClick={() => handleClick('PUBLICATIONS')}
          >
            PUBLICATIONS
          </NavItem>
          <NavItem
            isActive={clickedOption === 'EXHIBITIONS'}
            onClick={() => handleClick('EXHIBITIONS')}
          >
            EXHIBITIONS
          </NavItem>
        </ul>
      </HighlightsNav>
      {renderContent()}

      <Footer />
    </HighlightContainer>
  );
}

export default Highlights;
