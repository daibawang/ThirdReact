var xmlHttp;

		// 建立这个对象的方法
		function createXMLHttp() {
			if (window.XMLHttpRequest != null) {
				xmlHttp = new XMLHttpRequest();
			} else {
				xmlHttp = new ActiveXObject("microsoft.XMLHTTP");
			}
		}

		function test() {
			// 固定的4步操作
			// 1、创建对象
			createXMLHttp();
			// 取得输入框中的内容
			var city = document.getElementById("city").value;
			// 2、确定连接的接口地址
			xmlHttp.open("get","http://wthrcdn.etouch.cn/weather_mini?city=" + city);
			// 3、设置数据返回后自动执行的回调方法（回调函数）
			xmlHttp.onreadystatechange = testCallback;
			// 4、提交数据
			xmlHttp.send();
		}

		function testCallback () {
			// 判断当前是否正常返回
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				// 接收返回的内容
				var result = xmlHttp.responseText;
				// 转换为对象来取得属性
				var obj = eval("("+result+")");
				if (obj.status == 1000) {
					document.getElementById("wendu").innerHTML = obj.data.wendu;
					document.getElementById("aqi").innerHTML = obj.data.aqi;
					document.getElementById("ganmao").innerHTML = obj.data.ganmao;
					document.getElementById("high").innerHTML = obj.data.forecast[0].high;
					document.getElementById("low").innerHTML = obj.data.forecast[0].low;
					document.getElementById("fengxiang").innerHTML = obj.data.forecast[0].fengxiang;
					document.getElementById("fengli").innerHTML = obj.data.forecast[0].fengli;
				} else {
					alert("输入的城市信息不存在");
				}
			}
		}
