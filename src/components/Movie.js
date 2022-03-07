import Component from './Component';
export default class Movie extends Component {
  constructor($parent){
    super($parent, 'template', '');
    this.child = [
    ]
  }
  render(){
    this.child.forEach(child => child.render());
    this.$.append = '<div>MOVIE</div>';
    this.renderTemplate();
  }
}