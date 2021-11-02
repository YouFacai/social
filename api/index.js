// 判断环境 是否需要 代理 (小程序环境下是不需要代理的) locahost 在安卓手机上不显示 直接看小程序效果 上线换成http 就可以了
const base = typeof window !='undefined' ? '/api' : 'http://localhost:3000'

export const getMymenus = function (){
    return new Promise((resolve,reject) => {
        uni.request({
            method:'get',
            data:{
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWF0IjoxNjM1NzUxMTQ2fQ.Czgp7e86e9_E2GA5p75JXMQzSZ4XETvV6SDu2KYZFWs'
            },
            url: `${base}/myRouter/getMymenus`, //仅为示例，并非真实接口地址。
            success: (res) => {
                resolve(res.data.data)
            }
        });
    })
}