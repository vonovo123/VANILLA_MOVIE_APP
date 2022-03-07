import Component from './Component'
import MovieItem from './MovieItem'
export default class MovieList extends Component {
  constructor($parent){
    super($parent, 'div', ['movie-list', 'container']);
    this.subscribe('search-movies');
  }
  render(){
    console.log('render movieList')
    this.$.innerHTML = '';
    const searchMovies = this.get('search-movies');
    console.log(searchMovies)
    if(searchMovies){
      let $inner = document.createElement('div');
      $inner.classList.add('inner');
      searchMovies.forEach(movie => {
        new MovieItem($inner).render(movie);
      });
      this.$.append($inner);
    }
    
  }
  createMovieElement(movie){
    return `<div>${movie.Title}</div>`;
  }
}