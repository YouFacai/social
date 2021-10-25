<template>
	<view class="search-box">
		<input class="input" type="text" placeholder="find something fun... ">
		<view class="btn-search">
			<image src="../../static/images/search-2-line-white.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.search-box {
		box-sizing: border-box;
		width: 100%;
		height: 100rpx;
		position: relative;
		padding: 0 60rpx;
		.input {
			height: 80rpx;
			background-color: #eee;
			border-radius: 80rpx;
			padding-left: 30rpx;
		}
		.btn-search{
			position: absolute;
			right: 60rpx;
			top: 0;
			background-color: #333333;
			width: 80rpx;
			height: 80rpx;
			text-align: center;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			image{
				width: 40rpx;
			}
		}
	}
</style>
