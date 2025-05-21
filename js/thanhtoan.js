document.addEventListener("DOMContentLoaded", function () {
    const paymentButton = document.querySelector(".payment-content-right-payment button");

    paymentButton.addEventListener("click", function () {
        // Hiển thị thông báo
        alert("Hệ thống đã nhận được đơn hàng của bạn. Chúng tôi sẽ liên hệ với bạn trong vòng 24h để xác nhận đơn hàng. Chúc bạn có trải nghiệm mua sắm vui vẻ!");

        // Chuyển đến trang index.html
        window.location.href = "index.html";
    });
});
