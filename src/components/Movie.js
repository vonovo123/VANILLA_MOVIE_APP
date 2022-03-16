import '~/scss/movie.scss'
import Loader from '~/components/Loader';
import Component from './Component';
import {loadImage} from '~/Plugin.js'
export default class Movie extends Component {
  constructor($parent){
    super($parent, 'div', {className : ['the-movie', 'container']});
    const id = window.location.pathname.split("/")[2];
    this.render(id);
    this.posterLoader = null;
  }
  render(id){
    this.renderSkeleton();
    let cache = this.get('search_the_movie');
    if(cache && cache.imdbID === id){
      this.renderRealMovie(cache);
    } else {
      this.initData('searchMovieWithId', {id}, (res) => {
        this.set('search_the_movie', res);
        this.renderRealMovie();
      })
    }
  }
  renderSkeleton(){
    this.$.innerHTML = `
      <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    `
    new Loader(this.$, ['fixed'], {
         width:`2rem`,
         height:`2rem`,
         zIndex: `2`
        }
    )
  }
  renderRealMovie(cache){    
    let theMovie = null;
    let cacheFlag = false;
    if(cache){
      theMovie= cache;
      cacheFlag = true;
    } else [
      theMovie = this.get('search_the_movie')
    ]
    let template = `
    <div class="movie-details">
    <div
      style="background-image: url(${this.requestDiffSizeImage(theMovie.Poster, 700, cacheFlag)})"
      class="poster" id="poster">
    </div>
    <div class="specs">
      <div class="title">
          ${theMovie.Title}
      </div>
      <div class="labels">
        <span>${theMovie.Released }</span>
        <span>${theMovie.Runtime }</span>
        <span>${theMovie.Country}</span>
      </div>
      <div class="plot">
        ${theMovie.Plot}
      </div>
      <div class="ratings">
        <h3>Ratings</h3>
        <div class="rating-wrap">
      `
      template += theMovie.Ratings.map(rating => this.createRatingElement(rating)).join("");
      template += `  
        </div>
      </div>
      <div>
        <h3>Actors</h3>
        ${ theMovie.Actors }
      </div>
      <div>
        <h3>Director</h3>
        ${ theMovie.Director }
      </div>
      <div>
        <h3>Production</h3>
        ${ theMovie.Production }
      </div>
      <div>
        <h3>Genre</h3>
        ${ theMovie.Genre }
      </div>
    </div>
  </div>
    `
    this.$.innerHTML  = template;
    if(!cacheFlag){
      const poster = document.querySelector('#poster');
      this.posterLoader =  new Loader(poster,
        ['absolute'], 
         {
            width:`2rem`,
            height:`2rem`,
            zIndex: `0`
         }
        )
    }
  }
  createRatingElement(rating){
    const {Source :name, Value: score} = rating;
    return `
      <div
        title="${name}"
        class="rating"
      >
        <img
        src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png"
        alt="${name}"
        />
        <span>${score}</span>
      </div>
    `
  }
  requestDiffSizeImage(url, size = 700, cacheFlag){
    const src = url.replace('SX300', `SX${size}`);
    if(!cacheFlag) {
      loadImage(src).then(() => {
        const poster = document.querySelector('#poster');
        poster.removeChild(this.posterLoader.$);
      })
    } 
    return src
  }
}