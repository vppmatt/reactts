import {SongType} from "./SongList";

const Song = (props : SongProps) => {
    console.log("Song is running with properties ", props);

    const voteNow = () => {
        props.recordVote(props.song.artist);
    }

    return (<li>{props.song.title} by {props.song.artist} has {props.song.votes} votes. <button onClick={voteNow}>Vote for this song</button>
    </li>);
}

type SongProps = {
    song: SongType,
    recordVote: (artist: string) => void;
}

export default Song;
