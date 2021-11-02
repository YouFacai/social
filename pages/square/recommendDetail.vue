<template>
	<view>
		<view class="detail-header">
			<view class="header-left">
				<image src="../../static/logo.png" mode="widthFix" class="avatar"></image>
				<view class="user-info">
					<view class="user">
						<view>云雾</view>
						<image src="http://www.yzlhaha.top/static/socialicon/vip-fill-copy.png" mode="widthFix"></image>
					</view>
					<view style="color: #aaa;">刚刚推荐</view>
				</view>
			</view>
			<view class="header-right">
				<view class="btn">私聊</view>
				<image src="http://www.yzlhaha.top/static/socialicon/list-unordered.png" mode="widthFix"></image>
			</view>
		</view>
		<u-swiper :list="list" :circular="false" :autoplay="false" height="700"></u-swiper>
		<!-- <swiper class="swiper" :indicator-dots="indicatorDots" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="image-box">
					<image src="../../static/logo.png" mode="aspectFit"></image>
				</view>

			</swiper-item>
			<swiper-item>
				<view class="image-box">
					<image src="../../static/logo.png" mode="aspectFit"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="image-box">
					<image src="../../static/logo.png" mode="aspectFit"></image>
				</view>
			</swiper-item>
		</swiper> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				interval: 2000,
				duration: 500,
				list: [{
						image: 'https://tse1-mm.cn.bing.net/th/id/R-C.8c372fd892b3bd371eb3a1df8bd7fc88?rik=4KxekfOQD28FKA&riu=http%3a%2f%2fwww.desktx.com%2fd%2ffile%2fwallpaper%2fscenery%2f20170303%2fdfe53a7300794009a029131a062836d5.jpg&ehk=6ayU5y%2fwtGnzhu7g%2bJimm2REgEbHGczl9Mkbg3I1%2b5I%3d&risl=&pid=ImgRaw&r=0',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'http://www.yzlhaha.top/static/socialicon/vip-fill-copy.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.detail-header {
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 40rpx;

		.header-left {
			display: flex;

			image {
				width: 80rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}

			.user-info {
				display: flex;
				flex-direction: column;

				.user {
					display: flex;
					align-items: center;
					font-size: 38rpx;

					image {
						width: 44rpx;
					}
				}
			}

		}

		.header-right {
			display: flex;
			align-items: center;

			.btn {
				width: 100rpx;
				text-align: center;
				padding: 8rpx;
				margin-right: 10rpx;
				border: 1px solid #24d9d6;
				border-radius: 100rpx;
			}

			image {
				width: 60rpx;
			}
		}
	}

	// .swiper {
	// 	height: 700rpx;
	// 	background-color: #fff;

	// 	.image-box {
	// 		display: flex;
	// 		justify-content: center;
	// 		align-items: center;
	// 		image {
	// 			max-height: 700rpx;
	// 		}
	// 	}

	// }
</style>
