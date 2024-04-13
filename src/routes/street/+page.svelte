<script>
    import MainMenu from "../mainMenu.svelte";

	const images = [
		'IMG_8363.jpg'
	]

	let panel_container;

function handleActiveClasses(i) {
		if(panel_container){
			panel_container.childNodes.forEach(panel => {
        panel.classList.remove('active')
    	})
			panel_container.childNodes[i].classList.add('active')
			
		}
}
</script>

<main>
	<div class="container" bind:this={panel_container}>
		{#each images as {src, caption}, i}
			<div on:click={() => handleActiveClasses(i)} class="panel {i == 0 ? 'active' : ''}" style="background-image: url({src})">
				<h3>{caption}</h3>
			</div>
		{/each}    
	</div>
</main>


<div class="window">
	<MainMenu/>
	<div class="pageContent">
		
	</div>
</div>


<style>
		* {
		box-sizing: border-box;
	}

	main {
		font-family: 'Hanken Grotesk', sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		overflow: hidden;
		margin: 0;
	}

	.container {
		display: flex;
		width: 90vw;
	}

	.panel {
		height: 80vh;
		border-radius: 25px;
		color: #fff;
		flex: 0.5;
		cursor: pointer;
		margin: 10px;
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
/* 		-webkit-transition: all 700ms ease-in; */
	}

	.panel.active {
		flex: 5;
	}
	
	.panel h3 {
		font-size: 24px;
		position: absolute;
		bottom: 20px;
		left: 20px;
		margin: 0;
		opacity: 0;
	}
	
	.panel.active h3 {
		opacity: 1;
/* 		transition: opacity 0.3s ease-in 0.4s; */
	}
	
	@media (max-width: 480px) {
		.container {
			width: 100vw;
		}

		.panel:nth-of-type(4),
		.panel:nth-of-type(5) {
			display: none;
		}
	}

</style>