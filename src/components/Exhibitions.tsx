import { ExhibitionsContainer, ExhibitionsWrap, ExhibitionsInfo } from 'styles/Exhibitions';
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
                <div key={`${exhibition.year}-${datum.id}`}>
                  <div>
                    <p>{datum.name}</p>
                  </div>
                  <div>
                    <p>{datum.organizer}</p>
                  </div>
                </div>
              ))}
            </ExhibitionsInfo>
          </ExhibitionsWrap>
        ))}
    </ExhibitionsContainer>
  );
}

export default Exhibitions;
