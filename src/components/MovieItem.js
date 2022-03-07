import Component from './Component'
export default class MovieItem extends Component {
  constructor($parent){
    super($parent, 'div', ['movie-item']);
  }
  render(movie){
    this.$.innerText = `${movie.imdbID}`
  } 
}