import Component from './Component';
export default class About extends Component {
  constructor($parent){
    super($parent, 'template', '');
    this.child = [
    ]
  }
  render(){
    this.child.forEach(child => child.render());
    this.renderTemplate();
    this.$parent.innerHTML = '<div>ABOUT</div>'
  }
}