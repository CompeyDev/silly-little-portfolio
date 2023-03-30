<script lang="ts">
	// import { onMount } from "svelte";
	import Navbar from "../components/Navbar.svelte";
	export let leftAlign: boolean;
	import "../global.css";
	// onMount(() => {
	// 	onblur = () => {
	// 		document.body.className =
	// 			"bg-[#1f1f1f] dark:bg-[#525252] motion-safe:transition-colors motion-safe:duration-300";
	// 	};
	// 	onfocus = () => {
	// 		document.body.className =
	// 			"bg-[#525252] dark:bg-[#1f1f1f] motion-safe:transition-colors motion-safe:duration-300";
	// 	};

	// 	onmousemove = (e) => {
	// 		console.log('moved?')
	// 		var x = e.clientX;
	// 		var y = e.clientY;
	// 		const jake = document.getElementById("jake");
	// 		if (!jake) return;
	// 		jake.style.marginLeft = x + "px";
	// 		jake.style.marginTop = y + "px";
	// 	}
		
	// 	onscroll = () => {
	// 		window.scroll(0, 0);
	// 	}

	// 	onclick = async (e) => {
	// 		const jake = document.getElementById("jake");
	// 		if (!jake) return;
	// 		jake.style.height = "25px";
	// 		jake.style.width = "25px";
	// 		await new Promise((resolve) => setTimeout(resolve, 100));
	// 		jake.style.height = "20px";
	// 		jake.style.width = "20px";
	// 	};
	// });
</script>

<meta charset="utf-8" />
<!-- <div
	class="font-bold text-gray-700 opacity-50 rounded-full bg-white flex items-center justify-center font-mono"
	style="height: 20px; width: 20px"
	id="jake"
/> -->
{#if leftAlign}
	<div class="overflow-x-hidden overflow-y-hidden w-4/5">
		<!-- <Navbar centerAlign={false} /> -->
		<section class="p-4">
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
		<!-- <Navbar centerAlign={true} /> -->
		<section
			class="p-8 sm:p-12 lg:p-24 lg:py-16 font-cascadia z-10 flex flex-col sm:flex-row gap-y-10 justify-center grid place-items-center h-screen"
		>
			<main>
				<slot />
			</main>
		</section>
	</div>
{/if}
