<!--
<script lang="ts">
    import { atom } from "nanostores";
    import { onMount } from "svelte";

    const timeToggled = atom(false);

    onMount(() => {
        document.getElementById("time_div").onclick = function() {
            timeToggled.set(!timeToggled); 
        }
        let timeFormatter = (timeZoneToggle, timeZone) => {
		return new Intl.DateTimeFormat("en-US", {
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			timeZone: timeZoneToggle ? timeZone : undefined,
		});
	};

	let dateFormatter = (timeZoneToggle, timeZone) => {
		return new Intl.DateTimeFormat("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
			timeZoneName: "short",
			timeZone: timeZoneToggle ? timeZone : undefined,
		});
    }
        setInterval(() => {
		const timeZone = "America/New_York";
		const isTimeZoneSame =
			Intl.DateTimeFormat().resolvedOptions().timeZone === timeZone;

		
		document.getElementById("time_div").onclick = function () {
			let now = new Date();
			let date = dateFormatter($timeToggled, timeZone).format(now);
			let time = timeFormatter($timeToggled, timeZone).format(now);
			document.getElementById("time_span").innerHTML = date;
			document.getElementById("date_span").innerHTML = time;
			return;
		};
	}, 100);
    })
</script>


<div
    id="time_div"
    class="flex flex-col items-start sm:items-end hover:underline cursor-pointer"
>
    {#if !$timeToggled}
        <span id="time_span"></span>
        <span id="date_span">{";)"}</span>
    {/if}
    
</div>
-->
