<template>
	<view>
		<scroll-view class="header-view" scroll-x="true" show-scrollbar>
			<view class="header-item" v-for="item in headerList">
				<image :src="item.avatar" mode="widthFix"></image>
				<view>{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="wrap">
			<!-- <u-button @click="clear">清空列表</u-button> -->
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="goToDetail">
						<view class="demo-user">
							<image :src="item.avatar" mode="widthFix"></image>
							<view>{{item.name}}</view>
						</view>
						<!-- <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load> -->
						<view class="demo-image">
							<image :src="item.image" mode="widthFix"></image>
						</view>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-tag">
							<view class="tag-like">
								<image src="http://www.yzlhaha.top/static/socialicon/thumb-up-line.png" mode="widthFix">
								</image>
								<view>{{item.like}}</view>
							</view>
							<view class="tag-comment">
								<image src="http://www.yzlhaha.top/static/socialicon/chat--line.png" mode="widthFix">
								</image>
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="goToDetail">
						<view class="demo-user">
							<image :src="item.avatar" mode="widthFix"></image>
							<view>{{item.name}}</view>
						</view>
						<!-- <u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
						</u-lazy-load> -->
						<view class="demo-image">
							<image :src="item.image" mode="widthFix"></image>
						</view>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-tag">
							<view class="tag-like">
								<image src="http://www.yzlhaha.top/static/socialicon/thumb-up-line.png" mode="widthFix">
								</image>
								<view>{{item.like}}</view>
							</view>
							<view class="tag-comment">
								<image src="http://www.yzlhaha.top/static/socialicon/chat--line.png" mode="widthFix">
								</image>
							</view>
						</view>
						<view class="demo-shop">
							{{item.shop}}
						</view>
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addData"></u-loadmore>
		</view>
	</view>
</template>

<script>
	export default {
		name: "recommend",
		data() {
			return {
				headerList: [{
					avatar: '../../static/logo.png',
					name: '李佳龙'
				}, {
					avatar: '../../static/logo.png',
					name: '李佳龙'
				}, {
					avatar: '../../static/logo.png',
					name: '李佳龙'
				}, {
					avatar: '../../static/logo.png',
					name: '李佳龙'
				}, {
					avatar: '../../static/logo.png',
					name: '李佳龙'
				}, {
					avatar: '../../static/logo.png',
					name: '李佳龙'
				}, ],
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						like: 999
					},
					{
						avatar: '../../static/logo.png',
						name: '李佳龙',
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						like: 999
					},
				]
			};
		},
		mounted() {
			this.addData();
		},
		// onLoad() {
		// 	this.addRandomData();
		// },
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			addData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			goToDetail(){
				uni.navigateTo({
					url:'../../pages/square/recommendDetail.vue'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header-view {
		height: 150rpx;
		padding: 10rpx 40rpx;
		white-space: nowrap;
		background-color: #fff;

		.header-item {
			width: 150rpx;
			display: inline-block;

			image {
				width: 80rpx;
				border-radius: 50%;
			}
		}
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-user {
		display: flex;
		height: 80rpx;
		justify-content: flex-start;
		align-items: center;

		image {
			width: 48rpx;
			height: 48rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;

		image {
			width: 100%;
		}
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
		width: 100%;
		height: 50rpx;

		.tag-like {
			display: flex;
			align-items: center;
			border-radius: 50rpx;
		}

		.tag-comment {
			margin-left: 10px;
			border-radius: 50rpx;
			padding: 4rpx 14rpx;
			display: flex;
			align-items: center;
			border-radius: 50rpx;
			font-size: 20rpx;
		}

		image {
			width: 48rpx;
		}
	}


	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>
