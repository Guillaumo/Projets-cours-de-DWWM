<?php 
require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/admin_head.php");
?>

<body>

  <?php require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/admin_header.php"); ?>

  <?php if($GLOBALS["data"][1]>0) : ?>
    <script type="text/javascript">
      alert("Vous ne pouvez pas supprimer cette rubrique car elle contient <?= $GLOBALS["data"][1] ?> node(s). \n\n Vous devez au préalable supprimer tous les nodes de cette rubrique.");
    </script>
  <?php endif ?> 

  <main class="pt-4" role="main" id="contenu-principal">
    <div class="container">
      <a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/add/" class="btn btn-success mb-2">Ajouter un node</a>
      <table class="table">
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Type</th>
          <th class="text-left">Titre</th>
          <th class="text-left">Résumé</th>
          <th class="text-center" colspan="2">Action</th>
          <th style="text-align: left;"></th>
        </tr>
        <?php while ($record = $GLOBALS["data"][0] ->fetch(PDO::FETCH_ASSOC)) : ?>
        <tr>
          <td><?= $record['nid'] ?></td>
          <td><?= $record['type'] ?></td>
          <td><?= $record['title'] ?></td>
          <td><?= $record['summary'] ?></td>
          <?php if($record['type']==="accueil") : ?>
            <td colspan="2" class="text-center"><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/update/<?= $record['nid'] ?>" class="btn btn-success">Modifier</a></td>
          <?php else : ?>
            <td><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/update/<?= $record['nid'] ?>" class="btn btn-success">Modifier</a></td>
            <td><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/delete/<?= $record['nid'] ?>"
              onclick="return confirm('Confirmez-vous la suppression de la ligne : <?= $record['nid'] ?>')" class="btn btn-danger">Supprimer</a>
            </td>
          <?php endif ?>
        </tr>
        <?php endwhile ?>
      </table>
    </div>
  </main>

  <?php require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/footer.php"); ?>