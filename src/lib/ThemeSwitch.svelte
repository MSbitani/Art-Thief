<script lang="ts">
	import { theme } from '$lib/stores';
	import SegmentedButton, { Segment, Icon } from '@smui/segmented-button';

	const themes = ['light', 'auto', 'dark'];
</script>

<SegmentedButton segments={themes} let:segment singleSelect bind:selected={$theme}>
	<Segment {segment} title={`${segment.charAt(0).toUpperCase()}${segment.slice(1)} Theme`}>
		<Icon class="material-symbols-outlined">{`${segment}_mode`}</Icon>
	</Segment>
</SegmentedButton>
