import DomUtils from "./../utils/DomUtils.js";

export default class Card extends DomUtils {
  constructor(id, question, answer, id_column, app) {
    super();
    // Propriétés
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.id_column = id_column;

    // On récupère une référence à l'instance de l'application (app)
    this.app = app;

    // Création et récupération des élements de base du dom dans l'objet this.domElement
    // this.domElement est une propriété de type objet
    this.domElement = this.render();
  }

  render() {
    const card_article = this.createCompleteDomElement("article", "", [
      {
        name: "id",
        value: this.id
      }
    ], document.getElementById(this.id_column));
    const card_title = this.createCompleteDomElement("h4", this.question, [], document.getElementById(this.id));
    const card_button = this.createCompleteDomElement("button", "Proposez une réponse", [], document.getElementById(this.id));
    return {
      card_article: card_article,
      card_title: card_title,
      card_button: card_button
    }
  }
}