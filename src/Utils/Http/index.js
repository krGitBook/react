import Promise from 'promise-polyfill';
import fetch from 'isomorphic-fetch';
import URLSearchParams from 'url-search-params';
import APIS from '../../Configs/Apis';
import Envs from '../..//Configs/Envs';


import { message } from 'antd';

var http = {};
const detaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const getParamsFarmt = (url, params, type) => {
  url = url + "?"
  if (!params || JSON.stringify(params) == '{}') {
    return url;
  }
  if (type == 'restful') {
    for (let key in params) {
      let urlReg = new RegExp('\\{' + key + '\\}', 'ig');
      url = url.replace(urlReg, params[key])
    }
  } else {
    
    for (let key in params) {

      url = url+key+'='+params[key]+'&'
    }
  }

  return url
}
/** 
 * 基于 fetch 封装的 GET请求 
 * @param url 
 * @param params {} 
 * @param headers 
 * @returns {Promise} 
 */
http.get = function (url, params, headers) {
  url = getParamsFarmt(url, params);
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'GET',
      headers: headers || detaultHeaders,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status })
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject({ status: -1 });
      })
  })
}


/** 
 * 基于 fetch 封装的 POST请求  FormData 表单数据 
 * @param url 
 * @param formData   
 * @param headers 
 * @returns {Promise} 
 */
http.post = function (url, formData, headers) {
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'POST',
      headers: headers || detaultHeaders,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status })
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject({ status: -1 });
      })
  })
}

http.put = function (url, formData, headers) {
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'PUT',
      headers: headers || detaultHeaders,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status })
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject({ status: -1 });
      })
  })
}

http.delete = function (url, formData, headers) {
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'DElETE',
      headers: headers || detaultHeaders,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status })
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject({ status: -1 });
      })
  })
}
export default http;

// module.exports = http;
