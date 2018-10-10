// // 调用AJAX的操作
// let xmlHttp = new XMLHttpRequest();
// // 设置远程接口地址
// xmlHttp.open("get","http://wthrcdn.etouch.cn/weather_mini?citykey=101010100");
// // 设置回调函数
// xmlHttp.onreadystatechange = callback ;
// // 提交
// xmlHttp.send();
//
// // 编写回调函数
// function callback() {
//   // 判断是否正确返回
//   if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//     // 接收返回的结果
//     let result = xmlHttp.responseText;
//     // 转换为对象，使用eval
//     let obj = eval(`(${result})`);
//     console.log(obj);
//     // 取得对象中所有未来的天气信息
//     let {data:{forecast:allWeather}} = obj;
//     console.log(allWeather);
//     // 建立一个div
//     let div = document.createElement("div");
//     let str = "" ;
//     // 使用for ... of 循环取得里面的所有数据
//     for (let weather of allWeather) {
//       let {date,high,low,type}= weather;
//       // 把结果拼接成为字符串
//       str += `${date} ，${low} - ${high}， ${type}<br/>`;
//     }
//     div.innerHTML = str;
//
//     // 把div放入到页面上
//     document.body.appendChild(div);
//   }
// }
//
//

function ajax(url) {
  return new Promise((resolve,reject) => {
    // 调用AJAX的操作
    let xmlHttp = new XMLHttpRequest();
    // 设置远程接口地址
    xmlHttp.open("get",url);
    // 设置回调函数
    xmlHttp.onreadystatechange = () => {
      // 判断是否正确返回
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        alert("a");
        resolve(xmlHttp.responseText);
      }
    } ;
    // 提交
    xmlHttp.send();
  });
}


function getResultOver(result) {
  // 转换为对象，使用eval
  let obj = eval(`(${result})`);
  // console.log(obj);
  // 取得对象中所有未来的天气信息
  let {data:{forecast:allWeather}} = obj;
  // console.log(allWeather);
  // 建立一个div
  let div = document.createElement("div");
  let str = "" ;
  // 使用for ... of 循环取得里面的所有数据
  for (let weather of allWeather) {
    let {date,high,low,type}= weather;
    // 把结果拼接成为字符串
    str += `${date} ，${low} - ${high}， ${type}<br/>`;
  }
  div.innerHTML = str;

  // 把div放入到页面上
  document.body.appendChild(div);
}

ajax("http://wthrcdn.etouch.cn/weather_mini?citykey=101010200")
  .then(function(result){
    getResultOver(result);
    ajax("http://wthrcdn.etouch.cn/weather_mini?citykey=101010200")
      .then(function(result){
        getResultOver(result);
        ajax("http://wthrcdn.etouch.cn/weather_mini?citykey=101010200")
          .then(function(result){
            getResultOver(result);
          })
      })
  })
