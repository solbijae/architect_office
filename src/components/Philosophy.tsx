import { useState, useEffect } from 'react';
import { PhilosophyContainer, LanguageToggle } from 'styles/Philosophy';

function Philosophy() {
  const [isChecked, setIsChecked] = useState('ENG');

  const handleToggle = () => {
    setIsChecked((prev) => (prev === 'ENG' ? 'KOR' : 'ENG'));
  };

  return (
    <PhilosophyContainer>
      <LanguageToggle>
        <input type="checkbox" id="chk1" onClick={handleToggle} />
        <label htmlFor="chk1"></label>
      </LanguageToggle>
      
      {isChecked === 'ENG' &&
        <>
          <p>
            <strong>Architecture is to Design Relationship</strong>
          </p>
          <p>
            <strong>
              We seek to create harmony among people and with nature through new
              architectural visions
            </strong>
          </p>
          <p>
            <strong>ARCHITECTURE IMPROVING RELATION</strong>
          </p>
          <p>
            When I was an architecture school student, I wanted to become someone
            who would think differently from others. People tend to attribute a
            certain ‘architectural philosophy’ to successful architects, but I have
            always found the practice of self-praise uncomfortable.
          </p>
          <p>
            So while my classmates referred to their school projects as their
            ‘artwork’, I always called them ‘homework’. To be able to think
            differently from others, one must first develop one’s own way of looking
            at things. I avoided reading books written by other architects because I
            did not want to end up as an imitator. Instead, I turned to books that
            influenced these architects.
          </p>
          <br />
          <p>
            These books were in the fields of modern physics, philosophy,
            psychology, and Christian theology. I was not able to gather much from
            the abstruse philosophy texts; instead, I was drawn more often toward
            works in modern physics.
          </p>
          <p>
            Among those books, Fritjof Capra’s The Tao of Physics: An Exploration of
            the Parallels between Modern Physics and Eastern Mysticism had a deep
            impact on me. When I was a high school student, philosophy and physics
            were taught in separate classes as completely different subjects.
          </p>
          <p>
            However, Capra’s book showed me that philosophy and the sciences –
            regardless of era and location – have always been mutually aligned,
            except in their explanatory methodology. This insight that the same
            human genius can be expressed differently according to the field
            enlightened me in two ways.{' '}
          </p>
          <p>
            First, I realised that it is possible to study holistically across
            disciplines, and, second, I realised that it is also possible to apply
            this interdisciplinary approach via architecture. This gave me the
            courage to refine the various things that I picked up in college into
            architectural expressions.
          </p>
          <br />
          <p>
            As I was preparing for graduate school after military service,
            ‘cyberspace’ was featured as the cover page for TIME magazine sometime
            in the mid-1990s. At that time, I wondered why one would call internet
            homepages – which were mostly text-based back then – displayed on
            computer screens, ‘spaces’.
          </p>
          <br />
          <p>
            Due to its slower speed in those early years, the internet was mostly
            filled with scholarly texts with occasional red-tinted hyperlinks for
            moving between pages. As I continued to wonder about the term ‘space’, I
            eventually concluded that ‘space is a product of consciousness created
            with data processed by the human brain.’
          </p>
          <p>
            From then on, I conceived space as information. I realised that ‘space
            is not an absolute physical quantity, but a unity of memory.’ As I began
            to see space as information, I could understand and read offline and
            online spaces. However, this was not yet enough for me to do proper
            architectural design.
          </p>
          <br />
          <p>
            After many years, I concluded that architecture is about using space to
            ‘adjust relationships’. Architectural elements such as walls, windows,
            roofs, doors, and staircases adjust relationships between people. A wall
            separates people if it stands in between them, but a window creates a
            visual connection. A door on a wall introduces a traversable physical
            relationship.{' '}
          </p>
          <p>
            Staircases connect spaces divided by height. I realised that
            architectural design is about orchestrating relationships using
            architectural elements. Today, I see architectural design as analysing
            and deciphering the world as data and adjusting the observed
            relationships through architectural elements. The aim of my architecture
            is to realise ‘restoration of relationships’ under the premise that a
            good architecture is a ‘harmonising architecture’.{' '}
          </p>
          <br />
          <p>
            There are two types of relationships: the relationship between people,
            and the relationship between people and nature. A healthy relationship
            is one that maintains an ‘appropriate distance’. No matter how much one
            likes nature, one cannot sleep out in the damp outdoors.{' '}
          </p>
          <p>
            But one can enjoy nature through the window even while staying indoors,
            separated from nature. Or one could engage with nature more actively by
            relaxing on a chair by the terrace. While we build walls to protect each
            family member’s privacy, we also build doors for interpersonal
            interactions and windows for engagements with nature outdoors.{' '}
          </p>
          <br />
          <p>
            We can also add a window facing the hall for visual communication
            between family members. If one wants to be left alone, one can always
            shut the window and close the curtains. I understand space by dividing
            it into three types of information: ‘void, symbol, and human activity’.
          </p>
          <p>
            And I understand three different kinds of relationships: the physical,
            visual, and psychological relationships. Ultimately, architectural
            design for me is akin to putting down ‘information’ as ‘words’ belonging
            to a ‘sentence structure’ that I call ‘relationship’.
          </p>
          <p>
            The theme and purpose of the essay is to ‘make the world more
            harmonious’.{' '}
          </p>
          <br />
          <p>
            Unlike painters, architects can only express their ideas if they have a
            client. The site given to the architect is like the white canvas for the
            painter, and the given programme is the thing that needs to be drawn. I
            begin my work by analysing a given site’s information to look for
            productive energies.
          </p>
          <p>
            A nice park landscape in front of the site would be a good energy that
            can be used. There are bad energies as well: loud surrounding noise is a
            negative energy that must be resolved with walls. Then I look for the
            most optimal way to simplify and adjust the given programmes in terms of
            their functions.
          </p>
          <br />
          <p>
            This is because the simplest design is the most economic answer, and the
            most economic answer is the most eco-friendly. For this purpose,
            unnecessary ornaments are avoided, and curves are minimised. Colours are
            minimally used as well. Too much colour is like unnecessary decorations
            that distract the user’s thoughts. Hence, I tend to stick with whites in
            my designs.
          </p>
          <p>
            When needed, I sometimes use bricks or locally sourced rocks to design
            architecture that blends into its surroundings. An architecture that
            blends into its surroundings is, in my view, the best architecture.{' '}
          </p>
          <br />
          <p>
            In Korean, the word ‘Architecture (建築)’ is formed of two characters
            that mean ‘establish (建)’ and ‘pile up (築)’, respectively. This shows
            that architecture is about establishing or piling up something.
          </p>
          <p>
            When we look at the hanok as an example, a rock is first piled up to
            make the embankment, then pillars are established on the embankment, and
            roof tiles are piled up again. As the word itself suggests, architecture
            is indeed about establishing and stacking.
          </p>
          <br />
          <p>
            However, such an explanation only touches the surface. While
            architecture appears like a series of tangible physical activities such
            as establishing and piling, what we actually build through these
            activities is an intangible ‘empty space’.
          </p>
          <p>
            The reason why we build empty spaces is to allow people to go in and use
            them. Hence, the ultimate aim of architecture is making empty spaces.
            But it also must not end here. Architecture is often shared by multiple
            users in complex ways.{' '}
          </p>
          <br />
          <p>
            Ever since human beings came to live together in a city, architecture
            became a task of adjusting and composing complex human relationships.{' '}
          </p>
          <p>
            Architecture is fundamentally a ‘humanistic’ activity that is
            inseparable from humanity.{' '}
          </p>
          <br />
          <p>
            We have a slogan on our website that says ‘Architecture is to Design
            Relationship.
          </p>
          <p>
            We seek to create harmony among people and with nature through new
            architectural visions’. Our works are physical culminations of this
            vision.
          </p>
        </>
      }

      {isChecked === 'KOR' &&
        <>
          <p>
            <strong>건축은 관계를 디자인하는 것</strong>
          </p>
          <p>
            건축을 공부하던 학창시절 나의 소망은 남다른 생각을 하는 사람이 되는
            것이었다.
          </p>
          <p>
            성공한 건축가들에게는 그만의 건축관을 ‘건축 철학’이라고 말하지만 난
            ‘건축 철학’이라는 단어가 좀 오그라드는 느낌이었다. 건축가들이 너무 무게
            잡는 느낌이 싫었다. 그래서 학교에서 건축설계 프로젝트를 할 때 다른
            친구들은 나의 ‘작품’이라고 불렀지만 나는 항상 나의 ‘숙제’라고 불렀다.{' '}
          </p>
          <br />
          <p>
            남다른 생각을 하려면 나만의 시각이 필요하다. 그래서 나는 다른 건축가들이
            쓴 책을 되도록 안 읽으려고 했다. 다른 건축가의 아류가 되고 싶지
            않아서였다. 대신 그 건축가들의 생각에 영향을 주었을 좀 더 근본적인
            책들을 보려고 했다. 나에게 그 책들은 현대물리학, 철학, 심리학, 기독교
            신학책이었다. 철학책들은 읽었지만 대부분 무슨 말인지 이해가 되지 않았고
            나의 관심을 끄는 것들은 주로 현대물리학 책들이었다.
          </p>
          <br />
          <p>
            그 배경에는 프리초프 카프라의 『현대물리학과 동양사상』이라는 책의
            영향이 컸다. 고등학교 시절 철학은 국민윤리 시간에, 물리학은 물상 시간에
            배우는 전혀 다른 학문이었다. 그런데 카프라의 책은 철학과 과학이 같은
            생각을 다르게 설명하는 것뿐이라는 것을 알려주었다. 그것도 시대와 장소를
            뛰어넘어서 말이다.{' '}
          </p>
          <p>
            뛰어난 인간의 생각이 다른 분야에서 다르게 표현될 뿐이라는 사실은 내게 두
            가지 깨달음을 주었다. 하나는 분야를 뛰어넘어서 통섭할 수 있다는 것이고,
            다른 하나는 건축을 통해서도 그러한 깨달음을 표현할 수 있을 것이라는
            생각이다. 덕분에 자신감을 가지고 대학교 시절 배운 여러 지식들을 건축으로
            녹여 디자인을 표현해보려고 했다.{' '}
          </p>
          <br />
          <p>
            군복무를 마치고 대학원을 준비하던 1990년대 초 주간지 「타임」의 표지를
            ‘사이버 공간’이 장식했다. 나는 당시 컴퓨터 모니터에 있는 텍스트뿐인
            인터넷 홈페이지들을 보고 왜 ‘공간’이라 부르는지 의문이 들었다. 당시
            인터넷은 너무 느려서 학자들의 텍스트로 된 논문만 주로 올라가 있었고,
            기껏해야 하이퍼링크가 걸린 빨간 글자를 누르면 다른 페이지로 넘어가는
            수준이었다. 그것을 왜 공간이라 부르는가 생각하면서 ‘공간은 인간의 뇌가
            정보를 처리해서 만들어낸 의식의 결과물’이라는 결론을 얻었다.
          </p>
          <p>
            이제 나에게 공간은 정보였다. 따라서 ‘공간은 절대적인 물리량이 아니라
            기억의 총합’이라고 생각하게 되었다.{' '}
          </p>
          <br />
          <p>
            공간을 정보라고 생각하는 시각을 가지니 오프라인 공간과 온라인 공간을
            이해하고 읽어낼 수 있었다. 하지만 제대로 된 건축디자인을 할 수는 없었다.
            수년의 시간이 흘러서 얻은 결론은 건축은 공간을 통해서 ‘관계를 조율하는
            일’이라는 깨달음이었다.{' '}
          </p>
          <p>
            우리가 만드는 벽, 창문, 지붕, 문, 계단 같은 건축 요소들은 사람들 간의
            관계를 조율한다. 두 사람 사이에 벽이 있으면 두 사람 사이의 관계는
            단절되지만, 창문이 생기면 시각적 연결이 만들어진다. 벽에 문이 생기면 두
            사람이 오갈 수 있는 물리적 관계가 만들어진다. 다른 높이로 나누어진
            공간은 계단이 생기면 연결된다. 이러한 건축 요소를 통한 관계의
            오케스트레이션이 건축디자인이라는 결론을 얻었다.
          </p>
          <br />
          <p>
            이제 나에게 건축디자인은 세상을 정보로 분해해서 해석하고, 거기에 건축
            요소를 통해서 관계를 조율하는 일이었다. 그리고 내가 하는 건축의 목표는
            ‘관계의 회복’을 이루는 것이며, 좋은 건축은 ‘화목하게 하는 건축’이라는
            결론에 다다랐다.{' '}
          </p>
          <br />
          <p>이때 관계는 크게 두 종류가 있다. </p>
          <p>
            하나는 사람과 사람 간의 관계이고, 다른 하나는 사람과 자연과의 관계다.
            좋은 관계는 ‘적당한 거리’를 두는 것이다. 자연이 아무리 좋아도 집 밖에서
            이슬을 맞으면서 잘 수는 없다. 자연과 단절된 집 안에서 쉬어도 창문을 뚫어
            자연을 바라볼 수는 있다. 때로는 테라스를 두어 편하게 의자에 앉아
            적극적으로 자연과 관계를 맺을 수도 있다.
          </p>
          <p>
            집 안에서 가족 구성원들 사이의 프라이버시를 위해 벽을 세우되, 문을
            만들어서 들어갈 수 있게 해주고 창문을 뚫어서 외부 자연과 관계를 맺게
            한다. 이때 거실을 향해서도 창문을 하나 더 뚫어 다른 가족과도 시각적
            관계를 맺게 해준다. 내가 소통을 원하지 않을 때는 창문을 닫고 커튼을
            내리면 된다.{' '}
          </p>
          <br />
          <p>
            이제 나는 공간을 ‘보이드, 상징, 인간 행위’라는 세 가지 정보로 분해해서
            이해한다. 그리고 관계는 ‘물리적, 시각적, 심리적 관계’ 세 가지로 나누어서
            생각한다. 궁극적으로 나에게 건축디자인이란 ‘정보’라는 ‘단어’를
            ‘관계’라는 ‘문장구조’에 넣어서 글을 쓰는 행위다. 그리고 그 글의 주제와
            목적은 ‘세상을 더 화목하게 하는 것’이다.{' '}
          </p>
          <br />
          <p>
            건축가는 화가와는 다르게 건축주가 있어야만 자신의 생각을 표현할 수 있다.
            건축가에게 주어진 대지는 화가에게 주어진 흰 캔버스이고, 주어진
            프로그램은 그려야 할 대상이다. 나는 우선 주어진 대지에 있는 정보를
            분석해서 내가 이용할 수 있는 에너지를 찾는다. 대지 앞에 좋은 공원 경치가
            있다면 그것은 이용해야 하는 좋은 에너지다. 물론 대지에는 나쁜 에너지도
            있다. 시끄러운 소음은 벽으로 가려서 지워야 할 에너지다.
          </p>
          <br />
          <p>
            그리고 주어진 복잡한 프로그램을 기능적으로 잘 조율할 수 있는 가장 단순한
            해결책을 찾으려고 노력한다. 가장 단순한 디자인이 가장 경제적인
            해결책이고, 가장 경제적인 해결책이 곧 가장 친환경적이기 때문이다. 그래서
            불필요한 장식은 없애고 곡선은 최소화하고자 한다. 색상도 최소한으로
            사용하려고 한다. 지나친 색상은 지나친 장식과 같으며, 이는 사용자의
            생각을 불필요하게 방해하는 일이라고 생각하기 때문이다.{' '}
          </p>
          <br />
          <p>
            그런 면에서 가급적 백색을 사용해 디자인하려고 한다. 필요에 따라서는
            벽돌이나 주변의 자연석을 이용해서 대지에 묻혀 사라져 보이는 건축을
            시도하기도 한다. 가장 좋은 건축은 주변의 일부가 되어서 사라지는 것이라고
            생각하기 때문이다.{' '}
          </p>
          <br />
          <p>건축은 한자로 ‘세울 건(建)’에 ‘쌓을 축(築)’을 쓴다.</p>
          <p>
            건축은 무언가를 세우거나 쌓는 일이라는 뜻이다. 실제로 한옥을 보면 돌을
            쌓아서 축대를 만들고 그 위에 기둥을 세우고 그 위에 다시 기와를 쌓는다.
            건축은 단어가 말하는 대로 세우고 쌓는 일이다. 하지만 이러한 설명은
            건축의 피상적인 모습만 보여준다.
          </p>
          <br />
          <p>
            건축은 겉보기에는 무언가를 세우고 쌓는 물리적인 행위로 보이지만 실제로
            우리가 나무 기둥을 세우고 돌을 쌓아서 결국 만들려고 하는 것은 ‘비어있는
            공간’이다.{' '}
          </p>
          <p>
            이러한 비어있는 공간을 만드는 이유는 인간이 그 속에 들어가서 사용하기
            위함이다. 따라서 건축의 최종 목표는 인간을 위한 빈 공간을 만드는 데
            있다.{' '}
          </p>
          <br />
          <p>
            그런데 건축은 거기서 그치지 않는다. 건축은 여러 명의 사람이 복합적으로
            사용하는 경우가 많다. 특히 인류가 도시를 만들고 모여 살기
            시작하면서부터는 건축이라는 행위는 다양한 사람들의 복잡한 관계를
            조율하고 구성하는 일이 되었다. 이렇듯 건축은 인간과 관련된 일이고
            너무나도 당연하게 ‘인문’적일 수밖에 없다.{' '}
          </p>
          <br />
          <p>우리 사무실 웹사이트의 첫 화면에는</p>
          <p>
            {' '}
            “Architecture is to Design Relationship. We seek to create harmony among
            people and with nature through new architectural visions”라는 글귀가
            써있다.
          </p>
          <p>
            우리말로 옮기면, “건축은 관계를 디자인하는 것이다. 우리는 새로운 건축적
            비전을 통해서 사람과 사람, 사람과 자연 사이의 화목을 추구한다”는 뜻이다.
          </p>
          <p>우리 사무실의 작업들은 이러한 정신의 물리적 결정체다.</p>
        </>
      }
    </PhilosophyContainer>
  );
}

export default Philosophy;
