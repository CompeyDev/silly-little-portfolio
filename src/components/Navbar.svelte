<script lang="ts">
    export let centerAlign: boolean;
</script>


{#if centerAlign}
    <div class="text-center p-4 font-cascadia justify-center">
        <a href="/">home</a>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a href="/blog">blog</a>
        <br />
    </div>
{/if}

{#if !centerAlign}
    <div class="p-4 font-cascadia">
        <a href="/">home</a>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a href="/blog">blog</a>
        <br />
        <hr />
    </div>
{/if}
