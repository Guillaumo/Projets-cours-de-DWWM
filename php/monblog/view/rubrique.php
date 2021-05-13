<?php
//  $parsed_url = parse_url($_SERVER['REQUEST_URI']);
//  var_dump($parsed_url);
// if($parsed_url['path'] !== "/monblog/rubrique/".$GLOBALS["data"][0]["path"]) {
//   header("Location: /monblog/rubrique/".$GLOBALS["data"][0]["path"]);
//   exit();
// }

// Insertion du head.php
require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/head.php");
?>

<body>

  <?php
  // Insertion du header.php
   require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/header.php"); 
   ?>

  <main class="container pt-4" role="main" id="contenu-principal">
    <!-- Récupération des données de la super globale "data" index 0 
    car la fonction getNodes retourne un tableau -->
    <h2><?= $GLOBALS["data"][0]["title"] ?></h2>
    <div class="row">
      <article class="col align-self-center text-justify">
        <?= $GLOBALS["data"][0]["summary"] ?>
      </article>
      <article class="col">
        <img src="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/image/<?= $GLOBALS["data"][0]["image"] ?>" alt="">
      </article>
    </div>
    <div class="mt-4">
      
      <?php
      // Récupération des données de la super globale "data" index 1 
      // car la fonction getNodes retourne un tableau
      // Sur cette super globale, on récupére les données dans un tableau associatif
      while ($record = $GLOBALS["data"][1]->fetch(PDO::FETCH_ASSOC)) { 
      ?>
        
        <section class="border border-dark mb-4 text-justify p-2">
          <!-- <a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/node/<?= $record['nid'] ?>"> -->
          <a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/<?= $GLOBALS["data"][0]["path"] ?>/<?= $record['path'] ?>">
            <h3><?= $record['title'] ?></h3>
          </a>
          <p><?= $record['summary'] ?></p>
        </section>

      <?php
      }
      ?>

    </div>
  </main>

  <?php 
    // Insertion du footer.php
    require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/footer.php"); 
  ?>