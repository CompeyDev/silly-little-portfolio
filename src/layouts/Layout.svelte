<script lang="ts">
	import { onMount } from "svelte";
	import Navbar from "../components/Navbar.svelte";
	export let leftAlign: boolean;
	import "../global.css";
	onMount(() => {
		onblur = () => {
			document.body.className =
				"bg-[#1f1f1f] dark:bg-[#525252] motion-safe:transition-colors motion-safe:duration-300";
		};
		onfocus = () => {
			document.body.className =
				"bg-[#525252] dark:bg-[#1f1f1f] motion-safe:transition-colors motion-safe:duration-300";
		};
	});
</script>
	{#if leftAlign}
		<div
			class="overflow-x-hidden overflow-y-hidden w-4/5"
		>
		<Navbar centerAlign={false}/>
			<section
				class="p-4"
			>
				<main>
					<slot />
				</main>
			</section>
		</div>

		<footer />
{/if}

{#if !leftAlign}
		<div
			class="overflow-x-hidden overflow-y-hidden"
			style="width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 999"
		>
		<Navbar centerAlign={true}/>
			<section
				class="p-8 sm:p-12 lg:p-24 lg:py-16 font-cascadia z-10 flex flex-col sm:flex-row gap-y-10 justify-center grid place-items-center h-screen"
			>
				<main>
					<slot />
				</main>
			</section>
		</div>
{/if}
