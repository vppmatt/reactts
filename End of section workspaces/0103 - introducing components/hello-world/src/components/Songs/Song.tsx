const Song = (props : SongProps) => {
    return (<li>{props.title} by {props.artist}</li>);
}

type SongProps = {
    title: string,
    artist: string
}

export default Song;
