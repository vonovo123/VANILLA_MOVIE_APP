import '~/scss/header.scss'
import Logo from './Logo';
import Component from './Component';
import {routeChange} from '../Router'
export default class Header extends Component{
  constructor($parent){
    super($parent, 'header', 'header')
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
              <div class="nav-link ${idx === 0 ? `active`: ``}" data-href=${nav.href}>
                ${ nav.name }
            </div>
          </div>`
  }
  onClick = (event) => {
    if(event.target.className.indexOf('nav-link')!== -1){
      const $navLinks = document.getElementsByClassName('nav-link');
      Object.entries($navLinks).forEach($navLink => $navLink[1].classList.remove('active'));
      event.target.classList.add('active');
      const href = event.target.dataset.href;
      console.log(href);
      routeChange(href);

    }
  }
}

const navigations =  [
  {
    name : 'Search',
    href : '/'
  },
  {
    name : 'Movie',
    href : 'movie'
  },
  {
    name : 'About',
    href : 'about'
  },
]