import { useState } from 'react';
import Navbar from 'components/Navbar';
import {
  ProfileContainer,
  ProfileNav,
  ProfileWrap,
  NavItem,
  ProfileInfoWrap,
  TeamProfileWrap,
} from 'styles/Profile';
import Footer from 'components/Footer';

function Profile() {
  const [clickedOption, setClickedOption] = useState('HYUNJOON YOO');

  const handleClick = (option: string) => {
    setClickedOption(option);
  };

  return (
    <ProfileContainer>
      <Navbar />
      <ProfileNav>
        <ul>
          <NavItem
            isActive={clickedOption === 'HYUNJOON YOO'}
            onClick={() => handleClick('HYUNJOON YOO')}
          >
            HYUNJOON YOO
          </NavItem>
          <NavItem
            isActive={clickedOption === 'TEAM'}
            onClick={() => handleClick('TEAM')}
          >
            TEAM
          </NavItem>
        </ul>
      </ProfileNav>
      {clickedOption === 'HYUNJOON YOO' && (
        <ProfileWrap>
          <img
            src="/assets/images/profile/hyunjoonyoo.jpg"
            alt="Hyunjoon Yoo profile"
          />
          <ProfileInfoWrap>
            <div>
              <h3>DESCRIPTION</h3>
              <ul>
                <li>Principal, Hyunjoon Yoo Architect</li>
                <li>Professor, Hongik University</li>
                <li>CEO, Space Consulting Group</li>
              </ul>
            </div>
            <div>
              <h3>CERTIFICATE</h3>
              <ul>
                <li>AIA, NCARB</li>
              </ul>
            </div>
            <div>
              <h3>EDUCATION</h3>
              <ul>
                <li>
                  Harvard University, Master of Architecture with Distinction
                </li>
                <li>MIT, Master of Architecture</li>
                <li>Yonsei University, Bachelor of Science in Architecture</li>
              </ul>
            </div>
            <div>
              <h3>EXPERIENCE</h3>
              <ul>
                <li>Richard Meier & Partners Architecture, New York, USA</li>
                <li>
                  MIT Architecture Representation & Computation Lab MIT Visiting
                  Scholar
                </li>
              </ul>
            </div>
            <div>
              <h3>BOOKS</h3>
              <ul>
                <li>Future of Space - Japanese edition | Cuon | 2023</li>
                <li>
                  Architectural Trip to Humanity | Eulyoo Publishing | 2023
                </li>
                <li>Future of Space | Eulyoo Publishing | 2021</li>
                <li>Space Created by Space | Eulyoo Publishing | 2020</li>
                <li>Where do you want to live - Chinese edition | 2019</li>
                <li>What is your constellation | Wiseberry | 2019</li>
                <li>Where do you want to live | Eulyoo Publishing | 2015</li>
                <li>What cities live by | Eulyoo Publishing | 2015</li>
                <li>
                  Modernism: A Hybrid of Eastern and Western Culture -
                  Chinese/English edition | 2012
                </li>
                <li>52 9 12 | Meeseum | 2011</li>
                <li>The Flow of Contemporary Architecture | Meeseum | 2009</li>
                <li>
                  Modernism: Cultural Hybrid of East and West | Meeseum | 2008
                </li>
              </ul>
            </div>
            <div>
              <h3>COLUMN</h3>
              <ul>
                <li>한겨례S | 유현준의 아파트의 미래</li>
                <li>중앙SUNDAY | 도시와 건축</li>
                <li>조선일보 | 유현준의 도시 이야기</li>
                <li>매일경제 | 듀현주의 I ♥ 건축</li>
              </ul>
            </div>
            <div>
              <h3>TV</h3>
              <ul>
                <li>2023 tvN 알쓸별잡</li>
                <li>2021 tvN 월간 커넥트</li>
                <li>2021 SBS 나의 판타집</li>
                <li>2021 KBS1 도시와 인간 4부작</li>
                <li>2020 tvN D ENT 밀어서 무장해제</li>
                <li>2020 EBS 클래스e 공간의 역사</li>
                <li>2019 SBS 스페셜 571회 - 572회</li>
                <li>2019 JTBC 양식의 양식</li>
                <li>2019 JTBC 차이나는 클라스 130회</li>
                <li>2019 tvN 어쩌다 어른 172회</li>
                <li>2017 tvN 알쓸신잡2</li>
                <li>2017 tvN 20세기 소년탐구생활 1화 - 2화</li>
                <li>2017 tvN 어쩌다 어른 95회</li>
                <li>2016 KBS1 명견만리 35회</li>
                <li>2016 skyTV 건축학개론</li>
              </ul>
            </div>
          </ProfileInfoWrap>
        </ProfileWrap>
      )}
      {clickedOption === 'TEAM' && (
        <TeamProfileWrap>
          <img src="/assets/images/profile/team.jpg" alt="team profile" />
        </TeamProfileWrap>
      )}
      <Footer />
    </ProfileContainer>
  );
}

export default Profile;
