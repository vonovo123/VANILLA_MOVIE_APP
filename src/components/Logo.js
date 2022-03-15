import '~/scss/logo.scss'
import Component from './Component';
export default class Logo extends Component{
  constructor($parent){
    super($parent, 'div', {className : ['logo']})
  }
  render(){
    let template = `<span>OMDbAPI</span>.COM`
    this.$.innerHTML = template;
  }
}