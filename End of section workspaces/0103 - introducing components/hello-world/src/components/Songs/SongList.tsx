import Song from './Song';

const SongList = () => {
    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <ul>
                <Song title="Last thing on my mind" artist="Steps"/>
                <Song title="If you're over me" artist="Years and years"/>
            </ul>
        </div>);
}

export default SongList;
