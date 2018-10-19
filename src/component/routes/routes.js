import React from 'react';
import {Switch , Route } from 'react-router-dom';
import Series from '../../containers/series/index';
import SingleSeries from '../../containers/SingleSeries/Single';


const Road = props =>(
<Switch>
 <Route exact path="/" component={Series} />
 <Route  path="/days/:id" component={SingleSeries}/>
</Switch>
);


export default Road;
