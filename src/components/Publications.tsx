import { PublicationContainer, PublicationWrap, PublicationInfo } from 'styles/Publications';
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
                <div key={`${publication.year}-${datum.id}`}>
                  <div>
                    <p>{datum.date}</p>
                  </div>
                  <div>
                    <p>{datum.organizer}</p>
                  </div>
                  <div>
                    <p>{datum.title}</p>
                  </div>
                </div>
              ))}
            </PublicationInfo>
          </PublicationWrap>
        ))}
    </PublicationContainer>
  );
}

export default Publications;
