import DomUtils from "./../utils/DomUtils.js";

export default class Term extends DomUtils {
  /**
   * la class Term permet de créer des termes que l'on affichera
   * dans le DOM en utilisant la référence de app (instance de l'application) pour avoir accès
   * à ses éléments du dom (header, main ...)
   * @param {number} id 
   * @param {string} name 
   * @param {objet} app 
   */
  constructor(id, name, app) {
    super();
    // Propriétés
    this.id = id;
    this.name = name;

    // On récupère une référence à l'instance de l'application (app)
    this.app = app;


    // Création et récupération des élements de base du dom dans l'objet this.domElement
    // this.domElement est une propriété de type objet
    this.domElement = this.render();

    // Gestion des événements
    this.manageEvents();

  }

  manageEvents() {

    // Gestion du click sur un bouton de terme (rubrique)
    this.domElement.onclick = () => {
      console.log('on est dans la class Term');
      console.log('nom du terme :', this.name, ' n° du terme :', this.id);

      // Test : des colonnes d'un terme donné sont déjà affichées ?
      if (document.getElementById('title_term')) {
        document.getElementById('title_term').remove();
        document.getElementById('tab_term').remove();
      }
      // Affichage du nom du terme sélectionné (clické) et
      // construction du block qui va recevoir les colonnes
      this.createCompleteDomElement("h2", this.name, [
        {
          name: "id",
          value: "title_term"
        }
      ],
        this.app.domElements.main
      );
      this.createCompleteDomElement("section", "", [
        {
          name: "id",
          value: "tab_term"
        },
        {
          name: "class",
          value: "d-flex justify-content-around"
        }
      ],
        this.app.domElements.main
      );
      // Appel de la fonction qui permet d'aller chercher les cartes
      this.app.fd.getCards(this.app.user, this.app.token, this.id)
        .then((data) => {
          console.log('Data reçu par getCards : ', data);

          // On retourne data et id du term pour la class App
          return this.app.showColumns(data, this.id); // A l'attention du correcteur : une partie de ce code a été réalisée avec l'aide de Thibault
        })
        .catch((error) => {
          console.error('Erreur attrapée dans manageEvents de Term :' + error.message);
        });
    }
  }


  render() {
    const term_button = this.createCompleteDomElement(
      "button",
      this.name,
      [
        {
          name: "class",
          value: "btn btn-secondary m-3"
        }
      ],
      this.app.domElements.header
    );

    return term_button;
  }
}