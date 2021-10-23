<template>
	<view>
		<view class="header">
			<view class="title">消息</view>
			<view class="operate">
				<image src="../../static/logo.png" mode="widthFix"></image>
				<image src="../../static/logo.png" mode="widthFix"></image>
			</view>
		</view>
		<search></search>
		<scroll-view scroll-y="true" class="chat-list">
			<view v-for="item in chatList" class="list-item">
				<view class="list-left">
					<image :src="item.avatar" mode="widthFix"></image>
					<view>
						<view class="uname">{{item.name}}</view>
						<view class="msg">{{item.lastMsg}}</view>
					</view>
				</view>
				<view class="list-right">
					<view class="time">{{item.lastTime}}</view>
					<button type="default" size="mini">-></button>
				</view>
			</view>	
			
		</scroll-view>
	</view>
</template>

<script>
	import search from '../../components/search/search.vue'
	export default {
		data() {
			return {
				chatList:[
					{
						avatar:"../../static/logo.png",
						name:"小明",
						lastTime:"2:00PM",
						lastMsg:"hello"
					},{
						avatar:"../../static/logo.png",
						name:"小明",
						lastTime:"2:00PM",
						lastMsg:"hello"
					},{
						avatar:"../../static/logo.png",
						name:"小明",
						lastTime:"2:00PM",
						lastMsg:"hello"
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.header {
		height: 100rpx;
		display: flex;
		flex-direction: row;
		padding: 0 40rpx;
		line-height: 100rpx;
		justify-content: space-between;
		margin-bottom: 30rpx;
		.operate {
			width: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			image {
				width: 48rpx;
			}
		}

	}

	.title {
		font-size: $uni-font-size-title;
	}
	.chat-list{
		box-sizing: border-box;
		padding: 0 60rpx;
	}
	.list-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 150rpx;
		border-bottom: 2rpx solid #ccc;
		.list-left{
			display: flex;
			image{
				width: 64rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
			.uname{
				font-size: 36rpx;
				font-weight: bold;
				margin-bottom: 10rpx;
			}
			.msg{
				color: #ccc;
			}
		}
		.list-right{
			text-align: right;
			.time{
				color: #aaa;
				margin-bottom: 10rpx;
			}
			button{
				height: 50rpx;
				border-radius: 50rpx;
				line-height: 50rpx;
				background-color: #4CD964;
			}
		}
	}
</style>
