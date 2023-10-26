<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Valor Presente Liquido</title>
	<meta
		name="description"
		content="O valor presente líquido, também conhecido como valor atual líquido ou método do valor atual, é a fórmula econômico-financeira capaz de determinar o valor presente de pagamentos futuros descontados a uma taxa de juros apropriada, menos o custo do investimento inicial."
	/>
</svelte:head>

<slot />

<style lang="postcss">
	:global(.text-blue-gradient) {
		background: linear-gradient(
			169.4deg,
			#3984f4 -6.01%,
			#0cd3ff 36.87%,
			#2f7cf0 78.04%,
			#0e65e8 103.77%
		);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}

	:global(.bg-blue-gradient) {
		background: linear-gradient(
			169.4deg,
			rgba(57, 132, 244, 0.1) -6.01%,
			rgba(12, 211, 255, 0.1) 36.87%,
			rgba(47, 124, 240, 0.1) 78.04%,
			rgba(14, 101, 232, 0.1) 103.77%
		);
	}
</style>
