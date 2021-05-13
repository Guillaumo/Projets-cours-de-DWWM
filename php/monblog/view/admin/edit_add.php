<?php 
  // Insertion du admin_head.php
  require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/admin_head.php");
?>

<body>

  <?php 
    // Insertion du admin_header.php
    require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/admin_header.php");
   ?>

  <main class="pt-4" role="main" id="contenu-principal">
    <div class="container">
      <h2>Ajout d'un node </h2>
      <form action="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/add/" method="POST">
        <table class="table mt-4">
          <tr>
            <td>
              <label for="type">Type</label>
            </td>
            <td>
              <!-- Récupération des données de la super globale "data" index 0 
              car la fonction getTypes retourne un tableau -->
              <select name="type" id="type" size="1" class="form-control">
                <option value="">Sélectionnez un type de node :</option>
                <?php while ($record = $GLOBALS["data"][0]->fetch(PDO::FETCH_ASSOC)) : ?>
                <option value="<?= $record['title'] ?>"><?= $record['title'] ?></option>
                <?php endwhile ?>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="title">Titre</label>
            </td>
            <td>
              <input type="text" name='title' id="title" class="form-control">
            </td>
          </tr>
          <tr>
            <td>
              <label for="summary">Résumé</label>
            </td>
            <td>
              <textarea name='summary' id="summary" class="form-control" rows="5"></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label for="seo_title">Titre de référencement SEO</label>
            </td>
            <td>
              <input type="text" name='seo_title' id="seo_title" class="form-control">
            </td>
          </tr>
          <tr>
            <td>
              <label for="body">Corps</label>
            </td>
            <td>
              <textarea name='body' id="body" class="form-control" rows="10"></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label for="image">Image</label>
            </td>
            <td>
              <input type="text" name='image' id="image" class="form-control">
            </td>
          </tr>
          <tr>
            <td>
              <label for="path">Path</label>
            </td>
            <td>
              <input type="text" name='path' id="path" class="form-control">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="submit" value="Ajouter" class="btn btn-success form-control">
            </td>
          </tr>
        </table>
      </form>
    </div>
  </main>

  <?php require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/footer.php"); ?>