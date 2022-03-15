class Store {
  constructor(){
    this.store = {};
  }
  has(context){
    return !!this.store[context];
  }
  // isSubscribe(context, node){
  //   let flag = false;
  //   this.store[context].nodes.forEach(sub => {
  //     console.log(sub);
  //     if(sub instanceof node){
  //       flag = true;
  //     }
  //   })
  //   return flag;
  // }
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
  clearNodes(context){
    this.store[context].nodes = [];
  }
  get(context){
    if(!this.store[context]) return null;
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