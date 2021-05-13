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
    car la fonction getHome retourne un tableau -->
    <h2><?= $GLOBALS["data"][0]["title"] ?></h2>
    <div class="row">
      <article class="col">
        <section class="border border-dark mt-4 p-2">
          <?= $GLOBALS["data"][0]["summary"] ?>
        </section>
        <section class="border border-dark text-justify mt-4 p-2">
          <?= $GLOBALS["data"][0]["body"] ?>
        </section>
      </article>
      <article class="col">
        <img src="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/image/<?= $GLOBALS["data"][0]["image"] ?>" alt="">
      </article>
    </div>

    <!-- Fonction pour enlever les accents d'une châine de caractère donnée -->
    <!-- <?php
          $MaChaine = "Théâtre";
	        $search  = array('À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'à', 'á', 'â', 'ã', 'ä', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ');
	        $replace = array('A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y');
	        $MaChaine = str_replace($search, $replace, $MaChaine);
          echo $MaChaine;
        ?> -->

  </main>

  <?php 
    // Insertion du footer.php
    require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/footer.php"); 
  ?>