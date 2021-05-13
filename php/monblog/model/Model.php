<?php

class Model {
  /**
   * Fonction permettant de créer une nouvelle instance PDO pour se connecter à la BD
   */
  public static function getPDOInstance() {
    try {
      // new appelle le constructeur (__construct) de la classe PDO
      $pdo = new PDO('mysql:host=local.php.my;dbname=monblog;charset=utf8', 'diginamic', '123');
      // -> permet d'appeler les méthodes (ou les attributs) de l'objet
      // :: Appel d'une méthode "static" ou méthode de classe
      // setAttribute est une méthode de la classe PDO
      // ATTR_ERRMODE est attribut static (sans $ signifie que c'est une constante de classe)
      $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
      return $pdo;
    }
    catch(PDOException $e) {
      echo "Pb de connexion à la base de données ", $e->getMessage();
    }
  }

  /**
   * Fonction permettant de mettre à jour un node dans la BD
   * @return void
   */
  public static function updateNode() {
    $pdo=self::getPDOInstance();
    $data = [
      'nid' => $_POST['nid'],
      'type' => $_POST['type'],
      'title' => $_POST['title'],
      'summary' => $_POST['summary'],
      'seo_title' => $_POST['seo_title'],
      'body' => $_POST['body'],
      'image' => $_POST['image'],
      'path' => $_POST['path']
  ];

  // Requête préparée $pdo-> prepare renvoie un objet puisque l'on va pouvoir appeler la
  // méthode execute (cf ligne 47). Attention, cette requête attend des paramétres ( :title, :summary, ...)
    $req = $pdo->prepare('UPDATE node SET 
      type= :type, title = :title, summary= :summary, seo_title = :seo_title, body = :body, image= :image, path = :path   
      WHERE nid = :nid');
      
  // Exécution de la requête. L'argument $data va permettre de remplacer les paramétres de la
  // requête
    $req->execute($data);
  }

  /**
   * Fonction permettant de récupérer un nom selon son nid
   * @param {integer} $nid
   * @return {array (associatif)} $d
   */
  public static function getNode($nid) {
    $pdo=self::getPDOInstance();
    // Requête de récupération des données sur un formulaire
    $data = [
    'nid' => $nid
    ];
  
    $req = $pdo->prepare('SELECT * FROM node WHERE nid = :nid');
    //Exécution de la requête
    $req->execute($data);
  
    $d = $req->fetch(PDO::FETCH_ASSOC);
    // $d devient un tableau associatif
    return $d;
  }
  /**
   * Fonction qui renvoie les nodes selon son type
   * @param {string} $type
   * @return {array string} $req
   */
  public static function getNodes($type) {
    $pdo=self::getPDOInstance();
    $data = [
      'type' => $type
      ];
      $req = $pdo->prepare('SELECT * FROM node WHERE type = :type');
      //Exécution de la requête
        $req->execute($data);
        return $req;
      
  }

  /**
   * Fonction qui renvoie tous les nodes
   * @return {array string} $req
   */
  public static function getAllNodes() {
    $pdo=self::getPDOInstance();
    
    $req = $pdo->prepare('SELECT * FROM node');
    //Exécution de la requête
    $req->execute();
    return $req;
  }

  /**
   * Fonction permettant d'ajouter un node dans la BD
   * @return void
   */
  public static function addNode() {
    $pdo=self::getPDOInstance();
    try {
      $data = [
        'type' => $_POST["type"],
        'title' => $_POST["title"],
        'summary' => $_POST["summary"],
        'seo_title' => $_POST['seo_title'],
        'body' => $_POST["body"],
        'image' => $_POST["image"],
        'path' => $_POST["path"]
      ];
      $req = $pdo->prepare('INSERT INTO node (type,title,summary,seo_title,body,image,path) VALUES (:type,:title,:summary,:seo_title,:body,:image,:path)');
      $req->execute($data);
    }
    catch(PDOException $e) {
      echo "Pb de requête", $e->getMessage();
    }

  }
  
  /**
   * Fonction permettant de supprimer un node selon son nid
   * @param {integer} $nid
   * @return void
   */
  public static function deleteNode($nid) {
    $pdo=self::getPDOInstance();
    try {
      $data = [
        'nid' => $nid
      ];
      $req = $pdo->prepare('DELETE FROM node WHERE nid= :nid');
      $req ->execute($data);
    }
    catch(PDOException $e) {
      echo "Pb de requête", $e->getMessage();
    } 

  }

  /**
   * Fonction permettant de récupérer les titres de nodes où type = "rubrique"
   * @return {array string} $req
   */
  public static function getTypes() {
    $pdo=self::getPDOInstance();
    try {
      $req = $pdo->prepare('SELECT * FROM node WHERE type = "rubrique"');
      $req ->execute();
      return $req;
    }
    catch(PDOException $e) {
      echo "Pb de requête", $e->getMessage();
    } 
  }

  /**
   * Fonction permettant de récupérer un nom selon son nid
   * @param {string} $path
   * @return {array (associatif)} $d
   */
  public static function getNodePath($path) {
    $pdo=self::getPDOInstance();
    // Requête de récupération des données sur un formulaire
    $data = [
    'path' => $path
    ];
  
    $req = $pdo->prepare('SELECT * FROM node WHERE path = :path');
    //Exécution de la requête
    $req->execute($data);
  
    $d = $req->fetch(PDO::FETCH_ASSOC);
    // $d devient un tableau associatif
    return $d;
  }
  

}