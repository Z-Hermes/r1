<script>
    let {data} = $props();
</script>

<h1>Manage my events</h1>

<a href="/admin/event/new"><button>Add event</button></a>

<main>

    {#each data.events as event}

    <div class="event"> 
        <p>{event.name}</p>
        <p>{event.categorie_name}</p>
        <div>

            <a href="/admin/event/{event.id}/edit">
                <button>Edit</button>
            </a>
        <form action="?/delete" method="POST">
            <input type="hidden" value={event.id} name="id">
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