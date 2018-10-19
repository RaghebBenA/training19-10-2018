import React , {Component} from 'react';
import Loader from '../../component/loader/pic';
import './Single.css'


class SingleSeries extends Component {
  state =  {
    show: null
  }
  componentDidMount(){
    const {id} = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
    .then(response => response.json())
    .then(json => this.setState({show: json }));
  }
render(){
  const { show } = this.state;
  console.log(show)
return(
  <div className="SeriesId">
 {show === null && <Loader />}
 {
   show !==null
   &&
   <div>
   <p> {show.name} </p>
   <p>Premiered - {show.premiered}</p>
   <p>Rating - {show.rating.average}</p>
   <p>Episodes - {show._embedded.episodes.length}</p>
   <p> {show.links}</p>
   <p>
    <img alt='img' src={show.image.original}/>
   </p>
   </div>

 }
   </div>
)
}
}


export default SingleSeries;