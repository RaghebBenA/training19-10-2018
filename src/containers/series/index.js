import React, { Component } from 'react';
import SeriesList from '../../component/SeriesList/list';
import Para from '../../component/navbar.js';
import Loader from '../../component/loader/pic.js'
import '../../test.css';

class Series extends Component {
  state = {
    days: [],
    daysName: '',
    isFetching: false
  }


     onSeriesInputChange = e => {
      this.setState({daysName: e.target.value, isFetching: true });

       fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
       .then(response => response.json())
       .then(json => this.setState({days: json, isFetching:false }));


    }
  render(){
    const {days , daysName , isFetching} = this.state;

    return (
      <div className="TheSecond" >

<div>
<input className= 'boxName'
value={daysName}
type="text"
 onChange={this.onSeriesInputChange}
/>
</div>
<Para message= "Welcome to Maco Group" />
 { !isFetching && days.length === 0 && daysName.trim() === ''
 &&
  <p> please enter a Name </p>
}
{
  !isFetching && days.length === 0 && daysName.trim() !== ''
  &&
  <p> No such thing as you want see  </p>
}
{
  isFetching && <Loader />
}
    <SeriesList list={this.state.days} />
       </div>
    )
  }
}

 export default Series;
