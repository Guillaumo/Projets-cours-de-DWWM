<?php 
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
    car la fonction getNode retourne un tableau -->
    <h2><?= $GLOBALS["data"][0]["title"] ?></h2>
    <section class="row">
      <article class="col text-justify mt-4">
        <?= $GLOBALS["data"][0]["body"] ?>
      </article>
      <article class="col">
        <img src="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/image/<?= $GLOBALS["data"][0]["image"] ?>" alt="">
      </article>
    </section>
  </main>

  <?php 
    // Insertion du footer.php
    require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/footer.php"); 
  ?>