import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  parse_function,
} from '../../modules/funct'

import { ButtonComponent, CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import Equation from './Equation';

class VerificationConditions extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {


    return (
      <div>
        <h3>Verification Conditions</h3>

        <div className='row'>
          <div className='col-md-12'>
            {this.props.verificationConditions.length == 0 ? "Parse function to view verification conditions" : this.props.verificationConditions.map(vc=>{
              return (
                <Equation VC={vc}/>
              );
            })}
          </div>


        </div>


      </div>
    );
  }
}


const mapStateToProps = ({ funct }) => ({
  functionBody: funct.functionBody,
  verificationConditions: funct.verificationConditions
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
)(VerificationConditions)
