import React, { Component } from 'react';
import { Section} from './style/style';
import  { Input } from '../../../theme/input'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import {coupan , deletecoupan, getcoupan  , checkcoupan}  from '@/redux/actions/merchantActions';
// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css'; 
import { connect } from 'react-redux';
import Navbar from '../dashboard/Navbar'
import Loader from '../Loader/Loader';

 class Coupan extends Component {


    state = {    
      errors: {},
        coupan:'',
        percent:'',
        start: new Date(), 
        end: new Date()

     }; 
  async  componentDidMount() {
       await this.props.getcoupan()
       await this.props.checkcoupan()
    }
          startChange = date =>  {
  

            this.setState({start: date});
      };

    componentWillReceiveProps(nextProps) {
      
  
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
      endChange = date =>  {
  

        this.setState({end: date});
  };
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      onSubmit =  async e => {
         if( this.state.coupan === '' ){
       

         }

        e.preventDefault();
        const Data = {
            coupan: this.state.coupan,
         percent: this.state.percent,
            start: this.state.start,
             end: this.state.end,
           


           
          };
      
         this.props.coupan(Data)
    };
      

    onDelete = (id) => {
       
      const data = {
        idd:id
      }
 this.props.deletecoupan(data)
    }
    render() {
  const { coupan} = this.props.admin;
  const { errors } = this.state;
        if( coupan === null) {
            return (
            <div>
             <Loader/>
            </div>
            )}
        return (
          <React.Fragment>
                   <Navbar/>
      
            <Section>
              <div className="flex" > 

              <div className="flex1" >
              <div className="flex-1">
                  <div className='head'>
                      <h2> Add Coupan </h2>
                  </div>
                
                 <form noValidate onSubmit={this.onSubmit} >
                 <div className="input-field">
                   <Input
                    error={errors.coupan}
                   value={this.state.coupan}
                   onChange={this.onChange}
                   id="coupan"
                    placeholder="add Coupan" >
                    </Input>
                    <span className="red-text">
                  {errors.coupan}
                
                </span>
 </div>
 <div className="input-field">
                   <select onChange={this.onChange} error={errors.percent}
           
         id="percent"  value={this.state.percent} >
                 
    <option value=''>---Percent-----</option>
    <option value='5'>5%</option>
    <option value='10'>10%</option>
    <option value='15'>15%</option>
    <option value='20'>20%</option>
    <option value='35'>25%</option>
    <option value='35'>35%</option>
    <option value='50'>50%</option>
  </select>
  <span className="red-text">
                  {errors.percent}
                
                </span>

</div>

    <DatePicker  id="start"   className="date"     selected={this.state.start}        onChange={this.startChange}      />    
  <div className="input-field"> <DatePicker   id="end" className="date"   error={errors.date}    selected={this.state.end}        onChange={this.endChange}      />  
   <span className="red-text">
                  {errors.date}
                
                </span>  </div>  
                
                 <button  type="submit" > Add </button>
                 </form>




              </div>
              

              <div  className="flex-2" >
              <div className='head'>
                      <h2> Coupan</h2>
                  </div>

                  {coupan.map((number) =>
                    <div  key={number._id} className={number.status} >
                     
                  <h3>{number.coupan}</h3>
                  <h3>{number.percent}%</h3>  
                      
                      <div  className="btn" >
                      <i onClick={() => this.onDelete(number._id)} className="fas fa-trash-alt"></i>
                     

                      </div>
                    </div>

                  )}
              </div>
              </div>
               </div>
            </Section>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    admin:state.admin,
    errors: state.errors
  });
export default connect(
    mapStateToProps,
    { coupan  , getcoupan , deletecoupan, checkcoupan}
)(Coupan);
