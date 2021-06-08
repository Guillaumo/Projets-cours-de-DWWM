import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {

  // handleModifyCard= (card_id,question) => {
  //   return [card_id,question]
  // }

  render() {
    return (
      
      <section id={this.props.cid} className="m-2 d-block">
        <div className="d-flex">
          <button onClick={() => {this.props.onClickAddCard(this.props.cid,this.props.name)}} type="button" data-toggle="modal" data-target="#myModal" className="btn btn-success ml-0 mt-2 mr-2 mb-2" >+</button>
          <h3>{this.props.name}</h3>
        </div>
        {this.props.cards.map(card => <Card 
        onClickModifyCard={this.props.handleModifyCard}
        key={card.id}
        card_id={card.id}
        question={card.question}
        answer={card.reponse}
        explanation={card.explication}
        cid={this.props.cid}
        />)}

      </section>

    )
  }

  

}

export default Column;