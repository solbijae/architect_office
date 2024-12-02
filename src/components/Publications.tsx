import { PublicationContainer, PublicationWrap, PublicationInfo, InfoData } from 'styles/Publications';
import useFetchData from 'hooks/useFetchData';
import { Publication } from 'types/publication';

function Publications() {
  const { data: Publication, error } = useFetchData<Publication[]>(
    '/assets/data/Publication.json',
  );

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <PublicationContainer>
      {Publication &&
        Publication.map((publication) => (
          <PublicationWrap key={publication.year}>
            <h3>{publication.year}</h3>
            <PublicationInfo>
              {publication.data.map((datum) => (
                <InfoData key={`${publication.year}-${datum.id}`}>
                  <p>{datum.date}</p>
                  <p>{datum.organizer}</p>
                  <p>{datum.title}</p>
                </InfoData>
              ))}
            </PublicationInfo>
          </PublicationWrap>
        ))}
    </PublicationContainer>
  );
}

export default Publications;
