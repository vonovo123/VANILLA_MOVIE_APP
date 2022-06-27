import Loader from '~/components/Loader';
import '~/scss/movieItem.scss'
import Component from './Component'
import {loadImage} from '~/Plugin.js'
import {routeChange} from '~/Router.js'
import { changeActive } from './Header';
export default class MovieItem extends Component {
  constructor($parent){
    super($parent, 'div', {className : ['movie-item']});
    this.imageLoader = null;
  }
  render(movie){
    this.$.append(this.createMovieElement(movie));

  }
  createMovieElement(movie){
    const $movie = document.createElement('div');
    $movie.classList.add('movie');
    const imageLoader = new Loader($movie, ['absolute'], {
      width:`1.5rem`,
      height:`1.5rem`
     });
    $movie.style.backgroundImage = `url('${this.loadImage($movie, imageLoader, movie.Poster)}')`;
    $movie.addEventListener('click', (event) => {
      //console.log(movie.imdbID);
      routeChange('movie', movie.imdbID);
      changeActive('Movie');
    })
    const $info = document.createElement('div')
     $info.classList.add('info');
     $info.innerHTML = `
        <div class="year">
          ${ movie.Year }
        </div>
        <div class="title">
          ${ movie.Title }
        </div>
      `
      $movie.append($info);
      return $movie;
  } 
  loadImage($el, loader, src){
    if(! src || src === 'N/A'){
      const poster = document.querySelector('#poster');
      $el.removeChild(loader.$);
    } else {
      loadImage(src).then(() => {
        const poster = document.querySelector('#poster');
        $el.removeChild(loader.$);
      })
    }
    
    return src;
  }
}