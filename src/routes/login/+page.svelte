<script>
    let { form } = $props();
</script>

<h1>Log In Page</h1>

{#if form?.error}

    <p id="warning">
        {form.error}
    </p>
{/if}

<section>

    <form action="?/login" method="POST">
    
        <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <button type="submit">Log In</button>
        </div>

    </form>
    
        <a href="/register">Register</a>

</section>

<style>
    #warning {
        border: solid 1px rgb(206, 8, 8);
        color: rgb(206, 8, 8);
        background-color: rgb(255, 90, 90);
        padding: 25px;
        margin: 10px;
    }
</style>