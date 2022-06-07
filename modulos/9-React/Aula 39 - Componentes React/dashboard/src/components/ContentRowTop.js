import React from 'react'
import ContentRowMovies from './ContentRowMovies'
import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'
import DashboardTitle from './DashboardTitle'

function ContentRowTop(props) {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<DashboardTitle name="App Dashboard" />
				<ContentRowMovies />

				<div className="row">
					<LastMovieInDb />
					<GenresInDb />
				</div>
			</div>
		</React.Fragment>
	)
}

export default ContentRowTop;