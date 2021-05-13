<?php

// initialisation des routes
require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/controller/Route.php");
Route::initRoutes();

// récupération du contrôleur
require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/controller/Controller.php");

// récupération du modèle
//require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/model/Model.php");

// vérification de la route en cours (demandée par l'internaute)
$route = Route::check();
// si ma route n'est pas nulle, alors je m'en sers
if($route) {
  // je vais chercher les infos dans la BD
  // on fait appel à la méthode controlée si elle existe de la route initiée
    if(isset($route["controller_method"])) {
      $controller_method = $route["controller_method"];
      $GLOBALS["data"] = Controller::$controller_method();
    }
  // Appel du template
  require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/view/" . $route["view_name"]);
  // var_dump($route["view_name"]);
}
