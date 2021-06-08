import React, { Component } from 'react';

class Term extends Component {
  
  render() {
    return (
      <button onClick={() => {this.props.onClickTerm(this.props.tid,this.props.name)}} className="btn btn-secondary m-2">{this.props.name}</button>
      // il faut faire passer la référence de la fonction au moment du click pour pouvoir faire appel à la fonction onClickTerm avec un paramètre
    );
  }
}

export default Term;