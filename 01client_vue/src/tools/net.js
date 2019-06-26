import axios from 'axios'
import qs from 'qs';
const serverUrl = "http://192.168.3.118:8888/";

let net = {
    get: "",
    post: "",
    uploadFile:""
};
net.get = function(api,object,call){
    //1.封装请求地址
    let url = serverUrl + api;
    //2.根据请求地址和请求数据发出请求
    axios.get(url,{
        params:object
    }).then(function(response){
        call(response);
    }).catch(function(error){
        console.log(error);
    });
};


net.post = function(api,object,call){
    //1.封装请求地址
    let url = serverUrl + api;
    //2.数据请求
    console.log(url);
    axios
    .post(url,qs.stringify(object))
    .then(function(response){
        call(response);
    })
    .catch(function(error){
        console.log(error);
    });
};

net.uploadFile = function(api,e,call){
    //封装请求地址
    let url = serverUrl + api;
    let file = e.target.files[0];
    //创建form对象
    let param = new FormData();
    //通过append向form对象添加数据
    param.append("file",file,file.name);
    //添加form表单中其他数据
    param.append("chunk","0");
    //FormData私有类对象，访问不到，可以通过get判断值是否传出去
    console.log(param.get("file"));
    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };//添加请求头
    axios.post(url,param,config).then(response=>{
        call(response.data);
    });

}

net.uploadFiles = function (api, object, call) {
    //封装请求地址
    let url = serverUrl + api;

    //创建form对象
    let param = new FormData();

    for (let key in object) {
        if (key == 'image') {
            let array = object[key];
            let length = array.length;
            for (let i = 0; i < length; i++) {
                param.append('image', array[i]);
            }
        } else {
            param.append(key, object[key]);
        }

    }

    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }; //添加请求头
    console.log(param);
    axios.post(url, param, config).then(response => {
        call(response.data);
    });

}
export default net;