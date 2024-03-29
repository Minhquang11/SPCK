let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Lấy phần tử input và button
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Lắng nghe sự kiện click vào button
searchButton.addEventListener('click', function() {
  search(searchInput.value);
});

// Lắng nghe sự kiện nhấn phím Enter trong input
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    search(searchInput.value);
  }
});

// Hàm tìm kiếm
function search(keyword) {
  // Xử lý tìm kiếm ở đây, ví dụ:
  // var searchResult = performSearch(keyword);

  // Hiển thị kết quả tìm kiếm
  searchResults.innerHTML = '<p>Kết quả tìm kiếm cho: ' + keyword + '</p>';
}
