import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faClipboard ,faShare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { Route, Switch } from './node_modules/react-router-dom';
// import InfoModal from './../../components/InfoModal/InfoModal';
import "./Fab.scss";
import { handleFabIcon } from './../../actions'

class Fab extends Component {
  //   <Switch>
  //      <Route exact path="/" component={InfoModal} />
  //   </Switch>
  render() {
    return (
      <>
        <div class="fabContainer">
          <button disabled class="infoFabButton">
            <FontAwesomeIcon className="icon" 
                icon = {
                this.props.fabIcon == 'clipboard' ? faClipboard :
                this.props.fabIcon == 'back' ? faChevronLeft : 
                faInfo } 
                size="xs" />
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    fabIcon: state.fab.fabIcon,
});

export default connect(mapStateToProps, { handleFabIcon })(Fab);