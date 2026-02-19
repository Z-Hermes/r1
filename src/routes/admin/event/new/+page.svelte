<script>
    let {data} = $props();
    
    console.log(data.categories);
</script>

<h1>New event</h1>

<form method="POST" action="?/create">

    <div>
        <label for="name">Event name</label>
        <input type="text" id="name" name="name" required>
    </div>

    <div>
        <label for="description">Event description</label>
        <textarea id="description" name="description"></textarea>
    </div>

     <div>
        <label for="name">Event start date</label>
        <input type="date" id="startdate" name="startdate">
    </div>

     <div>
        <label for="name">Event start time</label>
        <input type="time" id="starttime" name="starttime">
    </div>

    <div>
        <label for="categorie">Select Category</label>
        <select name="categorie" id="categorie">
            {#each data.categories as categorie}
                <option value="{categorie.id}">{categorie.name}</option>
            {/each}
        </select>
    </div>

     <div>
        <button type="submit">create</button>
    </div>
</form>