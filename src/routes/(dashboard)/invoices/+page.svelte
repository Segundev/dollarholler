<script lang="ts">
	import Search from '$lib/components/Search.svelte';
</script>

<svelte:head>
	<title>Invoices | Dollar Holler</title>
</svelte:head>

<div class="mb-16 flex items-center justify-between">
	<!-- Search field -->
	<Search />
	<!-- new invoice button -->
	<button
		class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover"
	>
		+invoice
	</button>
</div>
<!-- List on Invoices -->
<div>
	<!-- header -->
	<div class="table-header invoice-table text-daisyBush">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Clients</h3>
		<h3>Amounts</h3>
		<div />
		<div />
	</div>

	<!-- Invoices -->

	<div class="invoice-table items-center rounded-lg bg-white py-6 shadow-tableRow">
		<div>Tag</div>
		<div>8/1/2022</div>
		<div>12345</div>
		<div>Compressed.fm</div>
		<div>$504.7</div>
		<div>View</div>
		<div>More</div>
	</div>
</div>

<div>Total: $1,144.00</div>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}
</style>
