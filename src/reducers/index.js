import { combineReducers } from 'redux';

const songsReducers = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '2:05' },
		{ title: 'All Stars', duration: '2:15' },
		{ title: 'I Want it that Way', duration: '1:45' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducers,
	selectedSong: selectedSongReducer,
});
