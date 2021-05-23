import DomUtils from "./../utils/DomUtils.js";

export default class ModalCard extends DomUtils {
  constructor(id_column, id_term, app) {
    super();
    // Propriétés
    this.id_column = id_column;
    this.id_term = id_term;
    // On récupère une référence à l'instance de l'application (app)
    this.app = app;
    //on initialise l'id du ModalCard
    this.id = "modalAddCard";
    this.card = {};
    // Création et récupération des élements de base du dom dans l'objet this.domElement
    // this.domElement est une propriété de type objet
    this.domElement = this.render();

    // Gestion des événements
    this.manageEvents();

  }


  manageEvents() {
    // Gestion du bouton de fermeture du modal
    this.domElement.buttonClose_modalCard.onclick = () => {
      this.domElement.div_modalCard.remove();
    }
    // Gestion de la sousmission de la création d'une carte
    this.domElement.form_modalCard_body.onsubmit = (event) => {
      event.preventDefault();
      // Fonction d'ajout d'une carte addCard
      // Déclaration des paramètres de la fonction
      this.card = {
        question: this.domElement.inputQuestion_modalCard_Form.value,
        reponse: this.domElement.inputAnswer_modalCard_Form.value,
        explication: this.domElement.inputExp_modalCard_Form.value,
        colonne: this.id_column
      }
      const termid = this.id_term;
      //vérification des arguments à transmettre
      console.log('termid dans ModalCard : ', termid);
      console.log('this.card dans ModalCard : ', this.card);
      console.log('this.app.user dans ModalCard : ', this.app.user);
      // appel de la fonction
      this.app.fd.addCard(this.app.user, this.card, termid)
        .then((data) => {
          console.log('Card ajoutée dans mannageEvents : ', data);
        })
        .catch((error) => {
          console.error('Erreur attrapée dans manageEvents de ModalCard :' + error.message);
        });

    }
  }

