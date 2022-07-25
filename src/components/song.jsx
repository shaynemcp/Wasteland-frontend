
import React from 'react';
import { render } from 'react-dom';

class Album {
    constructor(title, artists, year, tracks, length) {
        this.title = title
        this.artists = artists
        this.year = year
        this.tracks = tracks
        this.length = length
    }
}

export default class Song extends Album{
    constructor(songtitle, track, time) {
        super(Album)
        this.songtitle = songtitle
        this.track = track
        this.time = time

        return (
            <div> 
                <div className="user-grid-container">
                    <p> Hello World</p>
                    {/* <div className="user-cards__list">
                    {song.map(({ songtitle, artists, track, time }) => (
                        <div key={songtitle} className="song-card card">
                        <h3 className="song-name">
                            <p>{artists}</p>
                        </h3>
                        <p className="company-name">
                            Company: <span>{company.name}</span>
                        </p>
                        <span className="user-posts-link">
                            <p> {this.showVoteButton()}</p>
                        </span>
                        </div>
                    ))}
                    {!users.length && <h3>No users....</h3>}
                    </div> */}
                </div>
            </div>
            );
    }
  

}

 function SongRender() {

    
}




