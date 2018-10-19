import React from 'react';
import { Link } from 'react-router-dom'
import './list.css'

const SeriesListItem = ({days}) => (
  <li >
  <Link to={`/days/${days.show.id}`} >
   {days.show.name}
   </Link>
   </li>
)


const SeriesList = (props) => {

  return (
    <div>
  <ul className= "SeriesList">
    {props.list.map(days => (
    < SeriesListItem days={days} key={days.show.id} />
    ))}
  </ul>
     </div>
  )
}
export default SeriesList;
