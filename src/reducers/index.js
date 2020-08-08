import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:05' },
        { title: 'All Stars', duration: '2:15' },
        { title: 'I Want it that Way', duration: '1:45' },
    ];
};

const selectedSongsReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

combineReducers({
        songs: songsReducers,
        selectedSongs: selectedSongsReducer
    });