function check(str) {
	var arr = str.split(''); // 将传入字符串转化为数组
	var stack = new Stack(); // 新建栈
	var aString = '({[]})';  // 用来匹配的字符串
	var index = -1;          //初始化下标

	for (var i = 0; i < arr.length; i++) {
		var item = arr[i];
		if ((index = aString.indexOf(item)) < 3) {   // 将每一项都用aString匹配，下标小于3就是左括号
			// 左括号，入栈
			stack.into(item)
		} else {
		  	//  右括号，栈列表出栈一个元素与之匹配
			var target = stack.out();
			//  如果出栈元素不存在，则这个右括号没有响应匹配的左括号，验证失败
			if (!target) {
				return false;
			}
			// 取出与 item 对应的左括号与出栈元素匹配，不相等则验证失败
			if (target !== aString.charAt(5-index)) { 
				return false;
			}
		}
	}
		//  循环匹配完成后，如果栈列表还有元素，则缺少与之匹配的右括号，验证失败
	if (stack.size()) {
		return false;
	}
	//  ok
		return true;
}

function stack() {
	var stackArr = [];
	
	this.into = function(item) {
		stackArr.push(item);
	};
	
	this.out = function() {
		return stackArr.pop();
	};

	this.size = function() {
		return stackArr.length;
	};
}