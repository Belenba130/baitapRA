document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var rating = document.querySelector('.point .active').textContent;

    var comment = document.getElementById('comment').value;

    if (rating >= 1 && rating <= 10) {
        themPhanHoi(rating, comment);
        document.getElementById('feedbackForm').reset();
    } else {
        alert('Vui lòng chọn một điểm đánh giá từ 1 đến 10.');
    }
});
function chonDiem(diem) {
    var tatCaCacDiem = document.querySelectorAll('.listpoint');
    tatCaCacDiem.forEach(function(d) {
        d.classList.remove('active');
    });

    diem.classList.toggle('active');
}

function themPhanHoi(diem, binhLuan) {
    var danhSachPhanHoi = document.getElementById('feedbackList');
    var phanHoiMoi = document.createElement('div');
    phanHoiMoi.classList.add('phanHoiMoi');

    var diemElement = document.createElement('p');
    diemElement.textContent = diem;

    var binhLuanElement = document.createElement('span');
    binhLuanElement.textContent = binhLuan + '' ;

    var nutSua = document.createElement('i');
    nutSua.classList.add('fas', 'fa-cash-register');
    nutSua.addEventListener('click', function() {
        suaPhanHoi(diem, binhLuan, phanHoiMoi);
    });

    var nutXoa = document.createElement('i');
    nutXoa.classList.add('fas', 'fa-trash');
    nutXoa.addEventListener('click', function() {
        xoaPhanHoi(phanHoiMoi);
    });

    phanHoiMoi.appendChild(diemElement);
    phanHoiMoi.appendChild(binhLuanElement);
    phanHoiMoi.appendChild(nutSua);
    phanHoiMoi.appendChild(nutXoa);

    danhSachPhanHoi.appendChild(phanHoiMoi);
}

function suaPhanHoi(diem, binhLuan, phanHoiMoi) {
    var diemMoi = prompt('Nhập điểm mới (1-10):', diem);
    var binhLuanMoi = prompt('Nhập bình luận mới:', binhLuan);

    if (diemMoi >= 1 && diemMoi <= 10) {
        var diemElement = phanHoiMoi.querySelector('p');
        diemElement.textContent = diemMoi;

        var binhLuanElement = phanHoiMoi.querySelector('span');
        binhLuanElement.textContent = binhLuanMoi;
    } else {
        alert('Vui lòng nhập một điểm đánh giá từ 1 đến 10.');
    }
}

function xoaPhanHoi(phanHoiMoi) {
    phanHoiMoi.remove();
}
