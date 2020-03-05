import React from 'react';
var Latex = require('react-latex');

const txt = `$$ T_1\\impliesT_2|_{\\langle a,b \\rangle }^{\\langle 1,y\\rangle}$$`
class VC extends React.Component {

  getLeftSide(){
    const L = this.props.VC.left;
    let base =`T_${L.loopIndex}`;
    if (L.substitutions.length != 0){

      var subs_low = L.substitutions.map(s=>{return s.var})
      var subs_high = L.substitutions.map(s=>{return s.assignment})
      base += `|_{${subs_low}}^{}`;
    }
    if (L.condition){


      base += `\\land ${L.condition}`;
    }

    return base;

  }

  getRightSide(){
    const R = this.props.VC.right;
    let base =`T_${R.loopIndex}`;
    if (R.substitutions.length != 0){

      var subs_low = R.substitutions.map(s=>{return s.var})
      var subs_high = R.substitutions.map(s=>{return s.assignment})

      base += `|_{\\langle ${subs_low} \\rangle }^{\\langle ${subs_high}\\rangle }`;
    }
    return base ;

  }

  getVCEquation(){
    return '$$' + this.getLeftSide() + '\\implies ' + this.getRightSide() + '$$';
  }

  render() {
    if (!this.props.VC) return <div/>;

    return (
      <div style={{marginTop: '10px',marginBottom:'10px', marginLeft:'20px'}}>
        <Latex >{this.getVCEquation()}</Latex>
        <br/>
      </div>
    );
  }
}

export default VC;

