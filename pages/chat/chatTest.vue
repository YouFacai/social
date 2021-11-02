<template>
	<view>
		<view class="content" id="content" :style="{height: style.contentViewHeight + 'px'}">
			<scroll-view id="scrollview" class="chat-window" scroll-y="true"
				:style="{height: style.contentViewHeight + 'px'}" :scroll-with-animation="true" :scroll-top="scrollTop">
				<!-- <view class="chat-window"> -->
				<view class="small-talk_time">12:18</view>
				<!-- 聊天内容 -->
				<view class="content-all">
					<!-- 聊天窗口 -->
					<view :class="item.type" v-for="(item, index) in chatRecord" :key="index" class="m-item">
						<!-- 收信人 -->
						<view class="talk-text talk-left" v-if="item.type == 'talk-left'">
							<!-- 收信人头像 -->
							<view class="talk-photo">
								<image src="../../static/logo.png" class="talk-img"></image>
							</view>
							<!-- 收信人消息 -->
							<view class="talk-content">
								<view class="talk-huge"></view>
								<view class="talk-title">{{item.message}}</view>
							</view>
						</view>
						<view class="talk-text talk-right" v-if="item.type == 'talk-right'">
							<!-- 发信人消息 -->
							<view class="talk-content">
								<view class="talk-title">{{item.message}}</view>
								<view class="talk-huge"></view>
							</view>
							<!-- 发信人头像 -->
							<view class="talk-photo">
								<image src="../../static/logo.png" class="talk-img"></image>
							</view>
						</view>
					</view>
				</view>
				<!-- </view> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		created() {
			const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度     api为获取系统信息同步接口
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) -
				70; //像素   因为给出的是像素高度 然后我们用的是upx  所以换算一下 
			this.scrollToBottom(); //创建后调用回到底部方法
		},
		data() {
			// 聊天页面时时滚动样式
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0
				}
			}
		},
		scrollToBottom() {
			let that = this;
			let query = uni.createSelectorQuery();
			query.selectAll('.m-item').boundingClientRect();
			query.select('#scrollview').boundingClientRect();
			query.exec((res) => {
				that.style.mitemHeight = 0;
				res[0].forEach((rect) => that.style.mitemHeight = that.style.mitemHeight + rect.height +
					40) //获取所有内部子元素的高度
				// 因为vue的虚拟DOM 每次生成的新消息都是之前的，所以采用异步setTimeout    主要就是添加了这红字
				setTimeout(() => {

					if (that.style.mitemHeight > (that.style.contentViewHeight -
							100)) { //判断子元素高度是否大于显示高度
						that.scrollTop = that.style.mitemHeight - that.style
							.contentViewHeight //用子元素的高度减去显示的高度就获益获得序言滚动的高度
					}
				}, 100)
			})
		}
	}
</script>

<style>

</style>
