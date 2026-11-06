// 頁面載入完成後的初始化與互動處理
document.addEventListener('DOMContentLoaded', () => {
    console.log("拯救動物大作戰網頁載入完成！");

    // 平滑滾動導覽列連結
    const links = document.querySelectorAll('.nav-links a, .nav-action a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
