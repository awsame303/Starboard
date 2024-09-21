<script>
    import {onMount} from "svelte";

    export let name;
    export let job;
    export let image;

    onMount(() => {
        if (!image)
            image = "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png?20230410144854";
    })
</script>
<main class="pt-6 pb-6 pl-2 pr-2">
    <div class="card bg-base-300/60 w-60 shadow-xl p-0 m-0">
        <div class="card-body pt-3 text-center align-middle">
            <h2 class="text-xl font-bold">{name}</h2>
            <p>{job}</p>
        </div>
        <figure class="pb-4">
            <img
                    src="{image}"
                    class="object-contain h-80 w-48  "
                    alt="image of {name}"/>
        </figure>
    </div>
</main>
<style></style>