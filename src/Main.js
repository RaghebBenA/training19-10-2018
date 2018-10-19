import React, { Component } from 'react';
import "./test.css";
import Road from './component/routes/routes';
import Particles from 'react-particles-js';
import paticlesOptions from './component/particles/paricles'
import 'whatwg-fetch';


class Mainpage extends Component {

    render() {
        return (
          <div>
          <Particles className="background" prams={paticlesOptions} />
          <label >
            <div className="Redback" >
                <button className="TheTitle" >Maco Group</button>
                </div>
                <Road />
                </label>
                </div>
        );
    }
}

export default Mainpage;
