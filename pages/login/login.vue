<template>
	<view class="bg">
		<view class="logo">
			<image src="../../static/logo.png" mode="widthFix"></image>
			<view>waiting for you</view>
		</view>
		<u-form :model="form" ref="uForm" class="form" :border-bottom="false">
			<u-form-item prop="email" class="label" :border-bottom="false">
				<u-input v-model="form.email" placeholder="请输入邮箱" :custom-style="customInput" />
			</u-form-item>

			<u-form-item prop="checking" class="label" :border-bottom="false" v-if="isEmailLogin">
				<u-input v-model="form.checking" placeholder="请输入验证码" maxlength=4 :custom-style="customInput" />
				<template v-slot:right>
					<!-- #ifdef H5 -->
					<view v-if="timerNum === 60" class="get-checking" @click="getChecking">获取验证码</view>
					<view v-else class="get-checking">{{timerNum}}秒后可重新获取</view>
					<!-- #endif -->

					<!-- #ifdef MP || APP-PLUS -->
					<view v-if="timerNum === 60" class="get-checking-app" @click="getChecking">获取验证码</view>
					<view v-else class="get-checking-app">{{timerNum}}秒后可重新获取</view>
					<!-- #endif -->

				</template>
			</u-form-item>

			<u-form-item prop="checking" class="label" :border-bottom="false" v-else>
				<u-input v-model="form.checking" placeholder="请输入密码" maxlength=16 :custom-style="customInput" />
			</u-form-item>
		</u-form>
		<view style="padding: 0 100rpx; width: 100%;">
			<u-button @click="submit" :custom-style="customStyle" shape="circle" :ripple="true" ripple-bg-color="#fff">
				立即登录</u-button>
		</view>
		<view class="login-help">
			<view @click="transPassword" v-if="isEmailLogin">密码登录</view>
			<view @click="transEmail" v-else>邮箱验证登录</view>
			<view @click="gotoRegister">立即注册</view>
		</view>
		<view class="user-agreement">
			<radio value="r1" :checked="checked" />
			<view>我已阅读并同意《用户协议》与《隐私协议》</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEmailLogin: true,
				timerNum: 60,
				timer: null,
				customStyle: {
					height: "100rpx",
					color: "rgba(255, 255, 255, .6)",
					border: "none",
					backgroundColor: "rgba(255, 255, 255, .1)"
				},
				customInput: {
					height: "100rpx",
					borderRadius: "100rpx",
					color: "#000",
					paddingLeft: "30rpx",
					backgroundColor: "rgba(255,255,255,.1)",
					fontSize: "36rpx"
				},
				checked: false,
				form: {
					email: '',
					checking: '',
				},
				rules: {
					email: [{
						required: true,
						message: '请输入邮箱',
						pattern: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
						message: '邮箱格式不正确',
						// 可以单个或者同时写两个触发验证方式 
						trigger:  'blur',
					}],
					checking: [{
						len: 4,
						message: '请输入4位验证码',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submit() {
				console.log(1);
			},
			transPassword() {
				this.isEmailLogin = false;
				this.form.checking = ''
			},
			transEmail() {
				this.isEmailLogin = true;
			},
			gotoRegister() {
				uni.navigateTo({
					url: './register'
				})
			},
			getChecking() {
				console.log(1);
				this.timerNum -= 1;
				this.timer = setInterval(() => {
					if (this.timerNum === 0) { // 定时器时间为0后清除定时器
						this.timer && this.clearTimer();
						this.timerNum = 60;
					} else {
						this.timerNum -= 1;
					}
				}, 1000);
			},
			clearTimer() { //清除定时器
				clearInterval(this.timer);
				this.timer = null;
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>
<style lang="scss">
	.bg {
		background: linear-gradient(45deg, #3879cd, #ccc, #3879cd, #6cc8b9, #ccc, #6cc8b9);
		height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-top: 60rpx;

		.logo {
			color: #eee;
			text-align: center;
			margin-bottom: 40rpx;

			image {
				width: 400rpx;
				margin: 30rpx;
			}
		}

		.form {
			box-sizing: border-box;
			width: 100%;
			padding: 30rpx 100rpx;
			position: relative;

			.label {
				margin: 30rpx 0;

				.get-checking {
					position: absolute;
					right: 130rpx;
					float: right;
					white-space: nowrap;
					font-size: 36rpx;
					color: #24d9d6;
				}
				.get-checking-app{
					position: absolute;
					right: 130rpx;
					top: 200rpx;
					z-index: 99;
					float: right;
					white-space: nowrap;
					font-size: 36rpx;
					color: #24d9d6;
				}
			}


		}

		.login-help {
			display: flex;
			width: 100%;
			padding: 30rpx 100rpx;
			color: #333;
			justify-content: space-between;
		}

		.user-agreement {
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			bottom: 30rpx;
			color: #333;
		}
	}
</style>
