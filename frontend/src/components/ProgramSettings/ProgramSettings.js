import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../modules/counter";


import {
  submit_request
} from "../../modules/submit";

import { ButtonComponent, CheckBoxComponent, RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { TextBoxComponent, NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";

import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { parse_function } from "../../modules/funct";


const axios = require("axios");

class ProgramSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAutogen: true
    };
    this.varListRef = React.createRef();
    this.autogenCheckbox = React.createRef();
    this.ineqCheckbox = React.createRef();
    this.termDegree = React.createRef();
    this.userTerms = React.createRef();

  }

  useAutoTerms() {
    return this.autogenCheckbox.checked;
  }

  async getData(functionData) {
    try {
      let res = await axios({
        url: 'http://localhost:8000/generate/',
        method: 'post',
        timeout: 8000,
        headers: {
          'Content-Type': 'application/json',
        },
        data: functionData,
      })
      if(res.status == 200){
        console.log(res.status)
      }
      return res.data
    }
    catch (err) {
      console.error(err);
    }
  }


  async getResponse(functionData){

    axios.post("http://localhost:8000/generate/", functionData)
      .then(function(response) {
        // alert(JSON.stringify(response));
        return response.data;
      })
      .catch(function(error) {
        // alert(JSON.stringify(error));
        console.log(error);
        return error;
      });

  }
  getRunSettings() {

    var settings = {
      inequality: this.ineqCheckbox.checked,
      autogen_terms: this.autogenCheckbox.checked,
      variables: this.varListRef.getSelectedItems().text,
      autoDegree: this.termDegree.value,
      verificationConditions: this.props.verificationConditions,
      n_loops: this.props.n_loops,
      initialAssignments: this.props.initialAssignments,
      userTerms: this.userTerms.value ? this.userTerms.value.split(",") : null,
    };
    this.getData(settings)
      .then(res =>{this.props.submit_request(res)})


  }

  render() {


    return (
      <div>
        <h3>Tool Settings</h3>
        <br/>
        <div className='row'>
          <div className='col-md-6'>
            <CheckBoxComponent checked={true} label='Autogenerate polynomial terms' ref={(scope) => {
              this.autogenCheckbox = scope;
            }}></CheckBoxComponent>
          </div>
          <div className='col-md-6'>
            <NumericTextBoxComponent format='#' value={1} min={1} max={5} step={1} ref={(scope) => {
              this.termDegree = scope;
            }}>

            </NumericTextBoxComponent>
          </div>
        </div>
        <br/>
        <div className='row'>
          <div className='col-md-12'>

            <TextBoxComponent placeholder='User supplied terms (ex. "x**2, x")' ref={(scope) => {
              this.userTerms = scope;
            }}></TextBoxComponent>
          </div>
        </div>
        <br/>
        {/*<div className='row'>*/}
          {/*<div className='col-md-12'>*/}

            {/*<CheckBoxComponent checked={false} label='Use inequalities' ref={(scope) => {*/}
              {/*this.ineqCheckbox = scope;*/}
            {/*}}></CheckBoxComponent>*/}
          {/*</div>*/}
        {/*</div>*/}
        <hr/>
        {
          this.props.isParsed ?
            <div className='row'>
              <div className='col-md-12'>
                <h5> Variable Selection</h5>
                <ListViewComponent id="sample-list-flat" dataSource={
                  this.props.variables
                }
                                   ref={(scope) => {
                                     this.varListRef = scope;
                                   }}
                                   showCheckBox={true}></ListViewComponent>

              </div>
            </div>
            :
            <div className='row'>
              <div className='col-md-12'>
                <h5><b>Variable Selection</b></h5>

                <p>Parse a function to view selectable variables</p>

              </div>
            </div>
        }
        <hr/>
        <ButtonComponent cssClass='e-primary'
                         onClick={() => {
                           this.getRunSettings();
                         }} disabled={!this.props.isParsed}>Generate Invariants</ButtonComponent>

      </div>
    );
  }
}


const mapStateToProps = ({ funct }) => ({
  isParsed: funct.isParsed,
  variables: funct.variables,
  verificationConditions: funct.verificationConditions,
  n_loops: funct.n_loops,
  initialAssignments: funct.initialAssignments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submit_request,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramSettings);
