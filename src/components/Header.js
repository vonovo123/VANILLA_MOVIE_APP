import '~/scss/header.scss'
import Logo from './Logo';
import Component from './Component';
import {routeChange} from '../Router'
export default class Header extends Component{
  constructor($parent){
    super($parent, 'header', {className : ['header']})
    this.bindEvent();
    this.child = [new Logo(this.$)];
    
  }
  render(){
    this.child.forEach(child=> child.render());
    const $nav = document.createElement('div');
    $nav.classList.add('nav');
    $nav.classList.add('nav-pills');
    $nav.innerHTML =  navigations.map((nav, idx) => this.creatNavItem(nav, idx)).join(''); 
    this.$.append($nav);
  }
  creatNavItem(nav, idx){
    return `<div class="nav-item">
              <div class="nav-link ${idx === 0 ? `active`: ``}" data-href=${nav.href} data-name=${nav.name}>
                ${ nav.name }
            </div>
          </div>`
  }
  onClick = (event) => {
    if(event.target.className.indexOf('nav-link')!== -1){
      // Object.entries($navLinks).forEach($navLink => $navLink[1].classList.remove('active'));
      // event.target.classList.add('active');
      const href = event.target.dataset.href;
      const name = event.target.dataset.name.toLowerCase();
      console.log(href);
      changeActive(name);
      if(href === '/movie'){
        routeChange(href, 'tt4520988');
      } else {
        routeChange(href);  
      }
      
    }
  }
}
export const changeActive = function(param){
  const $navLinks = document.querySelectorAll('.nav-link');
  let nav = ['search', 'movie', 'about'];
  const $target = $navLinks[nav.indexOf(param.toLowerCase())];
  $navLinks.forEach((e, idx) => e.classList.remove('active'));
  $target.classList.add('active');
}
const navigations =  [
  {
    name : 'Search',
    href : '/'
  },
  {
    name : 'Movie',
    href : '/movie'
  },
  {
    name : 'About',
    href : '/about'
  },
]