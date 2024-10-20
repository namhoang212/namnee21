

const messages = [
    "a bt mai Bơ sợ thuaa",
        "Nhma e đã cố gắng tập đến chấn thương luôn gòi",
        "Mà giờ lại nản chí hong phải đổ sông đổ biển saoo",
        "emm cứ lăn xả đá thoải máii ik",
        "có bị sao a sẽ chămm cho e như ebe lunn",
        "v nênn cố gắnggg đá thật hay thật tốt nhee",
        "dù có thắng thua gì e cũng thắng trong lòng ng hâm mộ rầu",
        "(cụ thể fan là a nèee 🙄)",
        "Bnguyenn cố lênnn",
        "muốn đọc thêmm hay rann bấm thêm ruaa ( bấm thêmm ik )",
        "918",
        "507680"
];

let index = 0;

document.getElementById('changeMessage').addEventListener('click', function() {
    document.getElementById('message').innerHTML = messages[index];
    index++;

    // Nếu đã hiển thị hết các thông điệp thì quay lại từ đầu
    if (index >= messages.length) {
        index = 0;
    }
});
