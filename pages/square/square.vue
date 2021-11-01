<template>
	<view>
		<view class="header">
			<view class="left">
				<image src="http://www.yzlhaha.top/static/socialicon/camera-line.png" mode="widthFix"></image>
			</view>
			<view class="middle">
				<view>关注</view>
				<view class="active" >推荐</view>
				<view>发现</view>
			</view>
			<view class="right">
				<image src="http://www.yzlhaha.top/static/socialicon/icon_Music.png" mode="widthFix"></image>
			</view>
		</view>
		<view>
			<!-- <recommend></recommend> -->
		</view>
		<tabBar/>
	</view>
</template>

<script>
	import recommend from '../../components/recommend/recommend.vue'
	import tabBar from '../../components/tabBar/index.vue';
	export default {
		components:{
			tabBar,
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.header{
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx 40rpx;
		border-bottom: 2rpx solid #ccc;
		image{
			width: 64rpx;
		}
		.middle{
			height: 100%;
			line-height: 80rpx;
			width: 300rpx;
			display: flex;
			font-size: $uni-font-size-title;
			justify-content: space-around;
			view{
				height: 100%;
			}
		}
		.active{
			border-bottom: 10rpx solid #24d9d6;
		}
	}
</style>
