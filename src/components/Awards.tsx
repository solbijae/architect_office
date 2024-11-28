import { AwardsContainer, AwardsWrap, AwardsInfo } from 'styles/Awards';
import useFetchData from 'hooks/useFetchData';
import { Award } from 'types/award';

function Awards() {
  const { data: awards, error } = useFetchData<Award[]>(
    '/assets/data/awards.json',
  );

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <AwardsContainer>
      {awards &&
        awards.map((award) => (
          <AwardsWrap key={award.year}>
            <h3>{award.year}</h3>
            <AwardsInfo>
              {award.data.map((datum) => (
                <div key={`${award.year}-${datum.id}`}>
                  <div>
                    <p>{datum.title}</p>
                  </div>
                  <div>
                    <p>{datum.award}</p>
                  </div>
                  <div>
                    <p>{datum.organizer}</p>
                  </div>
                </div>
              ))}
            </AwardsInfo>
          </AwardsWrap>
        ))}
    </AwardsContainer>
  );
}

export default Awards;
