import DomUtils from "./../utils/DomUtils.js";

export default class Form extends DomUtils {
  constructor(parentElt, form_elements) {
    super();
    // Création de la balise form
    this.domForm = this.createCompleteDomElement("form",
      "",
      [{
        name: "class",
        value:"hidden"
      }],
      parentElt);
    console.log('inputs : ', form_elements.inputs);
    for (const elt of form_elements.inputs) {
      // Création des inputs
      this.createCompleteDomElement("label",
        elt.label.name + " ",
        [{
          name: "for",
          value: elt.label.for
        }],
        this.domForm);

      this.createCompleteDomElement("input",
        "",
        [
          {
            name: "id",
            value: elt.input.id
          },
          {
            name: "type",
            value: elt.input.type
          }
        ],
        this.domForm);
      
        this.createCompleteDomElement("br","",[],this.domForm);
     
    }
    
    return this.domForm;

  }
}
