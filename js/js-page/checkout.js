//** Javascript ẩn hiện form và đồng thời đẩy phần tử ở dưới xuống khi nhấp vào link **/
const showFormLink = document.getElementById('showFormLink');
const formContainer = document.getElementById('formContainer');
const showloginform = document.getElementById('showloginform');
const formcontainer2 = document.getElementById('formcontainer2');
const container123 = document.getElementById('container_123');


showloginform.addEventListener('click', function(event) {
    event.preventDefault(); 
    
  if (formcontainer2.style.display === 'none' || formcontainer2.style.display === '') {
    formcontainer2.style.display = 'block'; 
    formcontainer2.style.opacity = '1';  
    container123.style.marginTop = '420px';  
    showloginform.textContent = 'Click here to login'; 
  } else {
    formcontainer2.style.display = 'none'; 
    formcontainer2.style.opacity = '0'; 
    container123.style.marginTop = '0'; 
    showloginform.textContent = 'Click here to login'; 
  }  
});

showFormLink.addEventListener('click', function(event) {
  event.preventDefault(); // Ngừng hành động mặc định của liên kết

  // Kiểm tra nếu form đang ẩn, thì hiển thị nó
  if (formContainer.style.display === 'none' || formContainer.style.display === '') {
    formContainer.style.display = 'block'; // Hiển thị form
    formContainer.style.opacity = '1'; // Thêm hiệu ứng mờ dần
    container123.style.marginTop = '160px'; // Đẩy phần tử container_123 xuống 160px
    showFormLink.textContent = 'Click here to enter your code'; // Thay đổi văn bản liên kết
  } else {
    formContainer.style.display = 'none'; // Ẩn form
    formContainer.style.opacity = '0'; // Xóa hiệu ứng mờ dần
    container123.style.marginTop = '0'; // Khôi phục lại vị trí của container_123
    showFormLink.textContent = 'Click here to enter your code'; // Khôi phục lại văn bản ban đầu
  }
});










