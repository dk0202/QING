import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import Equation from './Equation'
import { ButtonComponent, CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons'
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ListViewComponent } from '@syncfusion/ej2-react-lists'

import { PythonShell } from 'python-shell'

var Latex = require('react-latex')


class InvariantResults extends React.Component {
  constructor(props) {
    super(props)


  }


  render() {

    if (!this.props.resp) return <div/>;


    return (
      <div>
        <hr/>
        {this.props.resp.n_invariants > 0 ? (
          <div className="alert alert-success" role="alert">
            <h5>Invariants Found</h5>

            {/*<h5>Number of Invariants Found: <b>{this.props.resp.n_invariants}</b></h5>*/}
          </div>


        ) : (
          <div className="alert alert-warning" role="alert">
            <h5>No Invariants Found</h5>
          </div>

        ) }

        <div className='row'>

          <div className='col-md-12'>
            <h3>Verification Condition Constraints:</h3>
            <br/>

            {this.props.resp.verification_conditions.map(vc => {
              return (

                <React.Fragment>
                  <div className='row'>
                    <div className='col-md-6'>
                      <Equation VC={vc}/>


                    </div>
                    <div className='col-md-6'>
                      {vc.constraints.map(c => {
                        return (
                          <div>
                            <Latex>{'$$' + c + ' = 0 $$'}</Latex>
                          </div>
                        )
                      })}

                    </div>
                  </div>
                  <br/>
                  <br/>
                </React.Fragment>
              )

            })}

          </div>
        </div>


        <div className='row'>

          <div className='col-md-6'>
            <h3>Reduced Template Function(s):</h3>
            <br/>
            {this.props.resp.reduced_templates.map(t => {
              return (
                <React.Fragment>

                  <div className='row'>
                    <div className='col-md-12'>

                      <Latex>{'$$' + t + ' = 0 $$'}</Latex>
                    </div>
                  </div>
                  <br/>
                </React.Fragment>

              )
            })}

            <br/>
          </div>
          <div className='col-md-6'>

            <h3>Invariants Discovered:</h3>
            <br/>

            {this.props.resp.n_invariants > 0 ? (
              <div className="alert alert-success" role="alert">
                {this.props.resp.invariants.map(t => {
                  return (
                    <React.Fragment>

                      <div className='row'>
                        <div className='col-md-12'>

                          <Latex>{'$$' + t + ' = 0 $$'}</Latex>
                        </div>
                      </div>
                      <br/>
                    </React.Fragment>

                  )
                })}
              </div>


            ) : (
              <div className="alert alert-warning" role="alert">
                <h5>No Invariants Found</h5>
              </div>

            ) }


          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ funct,submit }) => ({
  isParsed: funct.isParsed,
  variables: funct.variables,
  verificationConditions: funct.verificationConditions,
  n_loops: funct.n_loops,
  initialAssignments: funct.initialAssignments,
  resp: submit.result,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvariantResults)
