import DomUtils from "./utils/DomUtils.js";
import Form from "./components/Form.js";
import FetchData from "./services/FetchData.js";
import Term from "./components/Term.js";
import Column from "./components/Column.js";
import Card from "./components/Card.js";
import ModalCard from "./components/ModalCard.js";

class App extends DomUtils {
  constructor() {
    super();
    // Propriétés de base
    this.token = "";
    this.user = {};
    this.terms = [];
    this.columns = [];
    this.cards = [];

    // Création et récupération des élements de base du dom dans l'objet this.domElements
    // this.domElements est une propriété de type objet
    this.domElements = this.render();

    // Instanciation du service FetchData et récupération du token
    this.fd = new FetchData();
    this.getToken();

    // Gestion des événements
    this.manageEvents();
  }

  // Appel de la fonction showModal pour récupérer l'id de la colonne et l'id du term de la class Column et afficher le modal d'ajout de carte
  showModal(id_column, id_term) {
    console.log("colonne dans showModal : ", id_column, ' et term : ', id_term);
    const modal_card = new ModalCard(id_column, id_term, this);
    // Appel de la méthode showTheModal de la class ModalCard pour afficher le modal
    modal_card.showTheModal();

  }
  // Appel de la fonction showColumns pour récupérer data de getCards et l'id du term dans la class Term et afficher les colonnes ainsi que les cartes
  showColumns(data, id_term) {
    console.log('data dans showColums : ', data);
    this.columns = data;
    for (let column of this.columns) {
      new Column(column.id, column.name, id_term, this);
      // Récupération des cartes de la colonne
      this.cards = column.cartes;
      for (let card of this.cards) {
        new Card(card.id, card.question, card.reponse, column.id, this);
      }
    }

  }
  manageEvents() {
    console.log('Dans manageEvents');
    // Gestion de la sousmission du formulaire d'authentification

    // Dans une fonction fléchée, le this ne dépend plus de qui appelle la fonction
    // mais bien de où la fonction a été déclarée.
    this.domElements.form_login.onsubmit = (event) => {
      event.preventDefault();
      const login = document.getElementById("login").value;
      const pwd = document.getElementById("pwd").value;

      this.fd.getUser(this.token, login, pwd)
        .then((data) => {
          console.log('user dans manageEvents : ', data);
          // On hydrate la propriété user
          this.user = {
            uid: data.current_user.uid,
            login: login,
            pwd: pwd
          }
          return this.fd.getTerms(this.user, this.token);
        })
        .then((data) => {
          // Hydratation des termes
          this.terms = data;

          // On cache le formulaire
          this.domElements.form_login.classList.add("hidden");

          // On crée et on affiche les termes (rubriques)
          for (let i = 0; i < this.terms.length; i++) {
            new Term(this.terms[i].id, this.terms[i].name, this);
          }

        })

        .catch((error) => {
          console.error("Erreur attrapée dans manageEvents : " + error.message);
        });


    }


  }

  getToken() {
    this.fd.getToken()
      .then((data) => {
        this.token = data;
        this.domElements.form_login.classList.remove("hidden");
      })
      .catch((error) => {
        console.error('Erreur catché dans getToken : ' + error.message);
      });
  }

  render() {
    // Création des éléments de base du dom
    const header = this.createCompleteDomElement("header", "", [
      {
        name: "class",
        value: "d-flex justify-content-center"
      }
    ], document.getElementById("app"));
    const main = this.createCompleteDomElement("main", "", [], document.getElementById("app"));
    const footer = this.createCompleteDomElement("footer", "", [], document.getElementById("app"));
    const form_login = new Form(main, {
      inputs: [
        {
          label: {
            name: "Login",
            for: "login"
          },
          input: {
            type: "text",
            id: "login"
          }
        },
        {
          label: {
            name: "Mot de passe",
            for: "pwd"
          },
          input: {
            type: "password",
            id: "pwd"
          }
        },
        {
          label: {
            name: "",
            for: ""
          },
          input: {
            type: "submit",
            id: ""
          }
        }
      ]
    });
    return {
      header: header,
      main: main,
      footer: footer,
      form_login: form_login
    }
  }
}
// Création d'une instance de App via une instanciation
const app = new App();