import fetchData from '../API.js'
export default class Component {
  constructor($parent, tag, className) {
    this.$parent = $parent;
    this.$ = document.createElement(tag);
    if(className){
      if(Array.isArray(className)){
        className.forEach(name => this.$.classList.add(name))
      } else {
        this.$.classList.add(className)
      }
    }
    this.$parent.appendChild(this.$);
    
  }
  renderTemplate(type){
    Object.entries(this.$.childNodes).forEach(([key, node]) => {
      if(node.tagName !== 'TEMPLATE'){
        this.$parent.appendChild(node)
      }
    });
  }
  bindEvent(){
   Object.entries(this).forEach(([key, value]) => {
     if(key.indexOf('on') === -1) return;
     const type = key.slice(2).toLocaleLowerCase();
     this.$.addEventListener(type, value);
   })
  }
  async fetch(type, param){
      return await fetchData(type, param);
  }
}