<?php
require_once($_SERVER["DOCUMENT_ROOT"]."/monblog/model/Model.php");

class Controller {

  /**
   * Fonction permettant de récupérer le nid dans l'url
   * et retourne la donnée correspondante
   */
  public static function getNode() {
    // récupération du nid
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);


    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

    // ATT les parenthèses dans le pattern sont importantes car elles permettent de saisir l'info dans le matches
    // Si le chemin correspond bien au pattern on fait appel au fichier node.php
    $pattern_node = '~^/monblog/node/([0-9]+)/?$~';
    // Si le chemin correspond bien au pattern on fait appel au fichier edit_add.php
    $pattern_update = '~^/monblog/update/([0-9]+)/?$~';

    // On vérifie si le pattern correspond au $path
    if (preg_match($pattern_node, $path, $matches, PREG_OFFSET_CAPTURE)) {
      if(isset($matches[1][0])) {
        $record = Model::getNode($matches[1][0]);
        // On récupére la requête préparée qui permet de récupérer les nodes de type rubrique 
        // pour créer dynamique le menu principal--> voir header.php
        $req = Model::getTypes();
        // On retourne un tableau de variables --> voir templates correspondant : head.php, header.php, node.php
        $tab_data = [$record,$req];
        return $tab_data;
      }
    }
    // Idem
    if (preg_match($pattern_update, $path, $matches, PREG_OFFSET_CAPTURE)) {
      if(isset($matches[1][0])) {
        $record = Model::getNode($matches[1][0]);
        // On récupére la requête préparée qui permet de récupérer les nodes de type rubrique 
        // pour créer dynamique le menu principal--> voir header.php
        $req = Model::getTypes();
        // On retourne un tableau de variables --> voir templates correspondant : head.php, header.php, edit_add.php
        $tab_data = [$record,$req];
        return $tab_data;
      }
    }
    return NULL;
  }

  /**
   * Fonction permettant d'afficher le node n° 1 sur le template home.php
   */
  public static function getHome() {
    $record = Model::getNode(1);
    // On récupére la requête préparée qui permet de récupérer les nodes de type rubrique 
    // pour créer dynamique le menu principal--> voir header.php
    $req = Model::getTypes();
    // On retourne un tableau de variables --> voir templates correspondant : head.php, header.php
    $tab_data = [$record,$req];
    return $tab_data;
  }

  /**
   * Fonction permettant de récupérer les nodes d'une rubrique donnée
   */
  public static function getNodes() {
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);


    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

    // Si le chemin correspond bien au pattern on fait appel au fichier rubrique.php
    // ATT les parenthèses dans le pattern sont importantes car elles permettent de saisir l'info dans le matches
    $pattern_rubrique = '~^/monblog/rubrique/([0-9]+)/?$~';

    if (preg_match($pattern_rubrique, $path, $matches, PREG_OFFSET_CAPTURE)) {
      if(isset($matches[1][0])) {
        $record = Model::getNode($matches[1][0]);
        $req_nodes= Model::getNodes($record['title']);
        // On récupére la requête préparée qui permet de récupérer les nodes de type rubrique 
        // pour créer dynamique le menu principal--> voir header.php
        $req_types = Model::getTypes();
        // On retourne un tableau de variables --> voir templates correspondant : head.php, header.php, rubrique.php
        $tab_data=[$record,$req_nodes,$req_types];
        return $tab_data;
      }
    }
    return NULL;
  }

  /**
   * Fonction retournant tous les nodes dans edit_index.php dans "Administration"
   */
  public static function getAllNodes() {
    $req_nodes=Model::getAllNodes();
    // On récupére la requête préparée qui permet de récupérer les nodes de type rubrique 
    // pour créer dynamique le menu principal--> voir header.php
    $req_types = Model::getTypes();
    // On retourne un tableau de variables --> voir template edit_index.php
    // le 2ème élément du tableau renvoie 0 --> voir fonction deleteNode
    $tab_data=[$req_nodes,0,$req_types];
    return $tab_data;
  }

  /** 
   * Fonction retournant les types existants dans la BD
   * Permet de faire un select dans l'ajout d'un node --> voir template edit_add
  */
  public static function getTypes() {
    $req=Model::getTypes();
    $tab_data = [$req];
    return $tab_data;
  }

  /**
   * Fonction permettant d'ajouter un node
   */
  public static function addNode() {
    Model::addNode();
    $req = Model::getAllNodes();
    // On retourne un tableau de variables --> voir template edit_index.php
    // le 2ème élément du tableau renvoie 0 --> voir fonction deleteNode
    $tab_data=[$req,0];
    return $tab_data;
  }

  /**
   * Fonction permettant de mettre à jour un node donné
   */
  public static function updateNode() {
    Model::updateNode();
    $req = Model::getAllNodes();
    // On retourne un tableau de variables --> voir template edit_index.php
    // le 2ème élément du tableau renvoie 0 --> voir fonction deleteNode
    $tab_data=[$req,0];
    return $tab_data;
  }

  /**
   * Fonction permettant de supprimer un node donné
   * Une condition principale : on ne peut pas supprimer un node de type rubrique
   * qui contient des nodes de type = titre de cette rubrique
   */
  public static function deleteNode() {
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);

    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

    // ATT les parenthèses dans le pattern sont importantes car elles permettent de saisir l'info dans le matches
    $pattern_delete = '~^/monblog/delete/([0-9]+)/?$~';

    if (preg_match($pattern_delete, $path, $matches, PREG_OFFSET_CAPTURE)) {
      if(isset($matches[1][0])) {
        // Condition de supression :
        // si on souhaite supprimer une rubrique, il ne faut pas qu'elle contienne des nodes
        $record = Model::getNode($matches[1][0]);
        if($record['type']==="rubrique") {
          $nb_records=0;
          $req=Model::getNodes($record['title']);
          while ($records = $req ->fetch(PDO::FETCH_ASSOC)) {
            //Variable permettant de connaître le nombre d'enregistrement
            $nb_records++;
          }
          if($nb_records>0) {
            $req = Model::getAllNodes();
            // On retourne un tableau de variables --> voir template edit_index.php
            // le 2ème élément du tableau renvoie $nb_records (nombre d'enregistrements)
            $tab_data=[$req,$nb_records];
            return $tab_data;
          }
        }
        // Si le node à supprimer est de type autre que rubrique ou de type rubrique 
        // mais n'ayant pas de nodes de type = au titre de ladite rubrique
        Model::deleteNode($matches[1][0]);
        $req = Model::getAllNodes();
        // On retourne un tableau de variables --> voir template edit_index.php
        // le 2ème élément du tableau renvoie 0 enregistrement
        $tab_data=[$req,0];
        return $tab_data;
      }
    }
    return NULL;
  }

  /**
   * Fonction permettant de récupérer un node en fonction du champ "path"
   * Ce champ est unique
   */
  public static function getNodePath() {
    // récupération du path
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);


    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';


    // si le chemin correspond bien au pattern on fait appel au fichier node.php
    // ATT les parenthèses dans le pattern sont importantes car elles permettent de saisir l'info dans le matches
    $pattern_path = '~^^/monblog/[a-zA-Z_\-]+/([a-zA-Z_\-]+)/?$~';

    if (preg_match($pattern_path, $path, $matches, PREG_OFFSET_CAPTURE)) {
      if(isset($matches[1][0])) {
        // On extrait de $path la chaîne de caractère après la dernière occurence de "/"
        $path_node= substr($path,strrpos($path, "/")+1);
        $record = Model::getNodePath($path_node);
        // On récupére la requête préparée qui permet de récupérer les nodes de type rubrique 
        // pour créer dynamique le menu principal--> voir header.php
        $req = Model::getTypes();
        // On retourne un tableau de variables --> voir templates correspondant : head.php, header.php, node.php
        $tab_data = [$record,$req];
        return $tab_data;
      }
    }
   
    return NULL;
  }

  /**
   * Fonction permettant de récupérer les nodes d'une rubrique donnée
   * et selon le champ "path".
   */
  public static function getNodespath() {
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);


    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

    // si le chemin correspond bien au pattern on fait appel au fichier rubrique.php
    // ATT les parenthèses dans le pattern sont importantes car elles permettent de saisir l'info dans le matches
    $pattern_path = '~^/monblog/([^edit|add|rubrique|update|delete|/][a-zA-Z_\-]+)/?$~';

    if (preg_match($pattern_path, $path, $matches, PREG_OFFSET_CAPTURE)) {
      if(isset($matches[1][0])) {
        // $path_node= substr($path,strrpos($path, "/")+1);
        // $record = Model::getNodePath($path_node);
        $record = Model::getNodePath($matches[1][0]);
        $req_nodes= Model::getNodes($record['title']);
        // On récupére la requête préparée qui permet de récupérer les nodes de type rubrique 
        // pour créer dynamique le menu principal--> voir header.php
        $req_types = Model::getTypes();
        // On retourne un tableau de variables --> voir templates correspondant : head.php, header.php, rubrique.php
        $tab_data=[$record,$req_nodes,$req_types];
        return $tab_data;
      }
    }
    return NULL;
  }

}