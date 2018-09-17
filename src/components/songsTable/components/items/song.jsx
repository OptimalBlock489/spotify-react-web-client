import React from 'react';
import moment from 'moment';

import withUiActions from '../../../../hoc/uiChange';

const msToMinutesAndSeconds = ms => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const song = props => {
  const buttonClass =
    props.track === props.songId && !props.songPaused
      ? 'fa-play-circle-o'
      : 'fa-pause-circle-o';

  const artists = props.item.track ? props.item.track.artists.length : 0;

  return (
    <li className="user-song-item">
      <div className="play-song">
        <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
      </div>
      <div className="song-title">
        <p>{props.item.track.name}</p>
      </div>
      <div className="song-artist">
        <p>
          {props.item.track.artists
            ? props.item.track.artists.map((a, i) => (
                <span>
                  <span
                    className="artist"
                    onClick={() => props.onArtistClick(a.id)}
                  >
                    {a.name}
                  </span>
                  {artists !== i + 1 ? <span> , </span> : null}
                </span>
              ))
            : ''}
        </p>
      </div>
      <div className="song-album">
        <p>{props.item.track.album.name}</p>
      </div>
      <div className="song-added">
        <p>{moment(props.item.added_at).format('YYYY-MM-DD')}</p>
      </div>
      <div className="song-length">
        <p>{msToMinutesAndSeconds(props.item.track.duration_ms)}</p>
      </div>
    </li>
  );
};

export default withUiActions(song);
