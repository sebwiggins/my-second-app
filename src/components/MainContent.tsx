import Track from "./Track";

let trackArray = [{title:"Memory", releaseDate:"16th April, 2020", numStreams:"26.5k", spotifyLink:"https://open.spotify.com/track/4EwlF79ZzNHyfNBiMKt0Vc?si=42e4991dcedf4b3e", image:"https://i.scdn.co/image/ab67616d0000b273bb7e249fa13659c4f7e9a505"}]

function MainContent(): JSX.Element {
    return(
        <main>
            {trackArray.map(track=><Track
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