import Home from './components/Home';
import Movie from './components/Movie';
import About from './components/About';

export const initRoute = function (app){
  window.addEventListener('ROUTE_CHANGE', () => {
    route(app);  
  })
  window.addEventListener('popstate', ()=>{
    route(app);  
  })
  route(app);
}
const route = function(app){
  let $app = app.$;
  const {pathname} = window.location;
  let routerView = null
  if($app.firstChild){
    $app.removeChild($app.firstChild);
  }
  if(pathname === '/'){
    routerView = new Home($app);
  } else if(pathname.indexOf('movie') !== -1){
    routerView = new Movie($app);
  } else if(pathname.indexOf('about') !== -1){
    routerView = new About($app);
  }
  Object.entries(app.$parent.childNodes).forEach(([idx,node]) => {
    if(node.tagName === 'DIV') {
      app.$parent.removeChild(node)
    }
  });
  routerView.render();
  app.render();
}

export const routeChange = function(url){
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent('ROUTE_CHANGE'));
}