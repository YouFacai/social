<template>
	<view>
		<view class="header">
			<view class="title">消息</view>
			<view class="operate">
				<view class="icon-wrapper">
					<image src="http://www.yzlhaha.top/static/socialicon/chat-heart-line.png" mode="widthFix"></image>
				</view>
				<view class="icon-wrapper">
					<image src="http://www.yzlhaha.top/static/socialicon/account-pin-box-line.png" mode="widthFix">
					</image>
				</view>

			</view>
		</view>
		<search></search>
		<scroll-view scroll-y="true" class="chat-list" show-scrollbar="false">
			<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in chatList" :key="item.id"
				@open="open" :options="options" btn-width="120" @click="click">
				<view class="list-item">
					<view class="list-left">
						<view :class="item.tip?'avatar':''">
							<image :src="item.avatar" mode="widthFix"></image>
						</view>
						<view>
							<view class="uname">{{item.name}}</view>
							<view class="msg">{{item.lastMsg}}</view>
						</view>
					</view>
					<view class="list-right">
						<view class="time">{{item.lastTime}}</view>
						<button type="default" size="mini" @click="gotoDetail">
							<image src="../../static/images/arrow-right-line-white.png" mode="widthFix"></image>
						</button>
					</view>
				</view>
			</u-swipe-action>
		</scroll-view>
	</view>
</template>

<script>
	import search from '../../components/search/search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				chatList: [{
						id: 1,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: false //是否有未读消息
					},
					{
						id: 2,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					}, {
						id: 3,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					}, {
						id: 4,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					}, {
						id: 5,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					}, {
						id: 6,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					}, {
						id: 7,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					}, {
						id: 8,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					}, {
						id: 9,
						avatar: "../../static/logo.png",
						name: "李佳龙",
						lastTime: "2:00PM",
						lastMsg: "I am pig",
						show: false,
						tip: true
					},
				],
				disabled: false,
				show: false,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d',
					}
				}]
			}
		},
		methods: {
			click(index, index1) {
				if (index1 == 0) {
					this.chatList.splice(index, 1);
					this.$u.toast(`删除了第${index}个cell`);
				} else {
					console.log(111);
				}
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.chatList[index].show = true;
				this.chatList.map((val, idx) => {
					if (index != idx) this.chatList[idx].show = false;
				})
			},
			gotoDetail() {
				uni.navigateTo({
					url: './chatDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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

			.icon-wrapper {
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

	.chat-list {
		box-sizing: border-box;
		height: 1000rpx;
		// padding: 0 60rpx;
		// overflow: hidden;
	}

	.list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 150rpx;
		border-bottom: 2rpx solid #ccc;
		padding: 0 60rpx;

		.list-left {
			display: flex;

			.avatar {
				position: relative;
			}

			image {
				width: 80rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}

			.avatar:after {
				content: '';
				width: 20rpx;
				height: 20rpx;
				background-color: #fe5f63;
				position: absolute;
				border-radius: 50%;
				top: 10rpx;
				right: 15rpx;
			}

			.uname {
				font-size: 36rpx;
				font-weight: bold;
				margin-bottom: 10rpx;
			}

			.msg {
				color: #ccc;
				width: 300rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

		.list-right {
			text-align: right;
			margin-right: 10rpx;

			.time {
				color: #aaa;
				margin-bottom: 10rpx;
			}

			button {
				box-sizing: border-box;
				height: 60rpx;
				width: 60rpx;
				border-radius: 60rpx;
				background-color: #333;
				padding: 1rpx;

				image {
					margin-top: 5rpx;
					width: 50rpx;
				}
			}
		}

	}
</style>
>>>>>>> newdev
