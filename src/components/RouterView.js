import Component from "./Component";
import {initRoute} from '../Router.js'
export default class RouterView  extends Component{
  constructor($parent){
    super($parent, 'template',  {className : ['router-view']} );
    initRoute(this);
  }
  render(){
    this.renderTemplate();
  }
}