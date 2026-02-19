<script>
    let {data} = $props();
    
</script>

<h1>New categorie</h1>

<form method="POST" action="?/create">

    <div>
        <label for="name">Categorie name</label>
        <input type="text" id="name" name="name" required>
    </div>

     <div>
        <button type="submit">create</button>
    </div>
</form>