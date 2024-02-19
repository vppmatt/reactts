import { ReactElement } from "react";
import { SongProps } from "./SongTypes";

const Song = (props: SongProps) : ReactElement => {

    console.log("Song is running with properties ", props);

    const voteNow = () : void => props.recordVote();

    return (<li>{props.song.title} by {props.song.artist} has {props.song.votes} <button onClick={voteNow}>Vote for this song</button></li>);
 }


 
 export default Song

