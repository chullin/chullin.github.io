/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var contactLink = document.getElementById('contact-link');

// 添加點擊事件監聽器
contactLink.addEventListener('click', function(event) {
    // 阻止默認行為，即不跳轉頁面
    event.preventDefault();
    // 獲取電話資訊
    var phoneNumber = contactLink.getAttribute('data-phone');
    // 顯示電話資訊
    alert('聯絡方式：' + phoneNumber);
});