import Component from './Component.js'
import '~/scss/loader.scss'
export default class Loader extends Component {
  constructor($parent, clasName, styles){
    super($parent, 'div', {className : [...clasName, 'spinner-border', 'text-primary'], styles})
  }
}