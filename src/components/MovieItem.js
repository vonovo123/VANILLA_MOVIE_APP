import '~/scss/movieItem.scss'
import Component from './Component'
export default class MovieItem extends Component {
  constructor($parent){
    super($parent, 'div', {className : ['movie-item']});
  }
  render(movie){
    this.$.innerHTML = this.createMovieElement(movie);
  }
  createMovieElement(movie){
    return`
      <div
      class="movie"
      style="background-image: url(${movie.Poster})">
      <div class="info">
        <div class="year">
          ${ movie.Year }
        </div>
        <div class="title">
          ${ movie.Title }
        </div>
      </div>
    </div>
    `
  } 
}