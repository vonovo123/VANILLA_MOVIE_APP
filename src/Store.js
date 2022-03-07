class Store {
  constructor(){
    this.store = {};
  }
  has(context){
    return !!this.store[context];
  }
  set(context, data){
    if(!this.has(context)){
      this.store[context] = {
        data,
        nodes : []
      }
      return;
    }
    this.store[context].data = data;
    this.publish(context);
  }
  get(context){
    return this.store[context].data;
  }
  subscribe(context, node){
    this.store[context].nodes.push(node);
  }
  publish(context){
    this.store[context].nodes.forEach(node => {
      node.render();
    })
  }
}
const store = new Store();
export default store;