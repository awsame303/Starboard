<script>
	import {onMount} from 'svelte';
	import { fade } from 'svelte/transition';

	let words = ['Creators', 'Innovators', 'Engineers', 'Starboard'];
	let currentWord = '';
	let isFinalWord = false;
	let interval;
	let afterText = false;


	const writeWord = (word) => {
		return new Promise((resolve) => {
			let i = 0;
			interval = setInterval(() => {
				if (i < word.length) {
					currentWord += word[i];
					i++;
				} else {
					clearInterval(interval);
					resolve();
				}
			}, 20); // Adjust typing speed here
		});
	}

	const deleteWord = (word) => {
		return new Promise((resolve) => {
			interval = setInterval(() => {
				if (word.length > 0) {
					currentWord = word.slice(0, -1);
					word = word.slice(0, -1);
				} else {
					clearInterval(interval);
					resolve();
				}
			}, 20); // Adjust deleting speed here
		});
	}

	const cycleWords = async () => {
		for (let i = 0; i < words.length; i++) {
			await writeWord(words[i]);
			if (i < words.length - 1) {
				await new Promise(resolve => setTimeout(resolve, 1000)); // Pause before deleting
				await deleteWord(words[i]);
			}
		}
		isFinalWord = true;
		afterWords();
	}

	onMount(() => {
		cycleWords();
	});

	const afterWords = async () => {
		await new Promise(e => setTimeout(e, 500))
		afterText = true;
	}


</script>
<main class="align-top justify-normal">
	<div class="pl-10 pt-6 pb-6">
		<h1 class="text-9xl">
			<b> We are</b> <br/>
			<div class="{isFinalWord ? 'final-word' : ''} font-bold">{currentWord}</div>
		</h1>
		{#if afterText}
			<p class="text-2xl pt-5" transition:fade>We are a group of Students from New Jersey participating in TARC. We hope to explore the world of rocketry, foster teamwork, and develop our skills as we work towards success. Our team has a <b>diverse set of skills</b> including programming, engineering, and designing. We are passionate about <b>expanding our knowledge, working with technology, and collaborating as a team.</b> </p>
		{/if}
	</div>

</main>
<style>

    @keyframes gradientCycle {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }

    .final-word {
        background: linear-gradient(90deg, blue, purple, blue);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        animation: gradientCycle 5s ease infinite;
    }


</style>