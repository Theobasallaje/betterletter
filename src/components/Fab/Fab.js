import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Route, Switch } from './node_modules/react-router-dom';
// import InfoModal from './../../components/InfoModal/InfoModal';
import './Fab.scss'

const Fab = () => {
    //   <Switch>
    //      <Route exact path="/" component={InfoModal} />
    //   </Switch>
    return (
        <>
            <div class="fabContainer">
                <button disabled class='infoFabButton'>i</button>
            </div>
        </>
    );
};

export default Fab;