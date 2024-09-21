<script>
	import PersonCard from "$lib/PersonCard.svelte";
	import people from '$lib/people.json';
</script>

<main>
	<div class="p-4">
		<h1 class="text-7xl pb-8"><b>About Us</b></h1>
		We are a group of high school students from Edison, New Jersey who are passionate about rocketry. We hope to use
		our
		skills to win TARC.
	</div>

	<div class="align-middle text-center">
		<h2 class="text-5xl font-bold">Marketing</h2>
		<div class="flex flex-wrap gap-1 justify-center ">
			{#each people.filter(el => el.subteam === "Marketing") as person}
				<PersonCard name="{person.name}" job="{person.job}" image="{person.image}"></PersonCard>
			{/each}
		</div>

		<h2 class="text-5xl font-bold">Design</h2>
		<div class="flex flex-wrap gap-1 justify-center">
			{#each people.filter(el => el.subteam === "Design") as person}
				<PersonCard name="{person.name}" job="{person.job}" image="{person.image}"></PersonCard>
			{/each}
		</div>

		<h2 class="text-5xl font-bold">Build</h2>
		<div class="flex flex-wrap gap-1 justify-center">
			{#each people.filter(el => el.subteam === "Build") as person}
				<PersonCard name="{person.name}" job="{person.job}" image="{person.image}"></PersonCard>
			{/each}
		</div>

		<h2 class="text-5xl font-bold">Avionics</h2>
		<div class="flex flex-wrap gap-1 justify-center">
			{#each people.filter(el => el.subteam === "Avionics") as person}
				<PersonCard name="{person.name}" job="{person.job}" image="{person.image}"></PersonCard>
			{/each}
		</div>
	</div>
</main>
