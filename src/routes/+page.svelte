<script lang="ts">
	import type { CatsResponse } from './+page';

	export let data: CatsResponse;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1"><span class="gradient-heading">Cheap Cat Store</span></h1>
		<div class="grid grid-cols-[50%_50%] gap-8">
			{#each data.cats as cat}
				<a
					class="card bg-initial card-hover overflow-hidden"
					href="/elements/cards"
					><header>
						<img src={cat.image} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
					</header>
					<div class="p-4 space-y-4">
						<h3 class="h3" data-toc-ignore="">{cat.name}</h3>
						<article>
							<p>
								The cat (Felis catus) is a domesticated species of small carnivorous mammal. Cats
								are commonly kept as house pets but can also be farm cats or feral cats; the feral
								cat ranges freely and avoids human contact. Domestic cats are valued by humans for
								companionship and their ability to kill vermin.
							</p>
						</article>
					</div>
					<hr class="opacity-50" />
					<footer class="p-4 flex justify-start items-center space-x-4">
						<div class="flex-auto flex justify-between items-center">
							<h3 class="font-bold" data-toc-ignore="">💰{cat.price / 100}€</h3>
							<button type="button" class="btn variant-filled">Buy now</button>
						</div>
					</footer></a>
			{/each}
		</div>
	</div>
</div>
