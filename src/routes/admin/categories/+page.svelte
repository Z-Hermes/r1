<script>
    let {data} = $props();
</script>

<h1>Manage my categories</h1>

<a href="/admin/categorie/new"><button>Add categorie</button></a>

<main>

    {#each data.categories as categorie}

    <div class="categorie"> 
        <p>{categorie.name}</p>
        <div>

            <a href="/admin/categorie/{categorie.id}/edit">
                <button>Edit</button>
            </a>
        <form action="?/delete" method="POST">
            <input type="hidden" value={categorie.id} name="id">
            <button type="submit">Delete</button>
        </form>
        </div>
    </div>
    {/each}

</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

</style>