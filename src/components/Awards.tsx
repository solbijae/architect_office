import { AwardsContainer, AwardsWrap, AwardsInfo, InfoData } from 'styles/Awards';
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
                <InfoData key={`${award.year}-${datum.id}`}>
                  <p>{datum.title}</p>
                  <p>{datum.organizer}</p>
                  <p>{datum.award}</p>
                </InfoData>
              ))}
            </AwardsInfo>
          </AwardsWrap>
        ))}
    </AwardsContainer>
  );
}

export default Awards;
