<script lang="ts">
	import { theme } from '$lib/stores';
	import IconButton, { Icon } from '@smui/icon-button';

	const nextTheme: Map<string, string> = new Map([
		['auto', 'dark'],
		['dark', 'light'],
		['light', 'auto']
	]);
</script>

<IconButton on:click={() => ($theme = nextTheme.get($theme) || 'auto')} title="Change theme">
	<Icon class="material-symbols-outlined">{`${$theme}_mode`}</Icon>
</IconButton>
