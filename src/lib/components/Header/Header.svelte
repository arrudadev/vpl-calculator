<script>
	import logo from '$lib/images/logo.png';
	import github from '$lib/icons/github.svg';
</script>

<header class="bg-blue-gradient w-full">
	<nav class="flex w-full max-w-screen-xl items-center justify-between px-8 py-4">
		<div class="flex items-center gap-2" data-testid="brand-wrapper">
			<img src={logo} alt="Logo" class="h-8 w-8" data-testid="brand-logo" />

			<span class="text-blue-gradient text-2xl font-bold" data-testid="brand-name">VPL</span>
		</div>

		<a href="https://github.com/arrudadev/vpl-calculator" data-testid="github-link">
			<img src={github} alt="GitHub" class="h-8 w-8" data-testid="github-icon" />
		</a>
	</nav>
</header>
