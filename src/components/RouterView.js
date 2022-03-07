import Component from "./Component";
import {initRoute} from '../Router.js'
export default class RouterView  extends Component{
  constructor($parent){
    super($parent, 'template', 'router-view');
    initRoute(this.$, this);
  }
  render(){
    this.renderTemplate();
  }
}