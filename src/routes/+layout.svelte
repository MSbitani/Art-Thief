<script lang="ts">
	import { theme } from '$lib/stores';
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import TopAppBar, { Row, Section, Title, AutoAdjust as TopAutoAdjust } from '@smui/top-app-bar';
	import BottomAppBar, {
		Section as BottomSection,
		AutoAdjust as BottomAutoAdjust
	} from '@smui-extra/bottom-app-bar';
	import Tab, { Icon, Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	let topAppBar: TopAppBar;
	let bottomAppBar: BottomAppBar;

	let tabs: {
		icon: string;
		label: string;
	}[] = [
		{
			icon: 'menu_book',
			label: 'Overview'
		},
		{
			icon: 'star',
			label: 'Rate Art'
		},
		{
			icon: 'view_in_ar',
			label: 'Aug Reality'
		},
		{
			icon: 'send',
			label: 'Send List'
		}
	];
	let active = tabs[0];
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
	/>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono" />
	{#if $theme == 'dark'}
		<link rel="stylesheet" href="/smui-dark.css" />
	{:else if $theme == 'light'}
		<link rel="stylesheet" href="/smui-light.css" />
	{:else}
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
		<link rel="stylesheet" href="/smui-light.css" media="(prefers-color-scheme: light)" />
	{/if}
	<meta name="color-scheme" content={$theme == 'auto' ? 'dark light' : $theme} />
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="fixed">
	<Row>
		<Section>
			<Title>Art Thief</Title>
		</Section>
		<Section align="end" toolbar>
			<ThemeSwitch />
		</Section>
	</Row>
</TopAppBar>
<TopAutoAdjust {topAppBar} />

<slot />

<!-- TODO replace with Navigation Bar when M3 is available -->
<BottomAutoAdjust {bottomAppBar} />
<BottomAppBar bind:this={bottomAppBar} variant="fixed">
	<TabBar {tabs} let:tab bind:active>
		<Tab {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition="fade">
			<Icon class="material-symbols-outlined">{tab.icon}</Icon>
			<Label>{tab.label}</Label>
		</Tab>
	</TabBar>
</BottomAppBar>