  render() {
    // The modal
    const div_modalCard = this.createCompleteDomElement("div", "", [
      {
        name: "id",
        value: this.id
      },
      {
        name: "class",
        value: "modal fade"
      },
      {
        name: "role",
        value: "dialog"
      }
    ], document.getElementById("app"));
    // Inside the modal : the modal dialog
    const div_modalCard_diag = this.createCompleteDomElement("div", "", [
      {
        name: "id",
        value: "modalAddCard_diag"
      },
      {
        name: "class",
        value: "modal-dialog"
      }
    ], document.getElementById(this.id));
    // Inside the modal dialog : the modal content
    const div_modalCard_content = this.createCompleteDomElement("div", "", [
      {
        name: "id",
        value: "modalAddCard_content"
      },
      {
        name: "class",
        value: "modal-content"
      }
    ], document.getElementById("modalAddCard_diag"));
    // Inside the modal content : the modal header
    const div_modalCard_header = this.createCompleteDomElement("div", "", [
      {
        name: "id",
        value: "modalAddCard_header"
      },
      {
        name: "class",
        value: "modal-header"
      }
    ], document.getElementById("modalAddCard_content"));
    // Inside the modal header : the modal title
    const h4_modalCard = this.createCompleteDomElement("h4", "Gérer la carte", [
      {
        name: "id",
        value: "modalAddCard_title"
      },
      {
        name: "class",
        value: "modal-title"
      }
    ], document.getElementById("modalAddCard_header"));
    // Inside the modal header : the modal close button
    const buttonClose_modalCard = this.createCompleteDomElement("button", "x", [
      {
        name: "id",
        value: "modalAddCard_buttonClose"
      },
      {
        name: "type",
        value: "button"
      },
      {
        name: "class",
        value: "close"
      },
      {
        name: "data-dismiss",
        value: "modal"
      }
    ], document.getElementById("modalAddCard_header"));
    // Inside the modal content : the modal body
    const div_modalCard_body = this.createCompleteDomElement("div", "", [
      {
        name: "id",
        value: "modalAddCard_body"
      },
      {
        name: "class",
        value: "modal-body"
      }
    ], document.getElementById("modalAddCard_content"));
    // Inside the modal body : title h3
    const h3_modalCard_body = this.createCompleteDomElement("h3", "Modification de la carte", [], document.getElementById("modalAddCard_body"));
    // Inside the modal body : form for a new card
    const form_modalCard_body = this.createCompleteDomElement("form", "", [
      {
        name: "id",
        value: "modalAddCard_bodyForm"
      }
    ], document.getElementById("modalAddCard_body"));
    // Inside the form : fielset for the question
    const fielsetQuestion_modalCard_Form = this.createCompleteDomElement("fieldset", "", [
      {
        name: "id",
        value: "modalAddCard_fieldsetQuestion"
      }
    ], document.getElementById("modalAddCard_bodyForm"));
    // Inside the fieldset question : the label question
    const labelQuestion_modalCard_Form = this.createCompleteDomElement("label", "Question : ", [
      {
        name: "id",
        value: "modalAddCard_labelQuestion"
      },
      {
        name: "for",
        value: "modalAddCard_inputQuestion"
      }
    ], document.getElementById("modalAddCard_fieldsetQuestion"));
    // Inside the fieldset question : the input question
    const inputQuestion_modalCard_Form = this.createCompleteDomElement("input", "", [
      {
        name: "id",
        value: "modalAddCard_inputQuestion"
      },
      {
        name: "type",
        value: "text"
      }
    ], document.getElementById("modalAddCard_fieldsetQuestion"));
    // Inside the form : fielset for the answer
    const fielsetAnswer_modalCard_Form = this.createCompleteDomElement("fieldset", "", [
      {
        name: "id",
        value: "modalAddCard_fieldsetAnswer"
      }
    ], document.getElementById("modalAddCard_bodyForm"));
    // Inside the fieldset answer : the label answer
    const labelAnswer_modalCard_Form = this.createCompleteDomElement("label", "Réponse : ", [
      {
        name: "id",
        value: "modalAddCard_labelAnswer"
      },
      {
        name: "for",
        value: "modalAddCard_inputAnswer"
      }
    ], document.getElementById("modalAddCard_fieldsetAnswer"));
    // Inside the fieldset answer : the input answer
    const inputAnswer_modalCard_Form = this.createCompleteDomElement("textarea", "", [
      {
        name: "id",
        value: "modalAddCard_inputAnswer"
      },
      {
        name: "type",
        value: "text"
      }
    ], document.getElementById("modalAddCard_fieldsetAnswer"));
    // Inside the form : fielset for the explanation
    const fielsetExp_modalCard_Form = this.createCompleteDomElement("fieldset", "", [
      {
        name: "id",
        value: "modalAddCard_fieldsetExp"
      }
    ], document.getElementById("modalAddCard_bodyForm"));
    // Inside the fieldset explanation : the label explanation
    const labelExp_modalCard_Form = this.createCompleteDomElement("label", "Explication : ", [
      {
        name: "id",
        value: "modalAddCard_labelExp"
      },
      {
        name: "for",
        value: "modalAddCard_inputExp"
      }
    ], document.getElementById("modalAddCard_fieldsetExp"));
    // Inside the fieldset explanation : the input explanation
    const inputExp_modalCard_Form = this.createCompleteDomElement("textarea", "", [
      {
        name: "id",
        value: "modalAddCard_inputExp"
      },
      {
        name: "type",
        value: "text"
      }
    ], document.getElementById("modalAddCard_fieldsetExp"));
    // Inside the form : the submit button
    const button_modalCard_Form = this.createCompleteDomElement("button", "Envoyer", [
      {
        name: "type",
        value: "submit"
      }
    ], document.getElementById("modalAddCard_bodyForm"));
    // Inside the modal content : the modal body
    const div_modalCard_footer = this.createCompleteDomElement("div", "", [
      {
        name: "class",
        value: "modal-footer"
      }
    ], document.getElementById("modalAddCard_content"));

    return {
      div_modalCard: div_modalCard,
      div_modalCard_diag: div_modalCard_diag,
      div_modalCard_content: div_modalCard_content,
      div_modalCard_header: div_modalCard_header,
      h4_modalCard: h4_modalCard,
      buttonClose_modalCard: buttonClose_modalCard,
      div_modalCard_body: div_modalCard_body,
      h3_modalCard_body: h3_modalCard_body,
      form_modalCard_body: form_modalCard_body,
      fielsetQuestion_modalCard_Form: fielsetQuestion_modalCard_Form,
      labelQuestion_modalCard_Form: labelQuestion_modalCard_Form,
      inputQuestion_modalCard_Form: inputQuestion_modalCard_Form,
      fielsetAnswer_modalCard_Form: fielsetAnswer_modalCard_Form,
      labelAnswer_modalCard_Form: labelAnswer_modalCard_Form,
      inputAnswer_modalCard_Form: inputAnswer_modalCard_Form,
      fielsetExp_modalCard_Form: fielsetExp_modalCard_Form,
      labelExp_modalCard_Form: labelExp_modalCard_Form,
      inputExp_modalCard_Form: inputExp_modalCard_Form,
      button_modalCard_Form: button_modalCard_Form,
      div_modalCard_footer: div_modalCard_footer
    }
  }

  // Méthode pour afficher le modal une fois construit par render()
  showTheModal() {
    // const div_modalCard=document.getElementById(this.id);
    this.domElement.div_modalCard.style.display = "block";
    this.domElement.div_modalCard.style.overflow = "visible";
    this.domElement.div_modalCard.className = "modal fade show";
  }

}