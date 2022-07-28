
const Pool= require('pg').Pool
const dbClient = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'wasteland',
  password: 'password',
  port: 5432,
});

dbClient.connect();



dbClient.query('Select * from wastelandschema.song order by song_title', (err, res) => {
    if( ! err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    dbClient.end;
});

dbClient.query('Select * from wastelandschema.album', (err, res) => {
    if( ! err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    dbClient.end;
});
