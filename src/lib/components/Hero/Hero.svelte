<script>
	import finance from '$lib/images/finance.svg';
</script>

<section class="bg-blue-gradient flex w-full flex-col gap-8 px-8 py-8 sm:grid sm:grid-cols-2">
	<div class="flex flex-col justify-center">
		<h1 class="text-blue-gradient text-2xl font-bold">Valor Presente Liquido</h1>

		<p class="mt-4 text-gray-800">
			O Valor Presente Líquido (VPL) e a Taxa Interna de Retorno (TIR) que permite analisar a
			viabilidade financeira de projetos ou novos negócios, a partir das estimativas dos
			investimentos iniciais e retornos futuros (fluxos de caixa).
		</p>

		<button
			class="mt-8 w-full max-w-full rounded-full border border-[#0c66ee] bg-gradient-to-r from-[#468ef9] to-[#0c66ee] py-2 text-center text-base font-medium text-white opacity-90 transition duration-300 hover:opacity-100 sm:w-48"
		>
			Calcular
		</button>
	</div>

	<div class="flex items-center justify-center">
		<img src={finance} alt="Finanças" class="h-64 w-64 md:h-96 md:w-96" />
	</div>
</section>
