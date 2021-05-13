<?php

class Route {
  // Attributs qui va lister toutes les routes
  public static $routes = [];

  /**
   * Méthode qui permet d'ajouter des routes
   */
  public static function add($pattern,$method="GET",$view_name="view_standard",$controller_method) {
    array_push(self::$routes,[
      'pattern' => $pattern,
      'method' => $method,
      'view_name' => $view_name,
      'controller_method' => $controller_method
    ]);
  }
  // vérifie si la route existe

  public static function check() {
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);


    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    // équivalent à :
    // if(isset($parsed_url['path'])) {
    // $path = $parsed_url['path'];
    // }
    // else {
    //   $path= '/';
    // }
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

    // Récupération de la méthode (GET ou POST)
    $method = $_SERVER["REQUEST_METHOD"];
    

    // On vérifie si le couple chemin/méthode existe bien
    foreach(self::$routes as $route) {
      // comparaison de la méthode
      if($route["method"]==$method && preg_match($route['pattern'],$path)) {
        // ici, je sais que la route existe bien
        return $route;
      }

    }
    return NULL;
  }
  public static function initRoutes() {
    // route qui permet de voir un node (/monblog/yyy/xxx)
    self::add("~^/monblog/rubrique/([0-9]+)/?$~","GET","rubrique.php","getNodes");
    self::add("~^/monblog/([^edit|add|rubrique|update|delete|/][a-zA-Z_\-]*)$~","GET","rubrique.php","getNodesPath");
    self::add("~^/monblog/node/([0-9]+)/?$~","GET","node.php","getNode");
    self::add("~^/monblog/[a-zA-Z_\-]+/([a-zA-Z_\-]+)/?$~","GET","node.php","getNodePath");
    self::add("~^/monblog/edit~","GET","/admin/edit_index.php","getAllNodes");
    self::add("~^/monblog/add~","GET","/admin/edit_add.php","getTypes");
    self::add("~^/monblog/add~","POST","/admin/edit_index.php","addNode");
    self::add("~^/monblog/update/([0-9]+)/?$~","GET","/admin/edit_update.php","getNode");
    self::add("~^/monblog/update/?~","POST","/admin/edit_index.php","updateNode");
    self::add("~^/monblog/delete/([0-9]+)/?$~","GET","/admin/edit_index.php","deleteNode");
    self::add("~^/monblog~","GET","home.php","getHome");
  }




}