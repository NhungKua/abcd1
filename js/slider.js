// Lấy danh sách tất cả các hình ảnh trong slider
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
// Lấy container chứa các hình ảnh trong slider
const imgContainer = document.querySelector(".aspect-ratio-169");
// Lấy danh sách các chấm tròn dùng để chuyển đổi hình ảnh
const dotItem = document.querySelectorAll(".dot");
// Số lượng hình ảnh trong slider
let imgNumber = imgPosition.length;
// Biến lưu trữ chỉ số hình ảnh hiện tại
let index = 0;
// Đặt vị trí cho từng hình ảnh trong slider
imgPosition.forEach(function (image, index) {
    // Mỗi hình ảnh được đặt cách nhau 100% chiều rộng theo thứ tự
    image.style.left = index * 100 + "%";

    // Thêm sự kiện click cho mỗi chấm tròn (dot)
    dotItem[index].addEventListener("click", function () {
        slider(index); // Chuyển slider đến hình ảnh tương ứng với chấm tròn
    });
});

// Hàm tự động chuyển đổi hình ảnh trong slider
function imgSlide() {
    index++; // Tăng chỉ số hình ảnh
    if (index >= imgNumber) {
        // Nếu đã đến hình ảnh cuối cùng, quay lại hình ảnh đầu tiên
        index = 0;
    }
    slider(index); // Gọi hàm chuyển slider đến hình ảnh tương ứng
}

// Hàm chuyển slider đến một hình ảnh cụ thể
function slider(index) {
    // Di chuyển container chứa hình ảnh để hiển thị hình ảnh tương ứng
    imgContainer.style.left = "-" + index * 100 + "%";

    // Xóa lớp "active" khỏi chấm tròn hiện tại
    const dotActive = document.querySelector(".active");
    dotActive.classList.remove("active");

    // Thêm lớp "active" vào chấm tròn tương ứng với hình ảnh đang được hiển thị
    dotItem[index].classList.add("active");
}

// Gọi hàm `imgSlide` mỗi 3 giây để tạo hiệu ứng tự động chuyển đổi hình ảnh
setInterval(imgSlide, 3000);
