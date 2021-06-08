// imrc
import React, { Component } from 'react';
import FetchData from './../services/FetchData';
import Term from './Term';
import Column from './Column';
import ModalCard from './ModalCard';


// ccs
class App extends Component {
  // appel du constructeur
  constructor() {
    super();
    this.state = { 
      title: "Mémo",
      display_form: false,
      token: "", // le fetch retourne un string
      user: {},
      terms: [],
      columns: [],
      term_selected: [],
      display_modal: false,
      column_selected:[],
      card_selected:[{id: "", question: "", reponse: "", explication: ""}]
     } 

     // propriété qui va me permettre de communiquer avec le serveur
     this.fd = new FetchData();
  }
  

  // handleShowForm= () => {
  //   // Set State compare l'objet qu'on lui donne en argument avec le state du componet en cours
  //   // S'il y a une différence, alors, render est appelée et l'ibnterafce modifiée
  //   const obj = { 
  //     title: "Mémo",
  //     display_form:true
  //    }
  //    this.setState(obj); // la fonction fléchée permet de spécifier le this accessible au niveau de la class App car la fonction handleShowForm est appelé par render qui est une méthode de la class
  // }
  // handleHideForm= () => {
  //   // Set State compare l'objet qu'on lui donne en argument avec le state du componet en cours
  //   // S'il y a une différence, alors, render est appelée et l'ibnterafce modifiée
  //   const obj = { 
  //     title: "Mémo",
  //     display_form:false
  //    }
  //    this.setState(obj); // la fonction fléchée permet de spécifier le this accessible au niveau de la class App car la fonction handleShowForm est appelé par render qui est une méthode de la class
  // }
  

  componentDidMount = () => {
    console.log('dans componentDidMount');
    this.fd.getToken() 
      .then((token) => {
        // ici j'ai bien récupéré mon token
        console.log('Token : ',token);
        // Modification du state
        const state = {... this.state};
        state.token = token;
        this.setState(state);

        return this.fd.getUser(token,"patguisara","patguisara");
        
      })
      .then((user) => {
        console.log('User : ',user);
        // Modification du state
        const state = {... this.state};
        state.user = {
          login: "patguisara",
          pwd: "patguisara",
          uid: user.current_user.uid
        };
        this.setState(state);
        return this.fd.getTerms(this.state.user,this.state.token);
      })
      .then((terms) => {
        console.log('Terms : ',terms);

        // Modification du state
        const state = {... this.state};
        state.terms = terms;
        this.setState(state);
        return this.fd.getTerms(this.state.user,this.state.token);
      })

      .catch((error) => {
        error.log("Erreur dans componentDidMount, le tid : ", error.message)
      });
      
  }

  // Gestion du click de suppression d'une carte 
  handleClickDelCard = (card_id) => {
    let cid=this.state.column_selected[0];
    // Récupération de la colonne où supprimer la carte
    const columnAddingCard = this.state.columns.filter(column => column.id == cid);
    console.log('Colonne où sera ajoutée ou modifiée la carte : ',columnAddingCard);
    // Récupération des cartes de la colonne
    const cardsFromColumn = columnAddingCard[0].cartes;
    console.log('Cartes de la colonne sélectionnée : ',cardsFromColumn);
    let pos = cardsFromColumn.indexOf(this.state.card_selected);
    console.log('position de la carte sélectionnée : ',pos);
  }

  // Gestion du click sur un term
  handleClickTerm = (tid,name) => {
    console.log('handleClickTerm tid : ',tid);
    console.log('handleClickTerm name : ',name);
    
    // Récupère les data via la méthode getCards de FetchData
    this.fd.getCards(this.state.user, this.state.token, tid)
    .then((data) => {
      // ici, j'ai bien la donnée en étant sûr que c'est du json
      console.log('data dans handleClickTerm : ', data);
      //Modifie la propriété columns du state via setState
      const state = {... this.state};
      state.columns = data;
      state.term_selected=[tid,name];
      this.setState(state);
    })
    .catch((error) => {error.log("problème dans handleClickTerm", error.message)});
  }
  
  // Fermeture du modal
  handleClickCloseModal = () => {
    let display_modal = this.state.display_modal ? false : true;
    let state = {... this.state};
    state.display_modal = display_modal;
    state.column_selected = [];
    state.card_selected = [{id: "", question: "", reponse: "", explication: ""}];
    this.setState(state);
    console.log('dans handleClickCloseModal, display_modal : ',this.state.display_modal);
  }

  // Ouverture du modal pour modifier une carte
  handleModalModify = (card_id,question,answer,explanation,cid) => {
    console.log(`Dans handleModalModify : `);
    console.log("card id : ", card_id);
    console.log("column id : ", cid);
    console.log("term id : ", this.state.term_selected[0]);
    console.log('Question : ',question);
    let display_modal = this.state.display_modal ? false : true;
    let state = {... this.state};
    state.card_selected = [{id:card_id, question: question, reponse: answer, explication: explanation}];
    state.column_selected = [cid];
    state.display_modal=display_modal;
    this.setState(state);

  }

  // Ouverture du modal pour ajouter une carte
  handleOpenModal = (cid,name) => {
    console.log(`Dans handleOpenModal`);
    console.log("column id : ", cid);
    console.log("term id : ", this.state.term_selected[0]);
    let display_modal = this.state.display_modal ? false : true;
    let state = {... this.state};
    state.column_selected=[cid,name];
    state.display_modal=display_modal;
    this.setState(state);
  }

