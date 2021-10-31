const state = {
	// 渲染数据
	tableList: [{
		iconPath: "http://www.yzlhaha.top/static/socialicon/star1.png",
		selectedIconPath: "http://www.yzlhaha.top/static/socialicon/star2.png",
		text: '星球',
		count: 2,
		isDot: false,
		customIcon: false,
	},
	{
		iconPath: "http://www.yzlhaha.top/static/socialicon/eye1.png",
		selectedIconPath: "http://www.yzlhaha.top/static/socialicon/eye2.png",
		text: '广场',
		isDot: false,
		customIcon: false,
	},
	{
		iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
		selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
		text: '聊天',
		midButton: true
	},
	{
		iconPath: "http://www.yzlhaha.top/static/socialicon/chat1.png",
		selectedIconPath: "http://www.yzlhaha.top/static/socialicon/chat2.png",
		text: '聊天',
		isDot: false,
		customIcon: false,
		count: 0,
	},
	{
		iconPath: "http://www.yzlhaha.top/static/socialicon/my1.png",
		selectedIconPath: "http://www.yzlhaha.top/static/socialicon/my2.png",
		text: '我的',
		isDot: false,
		customIcon: false,
		count: 0,
	}],
	current:0
}

const mutations = {
	// 之后的消息提示在这里改动
	
	// 修改焦点
	setFoce(state,val){
		console.log(val)
		state.current = val;
	}
}

module.exports = {
	namespaced: true,
	state,
	mutations
}







