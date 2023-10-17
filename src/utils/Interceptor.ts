/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-10-17 15:26:10
 * @LastEditTime: 2023-10-17 16:00:17
 * @LastEditors: Do not edit
 */
const whiteList = ['/pages/login/login', '/pages/index/index']

const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]
function hasPermission(url: string): boolean {
    // 在白名单中或有token，直接跳转
    if (whiteList.indexOf(url) !== -1 || uni.getStorageSync("TOKEN")) {
        return true;
    }
    return false;
}

list.forEach((item: string): void => {
    uni.addInterceptor(item, {
        // 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
        invoke(e): boolean {
            if (!hasPermission(e.url)) {
                // 将用户的目标路径保存下来
                // 这样可以实现 用户登录之后，直接跳转到目标页面
                uni.setStorageSync("URL", e.url)
                uni.navigateTo({
                    url: "/pages/login/login",
                });
                return false;
            }
            return true;
        }
    });
})



