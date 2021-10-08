let year = +prompt('Nhập năm cần kiểm tra');
if(year%100==0 && year%400==0) {
    alert('Nam Nhuan')
} else if (year % 4 == 0) {
    if (year % 100 == 0) {
        alert('Khong phai nam nhuan')
    } else {
        alert('Nam NHUAN')
    }
} else {
    alert('khong phai nam nhuan')
}

