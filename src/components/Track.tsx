interface TrackProps {
    Artist: string;
    title: string;
    releaseDate: string;
    numStreams: string;
    image: string;
    spotifyLink: string;
  }
  
  function Track(props: TrackProps): JSX.Element {
    return (
      <section>
           <img src={props.image} alt= "Cardiff City Centre" />
        <h2>{props.Artist} - {props.title}</h2>
          <p>
            {props.releaseDate}
          </p>
        <p>
            {props.numStreams}
        </p>
        (<a href={props.spotifyLink}>map link</a>)
      </section>
    );
  }
  
  export default Track;