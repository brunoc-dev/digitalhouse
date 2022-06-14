import React, { useState, useEffect } from 'react';
import Genre from './Genre';


function GenresInDb() {
    let [genres, setGenres] = useState([{ "name": "Thriller"}]);

    useEffect(() => {
        setInterval(() => {
            fetch('http://localhost:3001/api/genres')
                .then(response => response.json())
                .then(genresList => setGenres(genresList.data))
                .catch(error => console.log(error))
            console.log(genres)
        }, 10000)
    }, [])

    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                genres.map((genre, index) => {
                                    return <Genre  {...genre} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GenresInDb;