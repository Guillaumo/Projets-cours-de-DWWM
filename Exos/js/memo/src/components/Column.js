import DomUtils from "./../utils/DomUtils.js";

export default class Column extends DomUtils {
  constructor(id, name, id_term, app) {
    super();
    //Propriétés
    this.id = id;
    this.name = name;
    this.id_term = id_term;

    this.cards = []; // à supprimer ?

    // On récupère une référence à l'instance de l'application (app)
    this.app = app;

    // Création et récupération des élements de base du dom dans l'objet this.domElement
    // this.domElement est une propriété de type objet
    this.domElement = this.render();

    // Gestion des événements
    this.manageEvents();
  }

  manageEvents() {
    // Gestion du click sur un bouton + d'une colonne (ajout d'une carte)
    this.domElement.button_plus.onclick = () => {
      console.log('On est dans la class Column');
      console.log('click sur le + de : ', this.name + " n° : ", this.id);
      // On retourne l'id de la colonne et l'id du term cliqué correspondants dans la class App pour afficher le modal d'ajout de carte
      return this.app.showModal(this.id, this.id_term);
    }
  }

  render() {
    const term_column = this.createCompleteDomElement(
      "section",
      "",
      [
        {
          name: "id",
          value: this.id
        },
        {
          name: "class",
          value: "d-block"
        }
      ],
      document.getElementById("tab_term")
    );

    const button_plus = this.createCompleteDomElement("button", "+", [
      {
        name: "type",
        value: "button"
      },
      {
        name: "class",
        value: "btn btn-success d-inline"
      },
      {
        name: "data-toggle",
        value: "modal"
      },
      {
        name: "data-target",
        value: "#modalAddCard"
      }
    ], document.getElementById(this.id));
    const title_column = this.createCompleteDomElement("h3", this.name, [
      {
        name: "class",
        value: "d-inline"
      }
    ], document.getElementById(this.id));

    return {
      term_column: term_column,
      button_plus: button_plus,
      title_column: title_column
    }
  }

}