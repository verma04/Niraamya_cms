import React from 'react'

import {Draw} from './Style/Dash';

import {logoutUser} from '@/redux/actions/authActions'
import Router, { withRouter } from 'next/router'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Image from 'next/image';
class Drawer extends React.Component {

   
  
    componentDidUpdate(prevProps) {
      if (!prevProps.visible && this.props.visible) {
        setTimeout(() => this.refs.container.focus(), 350);
      }
    }
  
    render() {
      const { id, visible } = this.props;
     
  
      return (
        <div
          ref="container"
          id={id}
          role="navigation"
          className="Drawer"
          aria-hidden={visible ? 'false' : 'true'}
          tabIndex="0">
          {this.props.children}
        </div>
      );
    }
  }
  
  class NavbarMer extends React.Component {
  
    state = {
      visible: false
    };
  
    onClick(index) {
      this.setState({
        visible: !this.state.visible
      });
    }
  
    render() {
      const { visible } = this.state;
      const { isAuthenticated } = this.props.auth;
      return (
        <Draw>
            <div className="flex">
          <div className="left" >
          <i  className="fas fa-bars"  
            onClick={this.onClick.bind(this)}
            aria-controls="navigation"
            aria-expanded={visible ? 'true' : 'false'}>
         <span>{visible ? 'Navigation' : 'Navigation'} </span>   
          </i >
          </div>
          <div onClick={() => this.props.logoutUser() } className="right" >
          <span>Logout  </span>
          <i className="fas fa-sign-out-alt"></i>
          </div>
          </div>
         
          {(() => {
        if (isAuthenticated === true) {
          return (
            <Drawer id="navigation" visible={visible}>
            <div    onClick={this.onClick.bind(this)} className="popUp" >
            <li  onClick={this.onClick.bind(this)} id="menu" > <i className="fas fa-bars"></i>  </li>
          <ul id="up">
            <li> <i className="fas fa-home"></i> <a href="/admin-dashboard">Home  </a> </li>
            <li> <i class="fas fa-clipboard-list"></i><a href="/admin-products">Products</a>  </li>
            <li> <i className="fas fa-sort-amount-up-alt"></i> <a href="/admin-orders">Orders </a> </li>
            <li> <i className="fas fa-file"></i><a href="/admin-pages">Pages</a>  </li>
           
            <li> <i className="fas fa-users"></i><a href="/admin-costomer">Costomers</a>  </li>
            <li> <i className="fas fa-tags"></i><a href="/admin-coupan">Coupan</a>  </li>
            <li> <i className="fas fa-cart-plus"></i><a href="/admin-bulkorder">Bulk Order</a>  </li>
          </ul>
          <ul>
        
            <li> <i className="fas fa-sign-out-alt"></i> <a  onClick={() => this.props.logoutUser() } >Logout</a>  </li>
            
          </ul>
          </div>
        </Drawer>

          )
        }  else {
          return (
             null
          )
        }
      })()}


        </Draw>
      );
    }
  }
  NavbarMer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };


  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavbarMer);