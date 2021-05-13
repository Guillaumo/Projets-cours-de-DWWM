<header class="container" role="banner">
  <h1>Administration du blog</h1>
  <div class="row">
      <nav class="col" role="navigation" aria-label="Menu de navigation principale">
        <ul class="nav col">
          <li class="mr-4"><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/accueil/1">Accueil</a></li>
          <!-- <li class="mr-4"><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/rubrique/2">Kung Fu</a></li>
          <li class="mr-4"><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/rubrique/3">Théâtre</a></li>
          <li class="mr-4"><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/rubrique/4">Jardinage</a></li> -->
          <?php 
          $nb_records = count($GLOBALS['data']);
          while($record = $GLOBALS['data'][$nb_records-1] -> fetch(PDO::FETCH_ASSOC)) :
          ?>
            <li class="mr-4"><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/<?= $record["path"] ?>"><?= $record["title"] ?></a></li>
          <?php endwhile ?>
        </ul>
        </nav>
        <nav class="col" role="navigation" aria-label="Menu de navigation administrateur">
          <ul class="nav col">
          <li><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/edit/">Administration</a></li>
          </ul>
        </nav>
    </div>
</header>