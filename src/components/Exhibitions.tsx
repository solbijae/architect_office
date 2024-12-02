import { ExhibitionsContainer, ExhibitionsWrap, ExhibitionsInfo, InfoData } from 'styles/Exhibitions';
import useFetchData from 'hooks/useFetchData';
import { Exhibition } from 'types/exhibitions';

function Exhibitions() {
  const { data: exhibitions, error } = useFetchData<Exhibition[]>(
    '/assets/data/exhibitions.json',
  );

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <ExhibitionsContainer>
      {exhibitions &&
        exhibitions.map((exhibition) => (
          <ExhibitionsWrap key={exhibition.year}>
            <h3>{exhibition.year}</h3>
            <ExhibitionsInfo>
              {exhibition.data.map((datum) => (
                <InfoData key={`${exhibition.year}-${datum.id}`}>
                  <p>{datum.name}</p>
                  <p>{datum.organizer}</p>
                </InfoData>
              ))}
            </ExhibitionsInfo>
          </ExhibitionsWrap>
        ))}
    </ExhibitionsContainer>
  );
}

export default Exhibitions;
