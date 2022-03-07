import '~/scss/app.scss'
import Header from './components/Header';
import RouterView from './components/RouterView';

export default class App {
  constructor($app){
    this.$ = $app;
    this.child = [
      new Header(this.$),
      new RouterView(this.$)
    ];
  }
}