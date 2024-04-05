<script>
	import ImageList from "./imageList.svelte";
</script>

<div class="window">
<div class="mainMenu">

	<h1>Pedro Faria</h1>

	<h2>About me</h2>
	<h2>Street Photography</h2>
	<h2>Portraits</h2>

</div>

<div class="container">
	<div class="emptyHeader" />
	<ImageList/>
</div>

</div>




<style>
	@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400&family=Roboto&display=swap');

	:root {
		background-color: #fff3d4;
		font-family: 'Hanken Grotesk', sans-serif;
		color: #222222;
		font-size: 12pt;
	}
	.emptyHeader {
		display: grid;
		grid-template-rows: 50px;
	}

	.window {
		display: grid;
		grid-template-columns: 15% 80%;
		gap: 10px;
	}


	h1 {
		font-family: Cormorant, serif;
		font-size: 33pt;
		color: #3c190b;
		margin-bottom: 50px;
	}

	h2 {
		font-family: Cormorant, serif;
		font-size: 18pt;
		font-weight: 400;
		color: #3c190b;
	}
</style>