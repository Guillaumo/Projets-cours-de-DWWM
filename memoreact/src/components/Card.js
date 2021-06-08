import React, { Component } from 'react';

class Card extends Component {
  
  render() {
    return (
      <article className="mb-4 card bg-secondary p-1 pb-3 text-light">
        <h5>{this.props.question}</h5>
        <div className="d-flex justify-content-between">
          <button className="btn btn-warning">Proposez une réponse</button>
          <button onClick={() => {this.props.onClickModifyCard(this.props.card_id,this.props.question,this.props.answer,this.props.explanation,this.props.cid)}} className="btn btn-dark">Modifier la carte</button>
        </div>
        {/* <p>{this.props.answer}</p> */}
      </article>
    );
  }
}

export default Card;