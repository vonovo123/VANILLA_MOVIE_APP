import '~/scss/movie.scss'
import Loader from '~/components/Loader';
import Component from './Component';
export default class Movie extends Component {
  constructor($parent){
    super($parent, 'div', {className : ['the-movie', 'container']});
    let initData = this.get('search-the-movie');
    if(!initData){
      console.log('init movie')
      this.set('search-the-movie', null);
      this.renderSkeleton();
    }
  }
  render(){
    this.renderSkeleton();
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
}