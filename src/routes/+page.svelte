<script>
    let { data } = $props();
</script>

<h1>EVENTS IN ALBANIEN</h1>
<h2>{data.pageTitle}</h2>

<main>
    {#each data.events as event}
    <a href = {"/event/" + event.id}>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>{event.category_name}</p>
    </a>
    {/each}


</main>

<style>
    a{
        text-decoration: none;
        color: #71D864;
        background-color: rgb(182, 121, 239);
        padding: 10px;
        display: block;
        margin: 10px;
        border-radius: 20px;
        overflow: hidden;
    }

    h1{
        background-color: purple;
        color: white;
        font-family: sans-serif;
        padding: 5px;
    }


</style>