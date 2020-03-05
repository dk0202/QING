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


import FunctionInput from '../../components/FunctionInput/FunctionInput.js'
import ProgramSettings from '../../components/ProgramSettings/ProgramSettings.js'
import VerificationConditions from '../../components/VerificationConditions/VerificationConditions.js'
import InvariantResults from '../../components/InvariantResults/InvariantResults.js'

class Home extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {


    return (
      <div className='container'>
        <div className="jumbotron">
          <h2 className="display-4"><b>Q</b>uantifier Elimination <b>IN</b>variant <b>G</b>enerator</h2>
          <p className="lead">This tool is designed to parse simple imperative functions containing loops and use the method of quantifier elimination to automatically generate loop invariants.
            To read more about the method of quantifier elimination, please read Professor Kapur's paper <a href="https://www.cs.unm.edu/~kapur/mypapers/aca2004.pdf">here</a>.
          </p>
          <hr className="my-4"/>
            <p>For more information on input format, tool options, and output contents, please visit the help page.</p>
            <a className="btn btn-primary btn-lg" href="/help" role="button">View Help</a>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <FunctionInput/>
          </div>
          <div className='col-md-6'>
<ProgramSettings/>
          </div>
        </div>
<hr/>
        <div className='row'>
          <div className='col-md-6'>
            <VerificationConditions/>
          </div>

        </div>
        <div className='row'>
          <div className='col-md-12'>
            <InvariantResults/>
          </div>

        </div>
        <hr/>

        </div>
    )
  }
}


const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
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
)(Home)
