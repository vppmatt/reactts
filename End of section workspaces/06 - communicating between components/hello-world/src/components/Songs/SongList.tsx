import Song from './Song';
import { useState } from 'react';
import { SongType } from './SongTypes';

const SongList = () : JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisibility = () : void => {
        setVisible(!visible);
    }

    let [song1, setSong1] = useState<SongType>({title : 'Last thing on my mind', artist: 'steps', votes : 0});
    let [song2, setSong2] = useState<SongType>({title : 'If you\'re over me', artist: 'Years and years', votes : 0});


    const addVote1 = () :void => {
        setSong1({...song1, votes : song1.votes + 1});
    }

    const addVote2 = () :void => {
        setSong2({...song2, votes : song2.votes + 1});
    }


    const changeSong = () :void => {
        setSong1({...song1, title : 'Something in your eyes'});
        setSong2({...song2, title : 'King' })
    }


    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} songs</button>
            <ul style= {{display : visible ? 'block' : 'none'}}>
                <Song song={song1} recordVote={addVote1}/>
                <Song song={song2} recordVote={addVote2} />
            </ul>
            <button onClick={changeSong}>Change songs</button>
        </div>);
}

export default SongList;
