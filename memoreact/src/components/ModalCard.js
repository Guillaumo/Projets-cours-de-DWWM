import React, { Component } from 'react';

class ModalCard extends Component {
  
  deleteButton() {
    if(this.props.card[0].id) {
      //console.log('Dans Modalcard, card_id : ',this.props.card[0].id);
      return (
        <button onClick={() => {this.props.onClickDelCard(this.props.card[0].id)}} type="button" className="btn btn-danger" data-dismiss="modal">Supprimer</button>
      )
    }
  }

  render() {
    //console.log('Dans Modalcard, card_id : ',this.props.card[0].id);
    return (
      <div className="row">
        <div className="col">

          {/* <!-- The Modal --> */}
          <div className="modal fade show" id="myModal" style={{display: "block", overflow: "visible"}}>
            <div className="modal-dialog">
              <div className="modal-content">

              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">Gérer la carte</h4>
                <button onClick={() => {this.props.onClickCloseModal()}} type="button" className="close" data-dismiss="modal">x</button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <h3>Modification de la carte</h3>
                <form action="" id="form_modal" onSubmit={(e) => {this.props.onSubmitModal(e)}}>
                  <fieldset className="m-2">
                    <label htmlFor="question" className="m-2">Question :</label>
                    <input type="text" name="question" id="question" className="input-large" defaultValue={this.props.card[0].question}/>
                  </fieldset>
                  <fieldset className="m-2">
                    <label htmlFor="answer" className="m-2">Réponse :</label>
                    <textarea name="answer" id="answer" className="textarea-large" defaultValue={this.props.card[0].reponse}></textarea>
                  </fieldset>
                  <fieldset className="m-2">
                    <label htmlFor="explanation" className="m-2 label-large">Explication :</label>
                    <textarea name="explanation" id="explanation" className="textarea-large" defaultValue={this.props.card[0].explication}></textarea>
                  </fieldset>
                  <input type="submit" className="btn btn-success" value="Envoyer" />
                </form>

              </div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                {this.deleteButton()}
                
              </div>

            </div>
          </div>
        </div>
        </div>
      </div> 
      
    );
  }
}

export default ModalCard;