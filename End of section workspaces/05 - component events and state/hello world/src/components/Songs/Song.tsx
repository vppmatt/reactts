import { ReactElement } from "react";

const Song = (props: SongProps) : ReactElement => {
    return (<li>{props.title} by {props.artist}</li>);
 }
 
 export default Song

 type SongProps = {title: string, artist: string};