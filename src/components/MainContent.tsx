import Track from "./Track";

let trackArray = [{title:"Memory", releaseDate:"Release date: 16th April, 2021", numStreams:"Streams: 26.5k", spotifyLink:"https://open.spotify.com/track/4EwlF79ZzNHyfNBiMKt0Vc?si=42e4991dcedf4b3e", image:"https://i.scdn.co/image/ab67616d0000b273bb7e249fa13659c4f7e9a505"},
{title:"Fragments", releaseDate:"Release Date: 19th February, 2021", numStreams:"Streams: 120.1k", spotifyLink:"https://open.spotify.com/track/3Bf7zUWJKvGyOnIBzW5WcR?si=c4e9a58ee2ee46c8", image:"https://i1.sndcdn.com/artworks-ExmtCdXe9ZxisL5l-4VCGMg-t500x500.jpg"}, 
{title:"Say Something", releaseDate:"Release Date: 27th November, 2020", numStreams:"Streams: 139.2k", spotifyLink:"https://open.spotify.com/track/7CkfoDox2xkzhM8S8Ba8tF?si=aae03c5dc4aa4924", image:"https://i1.sndcdn.com/artworks-on10DurYY4KrbD6E-oMmg7w-t500x500.jpg"},
{title:"Endure", releaseDate:"Release date: 22nd September, 2020", numStreams:"Streams: 130.2k", spotifyLink:"https://open.spotify.com/track/3jkYUw4PvnN00AeAPZTOmo?si=1352f97e7be845e3", image:"https://i1.sndcdn.com/artworks-fL5XjyDWqeECNDvI-askOkQ-t500x500.jpg"},
{title:"On My Own", releaseDate:"Release date: 14th July, 2020", numStreams:"Streams: 167.5k", spotifyLink:"https://open.spotify.com/track/37saI65rzTYMMo6LfGkhdY?si=4f6ffea327494aff", image:"https://m.media-amazon.com/images/I/91owdlIfFkL._SS500_.jpg"}]

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