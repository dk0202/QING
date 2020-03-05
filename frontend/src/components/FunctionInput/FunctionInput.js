import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {EXAMPLE_FUNCTIONS} from "../../examples";

import {
  parse_function,
} from '../../modules/funct'

import './FunctionInput.css';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const demo_function = `
function demo(x){
    s = 0;
    n = 1;
    while (x > 0){
        s = s+n;
        n = n+2;
        x = x-1;
    }
}
`


class FunctionInput extends React.Component {
  constructor(props) {
    super(props);
    this.textareaObj = React.createRef();
  }

  loadDemoFunction(){
    this.textareaObj.value = EXAMPLE_FUNCTIONS[this.listObj.value].function_body;
  }
  onParseFunctionClick(){

    var functionBody = this.textareaObj.value;
    this.props.parse_function(functionBody);
  }




  render() {


    return (
      <div>
        <h3>Function Source Code Input</h3>

        <div className='row' style={{margin:'20px 0px'}}>

          <div className='col-md-6'>
            <b>Demo Functions</b>
          </div>
          <div className='col-md-6'>
            <DropDownListComponent id="games"
                                   ref={(dropdownlist) => { this.listObj = dropdownlist; }}
                                   dataSource={Object.keys(EXAMPLE_FUNCTIONS)}
                                   change={this.loadDemoFunction.bind(this)}
                                   value={'Simple Loop'}
                                   placeholder="Select a game" popupHeight="220px"/>
          </div>
        </div>
        <TextBoxComponent
          style={{minHeight: '500px'}}
          value={demo_function}
          height='500'
          id='default'
          multiline={true}
          floatLabelType="Never"
          placeholder="Enter function code here..."
          ref = {(scope) => {this.textareaObj = scope}}></TextBoxComponent>

        <ButtonComponent cssClass='e-primary' style={{marginTop:'20px'}} onClick={()=>{this.onParseFunctionClick()}}>Parse Function</ButtonComponent>

      </div>
    );
  }
}



const mapStateToProps = ({ funct }) => ({
  functionBody: funct.functionBody,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      parse_function,
    },
    dispatch
  )


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunctionInput)
