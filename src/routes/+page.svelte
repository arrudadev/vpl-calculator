<script lang="ts">
	import logo from '$lib/images/logo.png';
	import finance from '$lib/images/finance.svg';
	import github from '$lib/icons/github.svg';
	import plus from '$lib/icons/plus-solid.svg';
	import close from '$lib/icons/close-solid.svg';

	let cashFlows: number[] = [0];

	const handleAddNewCashFlow = () => {
		cashFlows = [...cashFlows, 0];
	};

	const handleChangeCashFlow = (event: Event, index: number) => {
		const target = event.target as HTMLInputElement;

		cashFlows.splice(index, 1, Number(target.value));
	};

	const handleRemoveCashFlow = (index: number) => {
		cashFlows = cashFlows.filter((_, i) => i !== index);
	};
</script>

<header class="bg-blue-gradient w-full">
	<nav class="m-auto flex w-full max-w-screen-md items-center justify-between px-8 py-4">
		<div class="flex items-center gap-2" data-testid="brand-wrapper">
			<img src={logo} alt="Logo" class="h-8 w-8" data-testid="brand-logo" />

			<span class="text-blue-gradient text-2xl font-bold" data-testid="brand-name">VPL</span>
		</div>

		<a href="https://github.com/arrudadev/vpl-calculator" data-testid="github-link">
			<img src={github} alt="GitHub" class="h-8 w-8" data-testid="github-icon" />
		</a>
	</nav>
</header>

<main class="w-full">
	<section class="bg-blue-gradient w-full py-8 sm:py-4">
		<div
			class="m-auto flex max-w-screen-md flex-col items-center justify-center gap-4 px-8 sm:flex-row"
		>
			<img src={finance} alt="Finanças" class="h-48 w-48" />

			<div class="flex flex-col items-start">
				<h1 class="text-blue-gradient text-3xl font-bold">Valor Presente Líquido</h1>

				<p class="mt-2 text-black">Calcule a viabilidade financeira do seu investimento</p>
			</div>
		</div>
	</section>

	<section class="w-full">
		<div class="flex w-full items-center justify-center bg-blue-500">
			<h2 class="px-8 py-8 text-lg font-bold text-white">TIR (Taxa Interna de Retorno)</h2>
		</div>

		<div
			class="m-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-2 bg-white px-8 py-8"
		>
			<h3 class="text-lg font-bold text-black">O que é TIR?</h3>

			<p class="text-center text-gray-600">
				A TIR, ou Taxa Interna de Retorno, é um método utilizado para a análise de investimentos.
				Sua definição é a taxa de desconto que iguala o VPL ou Valor Presente Líquido, a zero.
			</p>

			<p class="text-gray-600">Digite o valor da Taxa:</p>

			<input
				type="number"
				class="mx-8 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-2 focus:border-blue-500 sm:w-80"
				placeholder="TIR"
				required
			/>
		</div>
	</section>

	<section class="w-full">
		<div class="flex w-full items-center justify-center bg-blue-500">
			<h2 class="px-8 py-8 text-lg font-bold text-white">Fluxo de Caixa</h2>
		</div>

		<div
			class="m-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-2 bg-white px-8 py-8"
		>
			<h3 class="text-lg font-bold text-black">O que é Fluxo de Caixa?</h3>

			<p class="text-center text-gray-600">
				Fluxo de caixa é o movimento de entradas e saídas de dinheiro do caixa da empresa. Ou seja,
				o que você recebe e o que paga em seu negócio.
			</p>

			<p class="text-gray-600">Digite o valor do fluxo de caixa de cada ano:</p>

			<!-- eslint-disable-next-line -->
			{#each cashFlows as _, index}
				<div class="flex w-full justify-center gap-2">
					<input
						type="number"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-2 focus:border-blue-500 sm:w-72"
						placeholder={`Fluxo de caixa ${index + 1}º ano`}
						required
						on:change={(event) => handleChangeCashFlow(event, index)}
					/>

					<button
						class="flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 hover:bg-gray-100 hover:shadow-md"
						on:click={() => handleRemoveCashFlow(index)}
					>
						<img src={close} alt="close" class="h-4 w-4" />
					</button>
				</div>
			{/each}

			<button
				type="button"
				class="text-md flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-4 py-3 font-semibold hover:bg-gray-100 hover:shadow-md sm:w-40"
				on:click={handleAddNewCashFlow}
			>
				<img src={plus} alt="plus" class="h-4 w-4" />

				Adicionar
			</button>
		</div>
	</section>

	<section class="w-full">
		<div class="flex w-full items-center justify-center bg-blue-500">
			<h2 class="px-8 py-8 text-lg font-bold text-white">VPL (Valor Presente Líquido)</h2>
		</div>

		<div
			class="m-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-2 bg-white px-8 py-8"
		>
			<h3 class="text-lg font-bold text-black">O que é VPL?</h3>

			<p class="text-center text-gray-600">
				O valor presente líquido, também conhecido como valor atual líquido ou método do valor
				atual, é a fórmula econômico-financeira capaz de determinar o valor presente de pagamentos
				futuros descontados a uma taxa de juros apropriada, menos o custo do investimento inicial.
			</p>

			<button
				class="mt-8 w-full max-w-full rounded-full border border-[#0c66ee] bg-gradient-to-r from-[#468ef9] to-[#0c66ee] py-2 text-center text-base font-medium text-white opacity-90 transition duration-300 hover:opacity-100 sm:w-48"
			>
				Calcular
			</button>

			<p class="font-bold text-gray-600">VPL: 123123</p>

			<p class="text-lg font-bold text-gray-700">
				Como o VPL é positivo o investimento é <span class="text-blue-gradient">viável</span>
			</p>
		</div>
	</section>
</main>
