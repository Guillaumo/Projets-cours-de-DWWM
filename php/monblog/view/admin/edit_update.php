<?php 
require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/admin_head.php");
?>

<body>

  <?php require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/admin_header.php"); ?>

  <main class="pt-4" role="main" id="contenu-principal">
    <div class="container">
      <h2>Modification du node : <?= $GLOBALS["data"][0]["nid"] ?></h2>
      <form action="http://<?= $_SERVER["HTTP_HOST"] ?>/monblog/update/" method="POST">
        <input type="hidden" name='nid' id="nid" value="<?= $GLOBALS["data"][0]["nid"] ?>">
        <table class="table mt-4">
          <tr>
            <td>
              <label for="type">Type</label>
            </td>
            <td>
            <input type="text" name='type' id="type" class="form-control" value="<?= $GLOBALS["data"][0]["type"] ?>">
            </td>
          </tr>
          <tr>
            <td>
              <label for="title">Titre</label>
            </td>
            <td>
              <input type="text" name='title' id="title" class="form-control" value="<?= $GLOBALS["data"][0]["title"] ?>">
            </td>
          </tr>
          <tr>
            <td>
              <label for="summary">Résumé</label>
            </td>
            <td>
              <textarea name='summary' id="summary" class="form-control" rows="5"><?= $GLOBALS["data"][0]["summary"] ?></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label for="seo_title">Titre de référencement SEO</label>
            </td>
            <td>
              <input type="text" name='seo_title' id="seo_title" class="form-control" value="<?= $GLOBALS["data"][0]["seo_title"] ?>">
            </td>
          </tr>
          <tr>
            <td>
              <label for="body">Corps</label>
            </td>
            <td>
              <textarea name='body' id="body" class="form-control" rows="10"><?= $GLOBALS["data"][0]["body"] ?></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label for="image">Image</label>
            </td>
            <td>
              <input type="text" name='image' id="image" class="form-control" value="<?= $GLOBALS["data"][0]["image"] ?>">
            </td>
          </tr>
          <tr>
            <td>
              <label for="path">Path</label>
            </td>
            <td>
              <input type="text" name='path' id="path" class="form-control" value="<?= $GLOBALS["data"][0]["path"] ?>">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="submit" value="Modifier" class="btn btn-success form-control">
            </td>
          </tr>
        </table>
      </form>
    </div>
  </main>

  <?php require_once($_SERVER["DOCUMENT_ROOT"] . "/monblog/commons/footer.php"); ?>