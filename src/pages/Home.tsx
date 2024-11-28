import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // ScrollTrigger 플러그인 임포트
import {
  HomeContainer,
  ImageContainer,
  Image,
  ProjectWrap,
  TitleContainer,
  Title,
} from 'styles/Home';
import Navbar from 'components/Navbar';
import Carousel from 'components/Carousel';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import ScrollDownIcon from 'assets/icons/ScrollDownIcon';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      '.title',
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.title',
          start: 'top 100%',
          end: 'top 30%',
        },
      }
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HomeContainer className="homeContainer">
      <Navbar />
      <ImageContainer showScrollIcon={showScrollIcon} >
        <Image src="/assets/images/home/motto.jpg" alt="motto" />
          <ScrollDownIcon className="scrollDownIcon" />
      </ImageContainer>
      <ProjectWrap>
        <TitleContainer>
          <Title className="title">HYUNJOON YOO</Title>
          <Title className="title">ARCHITECTS</Title>
        </TitleContainer>
        <Carousel />
      </ProjectWrap>
      <Contact />
      <Footer />
    </HomeContainer>
  );
}

export default Home;