let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Thay đổi hình sau mỗi 2 giây
}


// Lấy phần tử input và button
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Lắng nghe sự kiện click vào button
searchButton.addEventListener('click', function () {
  search(searchInput.value);
});

// Lắng nghe sự kiện nhấn phím Enter trong input
searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    search(searchInput.value);
  }
});
let item = ["Vợt Cầu Lông Lining Axforce Cannon - Trắng (Nội Địa Trung)", "Vợt Cầu Lông Kumpoo Power Control K520 Pro Trắng Hồng Chính Hãng", "Set Vợt Cầu Lông Kumpoo K520S - Hồng (Nội Địa Trung)", "Vợt Cầu Lông Yonex Nanoflare 800 Pro - Xách Tay",
  "Vợt Cầu Lông Yonex Nanoflare 1000Z - Xách Tay", "Vợt Cầu Lông Yonex Nanoflare 700 Cyan - Xách Tay", "Vợt Cầu Lông Yonex Astrox 88D Pro 2024 Chính Hãng", "Vợt Cầu Lông Yonex Astrox 88S Pro 2024 Chính Hãng",
"Vợt Cầu Lông Lining Halbertec 7000 (Nội Địa Trung)", "Vợt Cầu Lông Lining Halbertec 9000 (Nội Địa Trung)", "Vợt cầu lông Lining Axforce 80 Đỏ (Rồng Lửa) Chen Long Limited - Bản Quốc tế",
"Vợt Cầu Lông Lining Aeronaut 9000C (Nội Địa Trung)"]
// Hàm tìm kiếm
function search(keyword) {

    searchResults.innerHTML = '<p>Kết quả tìm kiếm cho: ' + keyword + '</p>';
}

