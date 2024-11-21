import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger 플러그인 임포트
import { 
  HomeContainer,
  Section,
  TitleContainer,
  Title
} from "styles/Home";
import Navbar from "components/Navbar";

// gsap 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // ScrollTrigger로 텍스트 애니메이션
    gsap.fromTo(
      ".title", // 타겟 요소
      {
        y: 500, 
        opacity: 0, 
        fontSize: "5rem" // 시작 크기
      },
      {
        y: 50, 
        opacity: 1, 
        fontSize: "3rem", // 종료 크기
        duration: 3,
        scrollTrigger: {
          trigger: ".title", // 애니메이션을 시작할 요소
          start: "top 80%", // 스크롤 위치 (80% 윈도우 높이에 도달하면 애니메이션 시작)
          end: "top 30%", // 끝 위치 (30% 윈도우 높이에 도달하면 애니메이션 끝)
          scrub: true, // 스크롤에 따라 애니메이션을 조정
        }
      }
    );
  }, []);

  return (
    <HomeContainer className="homeContainer">
      <Navbar />
      <Section>
        <img src="/assets/images/motto.jpg" alt="motto" />
      </Section>
      <Section>
        <TitleContainer>
          <Title className="title">HYUNJOON YOO</Title>
          <Title className="title">ARCHITECTS</Title>
        </TitleContainer>
      </Section>
      <Section>
        
      </Section>
      {/* project carousel */}
      {/* contact */}
    </HomeContainer>
  );
}

export default Home;
