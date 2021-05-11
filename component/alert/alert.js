import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Alertt} from './Style/alert'

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Alertt>
      <div   className="center">
        <div></div>
    <div key={alert.id} className={`${alert.alertType}`}>
    <i class="far fa-check-circle"></i>
    
    <h3> {alert.msg}</h3>
  
      </div>
    </div>
    </Alertt>
  
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);