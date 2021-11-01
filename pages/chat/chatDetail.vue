<template>
	<view>
		<scroll-view scroll-y="true" style="overflow: auto; height: 1120rpx;" scroll-into-view="msg8">
			<view v-for="item in chatList" class="chat-item" :id="'msg'+item.id">
				<view class="time">{{item.time}}</view>
				<view class="msg" :class="[item.username ==='user1'?'right':'left']">
					<image src="../../static/logo.png" mode="widthFix" />
					<view class="chat-content">{{item.msg}}</view>
				</view>
			</view>
		</scroll-view>
		<view class="input-box">
			<image src="http://www.yzlhaha.top/static/socialicon/add-circle-line.png" mode="widthFix"></image>
			<textarea type="text" confirm-type="send" class="input" placeholder="输入新消息" v-model="msg" auto-height="true" show-confirm-bar="false" maxlength="-1" />
			<image @click="handleSubmit" class="send"
				src="http://www.yzlhaha.top/static/socialicon/send-plane-fill-copy.png" mode="widthFix"></image>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
				chatList: [{
					id: 1,
					username: "user1",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀",
					time: "2:00PM"
				}, {
					id: 2,
					username: "user2",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀",
					time: "2:00PM"
				}, {
					id: 3,
					username: "user2",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀",
					time: "2:00PM"
				}, {
					id: 4,
					username: "user2",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀",
					time: "2:00PM"
				}, {
					id: 5,
					username: "user2",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀",
					time: "2:00PM"
				}, {
					id: 6,
					username: "user1",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀",
					time: "2:00PM"
				}, {
					id: 7,
					username: "user2",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀",
					time: "2:00PM"
				}, {
					id: 8,
					username: "user2",
					avatar: "../../static/logo.png",
					msg: "在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀在吗，你好呀",
					time: "2:00PM"
				}]
			}
		},
		onLoad() {
			this.getMsg();
		},
		methods: {
			handleSubmit() {
				//模拟ajax拿回来的数据
				if (this.msg) {
					this.chatList.push({
						id: 9,
						username: "user1",
						avatar: "../../static/logo.png",
						msg: this.msg,
						time: "2:00PM"
					})
					this.socket.emit("message", this.msg);
					console.log(this.socket);
				}

			},
			getMsg() {
				this.socket.on("gbmsg", data => {
					this.chatList.push({
						id: 7,
						username: "user1",
						avatar: "../../static/logo.png",
						msg: data,
						time: "2:00PM"
					});
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: #eee;
	}
</style>
<style lang="scss">
	.chat-item {
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx;
		display: flex;
		flex-direction: column;

		.time {
			text-align: center;
			margin-bottom: 20rpx;
		}

		.right {
			display: flex;
			flex-direction: row-reverse;

			.chat-content {
				border-radius: 20rpx 0 20rpx 20rpx !important;
			}
		}

		.msg {
			display: flex;
			width: 100%;

			.chat-content {
				max-width: 70%;
				padding: 25rpx;
				word-break: break-all;
				background-color: #24d9d6;
				border-radius: 0 20rpx 20rpx 20rpx;
			}

			image {
				width: 80rpx;
				border-radius: 50%;
				margin: 0 20rpx;
			}
		}
	}

	.input-box {
		width: 100%;
		height: 130rpx;
		display: flex;
		align-items: center;
		// position: fixed;
		padding: 15rpx 40rpx;
		background-color: #fff;
		// bottom: 0;
		// left: 0;

		image {
			width: 80rpx;
		}

		.input {
			flex: 1;
			height: 70%;
			padding: 18rpx 30rpx;
			border-radius: 20rpx;
			background-color: #eee;
		}
	}
</style>
