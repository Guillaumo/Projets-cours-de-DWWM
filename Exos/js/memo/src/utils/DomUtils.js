// import fechData from "./../services/FetchData.js";

export default class DomUtils {
  constructor() {

  }
  /**
 * Crée un élément du DOM, ajoute du contenu, ajoute une classe et positionne 
 * dans un élément du DOM parent
 * 
 * @param {string} tag_name 
 * @param {string} content 
 * @param {array} attributes
 * @param {DOM element} parent_element
 * 
 * @returns {DOM element} elt
 */
  createCompleteDomElement(tag_name, content, attributes , parent_element) {
    console.log('Dans createCompleteDomElement');
    // Création d'un élément du DOM mais qui n'est pas encore positionné
    // dans la hiérarchie du document
    const elt = document.createElement(tag_name);

    elt.textContent = content;
    
    for(const attribute of attributes) {
      elt.setAttribute(attribute.name, attribute.value);
    }

    parent_element.append(elt);

    return elt;
  }

}