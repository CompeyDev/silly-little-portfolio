<script lang="ts">
	export let href: string;
	export let name: string;
	export let description: string | undefined = undefined;
</script>

<li>
	<a {href} target="_blank" rel="noreferrer noopener me" class="dark:text-ocean-300 link underline"
		>{name}</a
	>
	{#if description}
		<span class="dark:text-ocean-400">- {description}</span>
	{/if}
</li>
