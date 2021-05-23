






function createCompleteDomElement(tag_name, content, attributes , parent_element) {
  
  // Création d'un élément du DOM mais qui n'est pas encore positionné
  // dans la hiérarchie du document
  const elt = document.createElement(tag_name);

  elt.textContent = content;
  
  for(const attribute of attributes) {
    elt.setAttribute(attribute.name, attribute.value);
  }

  parent_element.append(elt);

  return elt;
};

const button_modal=createCompleteDomElement("button","Ouvrir le modal",[
  {
    name: "type",
    value: "button"
  },
  {
    name: "class",
    value: "btn btn-primary"
  },
  {
    name: "data-toggle",
    value: "modal"
  },
  {
    name: "data-target",
    value: "#modalAddCard"
  }
],
document.getElementById("app"));

// The modal
const div_modalCard=createCompleteDomElement("div","",[
  {
    name: "id",
    value: "modalAddCard"
  },
  {
    name: "class",
    value: "modal"
  },
  {
    name: "role",
    value: "dialog"
  }
],document.getElementById("app"));

// Inside the modal : the modal dialog
const div_modalCard_diag=createCompleteDomElement("div","",[
  {
    name: "id",
    value: "modalAddCard_diag"
  },
  {
    name: "class",
    value: "modal-dialog"
  }
],document.getElementById("modalAddCard"));
// Inside the modal dialog : the modal content
const div_modalCard_content= createCompleteDomElement("div","",[
  {
    name: "id",
    value: "modalAddCard_content"
  },
  {
    name: "class",
    value: "modal-content"
  }
],document.getElementById("modalAddCard_diag"));
// Inside the modal content : the modal header
const div_modalCard_header= createCompleteDomElement("div","",[
  {
    name: "id",
    value: "modalAddCard_header"
  },
  {
    name: "class",
    value: "modal-header"
  }
],document.getElementById("modalAddCard_content"));
// Inside the modal header : the modal title
const h4_modalCard= createCompleteDomElement("h4","Gérer la carte",[
  {
    name: "id",
    value: "modalAddCard_title"
  },
  {
    name: "class",
    value: "modal-title"
  }
],document.getElementById("modalAddCard_header"));
// Inside the modal header : the modal close button
const buttonClose_modalCard= createCompleteDomElement("button","x",[
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
],document.getElementById("modalAddCard_header"));
// Inside the modal content : the modal body
const div_modalCard_body= createCompleteDomElement("div","",[
  {
    name: "id",
    value: "modalAddCard_body"
  },
  {
    name: "class",
    value: "modal-body"
  }
],document.getElementById("modalAddCard_content"));
// Inside the modal body : title h3
const h3_modalCard_body= createCompleteDomElement("h3","Modification de la carte",[],document.getElementById("modalAddCard_body"));
// Inside the modal body : form for a new card
const form_modalCard_body= createCompleteDomElement("form","",[
  {
    name: "id",
    value: "modalAddCard_bodyForm"
  }
],document.getElementById("modalAddCard_body"));
// Inside the form : fielset for the question
const fielsetQuestion_modalCard_Form= createCompleteDomElement("fieldset","",[
  {
    name: "id",
    value: "modalAddCard_fieldsetQuestion"
  }
],document.getElementById("modalAddCard_bodyForm"));
// Inside the fieldset question : the label question
const labelQuestion_modalCard_Form= createCompleteDomElement("label","Question : ",[
  {
    name: "id",
    value: "modalAddCard_labelQuestion"
  },
  {
    name: "for",
    value : "modalAddCard_inputQuestion"
  }
],document.getElementById("modalAddCard_fieldsetQuestion"));
// Inside the fieldset question : the input question
const inputQuestion_modalCard_Form= createCompleteDomElement("input","",[
  {
    name: "id",
    value: "modalAddCard_inputQuestion"
  },
  {
    name: "type",
    value : "text"
  }
],document.getElementById("modalAddCard_fieldsetQuestion"));
// Inside the form : fielset for the answer
const fielsetAnswer_modalCard_Form= createCompleteDomElement("fieldset","",[
  {
    name: "id",
    value: "modalAddCard_fieldsetAnswer"
  }
],document.getElementById("modalAddCard_bodyForm"));
// Inside the fieldset answer : the label answer
const labelAnswer_modalCard_Form= createCompleteDomElement("label","Réponse : ",[
  {
    name: "id",
    value: "modalAddCard_labelAnswer"
  },
  {
    name: "for",
    value : "modalAddCard_inputAnswer"
  }
],document.getElementById("modalAddCard_fieldsetAnswer"));
// Inside the fieldset answer : the input answer
const inputAnswer_modalCard_Form= createCompleteDomElement("textarea","",[
  {
    name: "id",
    value: "modalAddCard_inputAnswer"
  },
  {
    name: "type",
    value : "text"
  }
],document.getElementById("modalAddCard_fieldsetAnswer"));
// Inside the form : fielset for the explanation
const fielsetExp_modalCard_Form= createCompleteDomElement("fieldset","",[
  {
    name: "id",
    value: "modalAddCard_fieldsetExp"
  }
],document.getElementById("modalAddCard_bodyForm"));
// Inside the fieldset explanation : the label explanation
const labelExp_modalCard_Form= createCompleteDomElement("label","Explication : ",[
  {
    name: "id",
    value: "modalAddCard_labelExp"
  },
  {
    name: "for",
    value : "modalAddCard_inputExp"
  }
],document.getElementById("modalAddCard_fieldsetExp"));
// Inside the fieldset explanation : the input explanation
const inputExp_modalCard_Form= createCompleteDomElement("textarea","",[
  {
    name: "id",
    value: "modalAddCard_inputExp"
  },
  {
    name: "type",
    value : "text"
  }
],document.getElementById("modalAddCard_fieldsetExp"));
// Inside the form : the submit button
const button_modalCard_Form= createCompleteDomElement("button","Envoyer",[
  {
    name: "type",
    value: "submit"
  }
],document.getElementById("modalAddCard_bodyForm"));
// Inside the modal content : the modal body
const div_modalCard_footer= createCompleteDomElement("div","",[
  {
    name: "class",
    value: "modal-footer"
  }
],document.getElementById("modalAddCard_content"));

//show the modal
button_modal.addEventListener('click', (e) => {
  div_modalCard.style.display = "block";
  div_modalCard.style.overflow="visible";
  div_modalCard.className="modal fade show"; 
});

//hide the modal
buttonClose_modalCard.addEventListener('click', (e) => {
  div_modalCard.style.display = "none";
  div_modalCard.style.overflow="hidden";
  div_modalCard.className="modal fade";
});

