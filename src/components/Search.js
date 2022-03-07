import '~/scss/search.scss'
import Component from './Component';
import _uniqBy from 'lodash/uniqBy'
import api from '../API';
export default class Home extends Component {
  constructor($parent){
    super($parent, 'div', ['search' ,'container']);
    this.child = [
    ]
    this.data = this.setData();
    this.set('search-movies', null);
    this.bindEvent();
  }
  onClick = (event) => {
    if(event.target.name === 'apply'){
      this.apply();
    }
  }
  onChange = (event) => {
    const name = event.target.name;
    this.data[name] = event.target.value;   
  }
  onInput = (event) => {
    if(event.target.name === 'title'){
      this.data[event.target.name] = event.target.value
    }
  }
  async apply(){
    const {title, type, year, number} = this.data;
    const res = await this.tryFetchData(api.searchMovies,
     {
       title,
       type,
       year,
       page : 1
     }, ({data}) => {
       return data
     }
    )
    const {Search, totalResults} = res;
    let searchMovies = [...Search];
    const total = parseInt(totalResults, 10);
    //한페이지에 보여줄 영화 수
    const per = 10;
    const pageLength = Math.ceil(total / per);
    if(pageLength > 1){
      for(let page = 2; page < pageLength; page ++){
        if(page > number / per) break;
        const res = await this.tryFetchData(api.searchMovies,
          {
            title,
            type,
            year,
            page
          }, ({data}) => {
            //this.set('search-movies', data);
            return data
          }
         )
         const {Search} = res;
         searchMovies = [...searchMovies, ...Search];
      }
    }
    console.log(searchMovies);
    //console.log(`res`, res)
    this.set('search-movies', _uniqBy(searchMovies, 'imdbID'));
  }
  render(){
    this.child.forEach(child => child.render);
    const filters = this.data.filters;
    let template = `
      <input
      class="form-control"
      name="title"
      type="text"
      placeholder="Search for Movies, Seriesss & more"
      />
      <div class="selects">
      `
     template += filters.map(filter => this.createSelect(filter)).join('');
     template += `</div>
     <button class="btn btn-primary" name="apply">
        APPLY
      </button>
      `
    this.$.innerHTML = template;
  }
  createSelect(filter){
    let template = `
    <select class="form-select" name="${filter.name}">`;
    if(filter.name === 'year'){
      template += `
      <option value="">All years</option>
      `
    }
    template += filter.items.map(item => `<option value="${item}">${item}</option>`).join('');
    template += `<select>`;
    return template
  }
  setData(){
    return {
      title : '',
      type : 'movie',
      number : 10,
      year : '',
      filters: [
        {
        name :'type',
        items : ['movie', 'series', 'episode']
        }
        ,{
        name :'number',
        items : [10,20,30]
        }
        ,{
        name :'year',
        items : (()=>{
          const years = [];
          const thisYear = new Date().getFullYear();
          for(let i = thisYear; i >= 1985; i --){
            years.push(i);
          }
          return years
        })()
        }
      ]
    }
  }
}