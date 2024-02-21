const Song = (props: SongProps) : JSX.Element => {
    return (<li>{props.title} by {props.artist}</li>);
 }
 
 export default Song

 type SongProps = {title: string, artist: string};