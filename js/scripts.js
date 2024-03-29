/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var message = "此網站仍在建置中";

// 檢查當前網頁的 URL
if (window.location.href.indexOf("chullin.github.io/blog.html") > -1) {
    // 如果 URL 包含 "chullin.github.io/blog.html"，顯示警告視窗
    window.onload = function() {
        alert(message);
    };
}