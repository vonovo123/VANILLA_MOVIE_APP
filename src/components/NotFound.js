import Component from './Component';
import '~/scss/notFound.scss';
export default class About extends Component {
  constructor($parent){
    super($parent, 'div', {clasName: ['not-found']});
    this.render();
  }
  render(){
    this.$parent.innerHTML = `
      <div class="status">
        404
      </div>
      <div class="mesage">
        Page Not Found!
      </div>
    `
  }
}