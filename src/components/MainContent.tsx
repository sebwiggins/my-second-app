import Track from "./Track";

let trackArray = [

    function MainContent(): JSX.Element {
    return(
        <main>
            {trackArray.map(track=><Track
            Artist={track.Artist}
            title={track.title}
            releaseDate={track.releaseDate}
            numStreams={track.numStreams}
            spotifyLink={track.spotifyLink}
            image={track.image}
            />)}
        </main>
    );
}

export default MainContent