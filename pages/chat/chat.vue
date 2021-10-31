<template>
	<view>
		<view class="header">
			<view class="title">消息</view>
			<view class="operate">
				<view class="icon-wrapper">
					<image src="http://www.yzlhaha.top/static/socialicon/chat-heart-line.png" mode="widthFix"></image>
				</view>
				<view class="icon-wrapper">
					<image src="http://www.yzlhaha.top/static/socialicon/account-pin-box-line.png" mode="widthFix"></image>
				</view>
				
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
					<button type="default" size="mini">
						<image src="../../static/images/arrow-right-line-white.png" mode="widthFix"></image>
					</button>
				</view>
			</view>	
			
		</scroll-view>
		<tabBar/>
	</view>
</template>

<script>
	import search from '../../components/search/search.vue'
	import tabBar from '../../components/tabBar/index.vue';
	export default {
		components:{
			tabBar
		},
		data() {
			return {
				chatList:[
					{
						avatar:"../../static/logo.png",
						name:"李佳龙",
						lastTime:"2:00PM",
						lastMsg:"I am pig"
					},{
						avatar:"../../static/logo.png",
						name:"李佳龙",
						lastTime:"2:00PM",
						lastMsg:"I am pig"
					},{
						avatar:"../../static/logo.png",
						name:"李佳龙",
						lastTime:"2:00PM",
						lastMsg:"I am pig"
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
			width: 180rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.icon-wrapper{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				background-color: #eee;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 10rpx;
			}
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
				box-sizing: border-box;
				height: 60rpx;
				width: 60rpx;
				border-radius: 60rpx;
				background-color: #333;
				padding: 1rpx;
				image{
					margin-top: 5rpx;
					width: 50rpx;
				}
			}
		}
	}
</style>

