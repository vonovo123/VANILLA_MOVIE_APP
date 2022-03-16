import '~/scss/movieList.scss'
import Loader from '~/components/Loader';
import Component from './Component'
import MovieItem from './MovieItem'
export default class MovieList extends Component {
  constructor($parent){
    super($parent, 'div', {className : ['movie-list', 'container']});
    this.subscribe('search-movies');
    let initData = this.get('search-movies');
    if(initData) this.render();
    
  }
  render(){
    this.$.innerHTML = '';
    const searchMovies = this.get('search-movies');
    let $inner = document.createElement('div');
    $inner.classList.add('inner');
    if(searchMovies){
      let loader = new Loader(
        $inner, 
        [],
        {
         width:`2rem`,
         height:`2rem`,
        });  
      this.$.append($inner);
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
      $inner.removeChild(loader.$);
      $inner.append($content);
    } else {
      $inner.classList.add('no-result');
      $inner.innerHTML = `<div class="message">Search for the movie title!</div>`
      this.$.append($inner);
    } 
    
  }
  createMovieElement(movie){
    return `<div>${movie.Title}</div>`;
  }
}