  // Soumission du formulaire du modal d'ajout de carte
  handleSubmitModal = (e) => {
    console.log(`Dans handleSubmitModal`);
    e.preventDefault();
    let question = document.getElementById('question').value;
    let answer = document.getElementById('answer').value;
    let explanation=document.getElementById('explanation').value;
    // Récupération des id term et colonne du state du moment
    let tid=this.state.term_selected[0];
    let cid=this.state.column_selected[0];

    // Test console
    console.log('Question : ',question);
    console.log('Answer : ',answer);
    console.log('Explanation : ',explanation);
    console.log('Term id : ',tid);
    console.log('Colonne id : ',cid);
    console.log('Colonnes : ',this.state.columns);
     
    // Récupération de la colonne où ajouter/modifier la carte
    const columnAddingCard = this.state.columns.filter(column => column.id == cid);
    console.log('Colonne où sera ajoutée ou modifiée la carte : ',columnAddingCard);
    // Récupération des cartes de la colonne
    const cardsFromColumn = columnAddingCard[0].cartes;
    console.log('Cartes de la colonne sélectionnée : ',cardsFromColumn);

    // Tester si on se trouve dans le cas d'un ajout ou d'une modification
    if(this.state.card_selected[0].id) {
      // Récupération de la carte à modifier
      let card_modify = cardsFromColumn.filter(item => item.id == this.state.card_selected[0].id);
      card_modify.map (item => {
        item.question = question;
        item.reponse = answer;
        item.explication=explanation;
      });

      // Test console
      console.log('Question : ',question);
      console.log('Answer : ',answer);
      console.log('Explanation : ',explanation);
      
    } else {
      // Ajout de la carte dans le tableau de cartes de la colonne sélectionnée
      let card_id=cardsFromColumn.length + 1;
      const cardNew = {id: card_id, question: question, reponse: answer, explication: explanation};
      console.log('Nouvelle carte à ajouter : ',cardNew);
      cardsFromColumn.push(cardNew);
    }

    // Fermeture du modal après soumission du modal
    this.handleClickCloseModal();

  }

  // Toggle d'affichage d'un formulaire
  handletoggleForm = () => {
    console.log(`Dans handletoggleForm`);
    console.log("this : ", this);
    let display_form = this.state.display_form ? false : true;
    // Set State compare l'objet qu'on lui donne en argument avec le state du component en cours
    // S'il y a une différence, alors, render est appelée et l'interface modifiée
    // const obj = { 
    //   title: "Mémo",
    //   display_form: display_form
    //  }
    let state = {... this.state}; // clone du state du component en cours
    state.display_form=display_form; // modification de la propriété qui m'intéresse
    this.setState(state);
  }

  // Affichage des colonnes
  renderColumns = () => {
    if (this.state.columns.length) {
      return(
        <div>
          <h2>{this.state.term_selected[1]}</h2>
          <section id="columns" className="d-flex">
            
            {this.state.columns.map(column => <Column onClickAddCard={this.handleOpenModal}
            handleModifyCard = {this.handleModalModify}
            cid={column.id}
            key={column.id}
            name={column.name}
            cards={column.cartes}
            />)}
          </section>
        </div>
      )
    }
  }

  // Affichage d'un formulaire
  renderForm() {
    if(this.state.display_form) {
      return(
        <form action="">
          <label htmlFor="question">question</label>
          <input type="text" />
          <input type="submit" value="Envoyer" />
        </form>
      )
    }
  }

  // Affichage du modal d'ajout de carte
  renderModal= () => {
    console.log('display_modal : ',this.state.display_modal);
    console.log('card_selected : ',this.state.card_selected);

    if(this.state.display_modal) {
      return(
        <ModalCard onClickCloseModal={this.handleClickCloseModal}
        onSubmitModal={this.handleSubmitModal}
        onClickDelCard={this.handleClickDelCard}
        card = {this.state.card_selected}
        />
        
      )
    }
  }

  // Affichage des terms
  renderTerms = () => {
    if(this.state.terms.length) {
      return(
        <nav>
          {this.state.terms.map(term => <Term onClickTerm={this.handleClickTerm} 
          tid={term.id}
          key={term.id} 
          name={term.name}/>)}
        </nav>
      )
    }
  }

  // Affichage du token
  renderToken = () => {
    if(this.state.token) {
      return (
      <p className="text-success">Token ok</p>
      )
    } else {
      return (
        <p className="text-danger">Problème de token</p>
      )
    }
  }

  // Affichage de l'user
  renderUser = () => {
    // Test si objet vide ?
    if(this.state.user.hasOwnProperty('uid')) {
      return (
        <p className="text-success">User ok</p>
      )
    } else {
      return (
        <p className="text-danger">Problème de user</p>
      )
    }
  }

  // Affichage du composant principal
  render() {
    return (
      <div className="container">
        <header>
          <h1>Memo</h1>
          {this.renderTerms()}
          {this.renderUser()}
        </header>
        <main>
          {this.renderModal()}
          {this.renderColumns()}
          
          {/* <button onClick={this.handletoggleForm}>Ouvrir ou cacher le formulaire</button>
          {this.renderForm()} */}
          
        </main>
        <footer>
          Footer ici
          <div id="msg">
          {this.renderToken()}
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
