
import Component from './Component';
import Headline from './Headline';
import Search from './Search';
import MovieList from './MovieList';
export default class Home extends Component {
  constructor($parent){
    super($parent, 'template', '');
    this.child = [
      new Headline(this.$),
      new Search(this.$),
      new MovieList(this.$)
    ]
  }
  render(){
    this.child.forEach(child => child.render());
    this.renderTemplate();
  }
}