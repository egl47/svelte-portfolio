<script>
	import Icon from "$lib/images/logo-small.png"
</script>
<div class="bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-300">
	<header class="bg-clear">
		<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
			<!-- logo on left side here -->
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img class="h-12 w-12" src={Icon} alt="">
				</a>
			</div>
			<!-- three bar menu button that appears on window resize -->
			<div class="flex lg:hidden">
				<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
				<span class="sr-only">Open main menu</span>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a href="/about" class="font-semibold text-gray-800 hover:text-orange-700">About</a>
				<a href="/projects" class="font-semibold text-gray-800 hover:text-orange-700">Projects</a>
			</div>
		</nav>
	</header>
	<div class="flex-auto">
		<div class="flex lg:flex-1 pt-24 pb-28 px-40 items-center justify-center">
			<div class="font-sans text-gray-900 text-6xl text-center font-bold animate-fade-in-down">
				Hi, I'm Everett. I do applied data science, machine learning, and full-stack development.
			</div>
		</div>
		<div class="flex lg:flex-1 pb-24 items-center justify-center">
			<a href="/projects" class="font-sans text-gray-700 text-lg text-center animate-fade-in-down">See projects</a>
		</div>
	</div>
</div>
<div class="bg-white">
	<div class="flex lg:flex-1 p-24 px-40 items-center justify-center">
		<div class="text-md p-10">I study Computer Science at Cornell Engineering and have a minor in business. I'm on the MLE subteam of Cornell Data Science, and I've interned at Avalara and WEX doing data science.</div>
		<img class="h-64 w-64" src="https://cornelldata.science/cds_logo.png" alt="">
	</div>
</div>

<style lang="postcss">
:global(html) {
	/* background-color: theme(colors.gray.100); */
}
</style>