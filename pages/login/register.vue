<template>
	<view class="bg">
		<view class="logo">
			<image src="../../static/logo.png" mode="widthFix"></image>
			<view style="font-size: 36rpx;">waiting for you</view>
		</view>
		<u-form :model="form" ref="uForm" class="form" :border-bottom="false">
			<u-form-item prop="email" class="label" :border-bottom="false">
				<u-input v-model="form.email" placeholder="请输入邮箱" :custom-style="customInput" />
			</u-form-item>

			<u-form-item prop="checking" class="label babel1" :border-bottom="false">
				<u-input v-model="form.checking" placeholder="请输入验证码" maxlength=4 :custom-style="customInput" />
				<!-- 使用v-slot具名插槽，组件内置一个right插槽 -->
				<template v-slot:right>
					<view v-if="timerNum === 60" class="get-checking" @click="getChecking">获取验证码</view>
					<view v-else class="get-checking">{{timerNum}}秒后可重新获取</view>
				</template>
			</u-form-item>

			<u-form-item prop="password" class="label" :border-bottom="false">
				<u-input v-model="form.password" placeholder="请设置密码" maxlength=16 :custom-style="customInput" />
			</u-form-item>
		</u-form>
		<view style="padding: 0 100rpx; width: 100%;">
			<u-button @click="submit" :custom-style="customStyle" shape="circle" :ripple="true" ripple-bg-color="#fff">
				立即注册</u-button>
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
					password: ''
				},
				rules: {
					email: [{
						required: true,
						pattern: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
						message: '邮箱格式不正确',
						// 可以单个或者同时写两个触发验证方式 
						trigger: 'blur',
					}],
					checking: [{
						len: 4,
						message: '验证码错误',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码格式错误',
						trigger: 'blur',
						pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/

					}]
				}
			};
		},
		methods: {
			submit() {
				console.log(1);
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

		padding: 1rpx;
		background: linear-gradient(45deg, #3879cd, #3879cd, #6cc8b9, #6cc8b9);
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
