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




// // Emailjs
// function sendMail(){
//     var params = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value,
//         phone: document.getElementById('phone').value
//     };
    
//     const serviceID = 'service_w0xzfrm';
//     const templateID = 'template_pxnamlp';
    
//     emailjs.send(serviceID, templateID, params)
//     .then(
//         res => {
//             document.getElementById('name').value = '';
//             document.getElementById('email').value = '';
//             document.getElementById('message').value = '';
//             document.getElementById('phone').value = '';
//             console.log(res);
//             alert('your email sent successfully!');
//         }
//     )
//     .catch(err=>console.log(err));
// }



function sendMail() {
    // 獲取表單欄位的值
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;

    // 檢查是否有欄位未填寫
    if (name === '' || email === '' || message === '' || phone === '') {
        // 如果有欄位未填寫，彈出警告訊息並返回
        alert('請填寫空白欄位.');
        return;
    }

    // 檢查 email 格式
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // 如果 email 格式不正確，彈出警告訊息並返回
        alert('email 格式不正確');
        return;
    }

    // 檢查 phone 格式
    var phoneRegex = /^\d{10}$/; // 假設 phone 是 10 位數的數字
    if (!phoneRegex.test(phone)) {
        // 如果 phone 格式不正確，彈出警告訊息並返回
        alert('電話格式不正確');
        return;
    }

    // 如果所有欄位都已填寫且 email 和 phone 格式正確，則執行郵件發送操作
    var params = {
        name: name,
        email: email,
        message: message,
        phone: phone
    };
    
    const serviceID = 'service_w0xzfrm';
    const templateID = 'template_pxnamlp';
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            // 清空表單欄位
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById('phone').value = '';
            console.log(res);
            alert('Your email has been sent successfully!');
        }
    )
    .catch(err => console.log(err));
}
