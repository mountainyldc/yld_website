// 获取按钮和消息元素
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// 为按钮添加点击事件
button.addEventListener('click', function() {
    // 切换消息显示状态
    if (message.style.display === 'none') {
        message.style.display = 'block';  // 显示消息
        button.innerText = '再次点击';    // 修改按钮文本
    } else {
        message.style.display = 'none';   // 隐藏消息
        button.innerText = '点击我';      // 还原按钮文本
    }
});
