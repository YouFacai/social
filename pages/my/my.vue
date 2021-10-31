<template>
	<view class="my_box">
		<!-- 头部 -->
		<view class="my_head_bg">
			<view class="my_head_bg_content">
				<!-- 我的头像 -->
				<image class="headPhoto" src="../../static/logo.png"></image>
				<!-- 名称 -->
				<view class="my_head_bg_name">名字</view>
				<view class="my_head_bg_myhome">个人主页</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="ListBox">
			<!-- 每一个item -->
			<view  v-for="(item,index) in menus" :key='index'>
				<navigator class="ListBox_item" :url="item.path">
					<image class="item_img" :src="item.icon"></image>
					<!-- 文字 -->
					<view class="item_text">{{item.text}}</view>
					<!-- 有消息就是消息没消息就是icon -->
					<view class="itemHint" v-if="item.hint">
						<view class="itemHint_txt">{{item.hint}}</view>
						<!-- 一个红色的圆点 -->
						<view class="redCircle"></view>
					</view>
					<view class="item_enter" v-else>
						<image src="http://www.yzlhaha.top/static/socialicon/rightArrows.png"></image>
					</view>
				</navigator>
			</view>
		</view>
		<tabBar/>
	</view>
</template>

<script>
	import {getMymenus} from '@/api/index.js';
	import tabBar from '../../components/tabBar/index.vue';
	export default {
		components:{
			tabBar
		},
		data() {
			return {
				// 后端请求回来的
				menus: [],
			};
		},
		created(){
			getMymenus().then(res=>{
				this.menus = res;
			})
		}
	}
</script>

<style scoped lang="scss">
	.my_box {
		width: 100%;
		height: 100vh;

		.my_head_bg {
			width: 100%;
			height: calc(750rpx * 200 / 320);
			display: flex;
			justify-content: center;
			align-items: center;
			background-image: url("http://www.yzlhaha.top/static/socialbg/bg.jpg");

			.my_head_bg_content {
				display: flex;
				flex-direction: column;

				.headPhoto {
					width: 150rpx;
					height: 150rpx;
					border-radius: 50%;
				}

				.my_head_bg_name {
					text-align: center;
					margin: 10px 0;
					font-size: 18px;
					font-weight: bold;

				}

				.my_head_bg_myhome {
					text-align: center;
				}
			}
		}

		.ListBox {
			width: 100%;
			padding: $pagePadding;

			.ListBox_item {
				width: 100%;
				height: 100rpx;
				display: flex;
				position: relative;

				.item_img {
					width: 50rpx;
					height: 50rpx;
					padding-right: $iconImgPadding;
				}

				.item_text {
					font-size: $mediumfontsize;
					color: $LightGreyfont;
				}

				.itemHint {
					display: flex;
					position: absolute;
					right: 40rpx;
					align-items: center;
					color: $LightGreyfont;

					.redCircle {
						width: 10rpx;
						height: 10rpx;
						background-color: red;
						border-radius: 50%;
						margin: 10rpx;
					}
				}
				
				.item_enter {
					position: absolute;
					right: 60rpx;
					
					 image {
						 width: 30rpx;
						 height: 30rpx;
					 }
				}
			}
			
		}
	}
</style>
