interface TrackProps {
    title: string;
    releaseDate: string;
    numStreams: string;
    image: string;
    spotifyLink: string;
  }
  
  function Track(props: TrackProps): JSX.Element {
    return (
      <section>
           <img src={props.image} alt= "Track Artwork" />
        <h1>{props.title}</h1>
          <h3>
            {props.releaseDate}
          </h3>
        <h3>
            {props.numStreams}
        </h3>
        (<a href={props.spotifyLink}>Spotify Link</a>)
        <p>{""}</p>
      </section>
    );
  }
  
  export default Track;