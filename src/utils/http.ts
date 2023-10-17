/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-10-17 11:04:32
 * @LastEditTime: 2023-10-17 15:23:59
 * @LastEditors: Do not edit
 */
const baseURL = "http://localhost:3000";

const httpInterceptor = {
    invoke(options: UniApp.RequestOptions) {
        if (!options.url.startsWith("http")) {
            options.url = baseURL + options.url;
        }
        options.timeout = 10000;
        options.header = {
            ...options.header,
            "source-client": "miniprogram",
        };
        //TODO:此处可以获取自己的token
        const token = "";
        if (token) {
            options.header.Authorization = token;
        }
        console.log(options);
    },
};

uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("uploadFile", httpInterceptor);

interface Response<T = any> {
    code: string;
    msg: string;
    data: T;
}

const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Response<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Response<T>);
                } else if (res.statusCode === 401) {
                    //TODO:跳转到登录页
                    uni.navigateTo({
                        url: "/pages/login/login",
                    });
                    reject(res);
                } else {
                    uni.showToast({
                        icon: "none",
                        title: (res.data as Response<T>).msg || "请求错误",
                    });
                    reject(res);
                }
            },
            fail(err) {
                uni.showToast({
                    icon: "none",
                    title: "网络错误",
                });
                uni.navigateTo({
                    url: "/pages/login/login",
                });
                reject(err);
            },
        });
    });
};

export const get = <T = any>(url: string, data?: any) => {
    return http<T>({
        method: "GET",
        url,
        data,
    });
}