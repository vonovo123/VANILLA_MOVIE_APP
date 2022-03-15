import '~/scss/movieList.scss'
import Component from './Component'
import MovieItem from './MovieItem'
export default class MovieList extends Component {
  constructor($parent){
    super($parent, 'div', {className : ['movie-list', 'container']});
    this.subscribe('search-movies');
  }
  render(){
    this.$.innerHTML = '';
    const searchMovies = this.get('search-movies');
    let $inner = document.createElement('div');
    $inner.classList.add('inner');
    if(searchMovies){  
      let $content = document.createElement('div');;
      if(searchMovies instanceof Error){
        $content.classList.add('message');
        $content.innerText = searchMovies.message;
      } else {
        $content.classList.add('movies')
        searchMovies.forEach(movie => {
          new MovieItem($content).render(movie);
        });
      }
      $inner.append($content);
    } 
    this.$.append($inner);
  }
  createMovieElement(movie){
    return `<div>${movie.Title}</div>`;
  }
}