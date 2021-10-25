<template>
	<view>
		<u-action-sheet :list="list" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		name: "recommend",
		data() {
			return {
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: true
			};
		}
	}
</script>

<style>

</style>
