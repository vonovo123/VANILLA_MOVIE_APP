import store from '../Store';
import api from '../API';
export default class Component {
  constructor($parent, tag, attribute) {
    this.$parent = $parent;
    this.$ = document.createElement(tag);
    if(attribute){
      Object.entries(attribute).forEach(([fieldName, fieldValue]) => {
        if(fieldName === 'className'){
          fieldValue.forEach(name => this.$.classList.add(name))
        } else if(fieldName === 'styles'){
          Object.entries(fieldValue).forEach(([styleName, styleValue]) => {
            this.$.style[styleName] = styleValue;
          })
          
        }
      })
    }
    this.$parent.appendChild(this.$);
    
  }
  renderTemplate(){
    Object.entries(this.$.childNodes).forEach(([key, node]) => {
      if(node.tagName !== 'TEMPLATE'){
        const lastEl = this.$parent.lastElementChild;
        console.log(lastEl.tagName)
        if(lastEl.tagName === 'FOOTER'){
          this.$parent.insertBefore(node, lastEl);
        } else{
          this.$parent.appendChild(node)
        }
        
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
  set(context, data){
    store.set(context, data);
  }
  subscribe(context){
    store.subscribe(context, this);
  }
  get(context){
    console.log(store);
    return store.get(context);
  }
  async tryFetchData(fetchData, param, cb){
    try {
      let data = await fetchData(param);
      data = cb(data);
      return data;
    } catch(error) {
      throw(error);
    }
  }
  clearNodes(context){
    return store.clearNodes(context);
  }
  async initData(type, param, cb){
    try {
      const res = await this.tryFetchData(api[type], param, ({data}) => data)
      cb(res);
    }catch(error){
      console.log(error.message);
    }
  }
}