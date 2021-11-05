<template>
	<view>
		<view class="header">
			<view class="left">
				<image src="http://www.yzlhaha.top/static/socialicon/camera-line.png" mode="widthFix"></image>
			</view>
			<view class="middle">
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#24d9d6"
					gutter="20rpx" item-width="100rpx"></u-tabs>
			</view>
			<view class="right">
				<image src="http://www.yzlhaha.top/static/socialicon/icon_Music.png" mode="widthFix"></image>
			</view>
		</view>
		<view v-if="this.current === 1" style="height: 100%">
			<recommend></recommend>
		</view>
		<view v-else-if="this.current === 0">
			<follow></follow>
		</view>
		<tabBar/>
	</view>
</template>

<script>
	import recommend from '../../components/recommend/recommend.vue'
	import follow from '../../components/follow/follow.vue'
	import tabBar from '../../components/tabBar/index.vue'
	export default {
		components:{
			recommend,
			follow,
			tabBar
		},
		data() {
			return {
				list: [{
					name: '关注',
				}, {
					name: '推荐',
				}],
				current: 1
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
	.header {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx 40rpx;
		border-bottom: 2rpx solid #ccc;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 99;
		image {
			width: 64rpx;
		}

		.middle {
			height: 100%;
			line-height: 80rpx;
			width: 500rpx;
			display: flex;
			font-size: $uni-font-size-title;
			justify-content: space-around;

			view {
				height: 100%;
			}
		}

		.active {
			border-bottom: 10rpx solid #24d9d6;
			font-weight: bold;
		}
	}
</style>
