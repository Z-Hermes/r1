<script>
    let { data } = $props();
</script>

<h1>Edit Categorie</h1>

<form action="?/edit" method="POST">

<div>
        <label for="name">Categorie name</label>
        <input type="text" id="name" name="name" required value={data.categorie.name}>
    </div>

     <div>
        <button type="submit">edit</button>
    </div>

</form>
