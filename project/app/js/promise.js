let url1 = "https://img10.360buyimg.com/mobilecms/s280x280_jfs/t19729/347/2648537104/157629/10c9f7a/5b051777N2b948713.jpg!q90.webp";
let url2 = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1027887115,2954985598&fm=26&gp=0.jpg";
let url3 = "https://img13.360buyimg.com/mobilecms/s220x220_jfs/t1/4087/26/6653/286936/5ba3798aE7e237db6/cc2f37bbade6307a.jpg!q90!cc_110x110.webp";
// 实现一个图片加载的功能
// 取得网上的某一张图片。


function loadImage(url){
  return new Promise((resolve,reject) =>{
     // 页面上建立一张图片
    let img=document.createElement("img");
    img.src=url;
    // 当下载完成后，执行显示操作
     // img.onload 图片加载方法
    img.onload=function(){
      alert(url);
      resolve(img);

    }
  })
}
// // 当加载完成后，把所有图片一起显示出来
// function showImages(imgs) {
//   imgs.forEach(function(item){
//     document.body.appendChild(item);
//   });
// }

//all
// Promise.all([
//   loadImage(url1) ,
// loadImage(url2) ,
// loadImage(url3)
//
// ]).then(showImages);
//Race
// 当加载完成后，显示最快加载的 一张图片
function showImage(img) {
  document.body.appendChild(img);
}

Promise.race([
  loadImage(url3),
  loadImage(url2) ,
  loadImage(url1)
]).then(showImage);
