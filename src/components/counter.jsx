import React, {Component} from "react";

const Pool= require('pg').Pool
const dbClient = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'wasteland',
  password: 'password',
  port: 5432,
});

dbClient.connect();


let songs = dbClient.query('Select * from wastelandschema.song', (err, res) => {
    if( ! err){
        var songtitle = 
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    dbClient.end;
});

let albums = dbClient.query('Select * from wastelandschema.album', (err, res) => {
    if( ! err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    dbClient.end;
});


export default class Counter extends Component {
    state = {
       songs: songs.res.rows,
       albums: albums.res.rows
    };


    hanldeIncrement = () => {
        console.log('Your vote has been counted', this)
        this.setState({ count: this.state.count + 1 });
        console.log("hi")

    }


    render() {
        return (
            <div>
              <p> Songs {this.state.songs} </p>
              <p> Albums {this.state.albums}</p>
            </div>
        );
    }

}

