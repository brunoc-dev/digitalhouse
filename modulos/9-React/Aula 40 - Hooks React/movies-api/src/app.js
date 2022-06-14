const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

const apiMoviesRouter = require('./routes/api/movies');
const apiGenresRouter = require('./routes/api/genres');
const apiActorsRouter = require('./routes/api/actors');

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use('/api/movies',apiMoviesRouter);
app.use('/api/actors',apiActorsRouter);
app.use('/api/genres',apiGenresRouter);

app.listen('3001', () => console.log('Servidor rodando na porta 3001'));
