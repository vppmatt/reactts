import Song from './Song';
import {useState} from "react";

export type SongType = { title: string, artist: string, votes: number };

const SongList = () => {

    const initialSongs: SongType[] = [
        {title: 'Last thing on my mind', artist: 'steps', votes: 0},
        {title: 'If you\'re over me', artist: 'Years and years', votes: 0},
        {title: 'Top of the world', artist: 'Carpenters', votes: 0},
        {title: 'Sometimes', artist: 'Erasure', votes: 0}
    ];

    const [showAll, setShowAll] = useState<boolean>(true);
    const [songs, setSongs] = useState<SongType[]>(initialSongs);
    const [visible, setVisible] = useState<boolean>(false)

    const addVote = (artist: string) => {
        const newSongs = songs.map(it => {
            if (it.artist === artist) {
                return {...it, votes: it.votes + 1};
            } else {
                return it;
            }
        });
        setSongs(newSongs);
    }

    // Version 1
    const displaySongs : JSX.Element[] = songs.map((song, index) => <Song key={index} song={song} recordVote={addVote}/>)

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} songs</button>
            <ul style={{display: visible ? 'block' : 'none'}}>


                {/* version 1 */
                //displaySongs
                }

                { /* version 2 */}
                {showAll &&
                songs.map((song, index) => <Song key={index} song={song} recordVote={addVote}/>)
                }

                {!showAll &&
                songs.filter(it => it.votes >=2).map((song, index) => <Song key={index} song={song} recordVote={addVote}/>)
                }

            </ul>
            <h3>Currently showing {showAll ? 'all' : '2 or more rated'} songs</h3>
            <button onClick={toggleShowAll}>Show {showAll ?  'only songs with 2 or more votes' : 'all songs'}</button>
        </div>);
}

export default SongList;

