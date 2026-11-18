
document.addEventListener("DOMContentLoaded", () => {

    console.log("拯救動物大作戰網頁載入完成！");

    // ==========================
    // 原本導覽列平滑滾動
    // ==========================

    const links = document.querySelectorAll(
        ".nav-links a, .nav-action a"
    );

    links.forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ==========================
    // 歡迎畫面進入功能
    // ==========================

    const welcomeScreen =
        document.getElementById("welcome-screen");

    const enterButton =
        document.getElementById("enter-site");

    if (!welcomeScreen || !enterButton) {
        document.body.classList.remove("welcome-active");
        return;
    }

    document.body.classList.add("welcome-active");

    let isEntering = false;

    enterButton.addEventListener("click", () => {

        if (isEntering) {
            return;
        }

        isEntering = true;
        enterButton.disabled = true;

        // 開始淡出歡迎畫面
        welcomeScreen.classList.add("hide");

        // 恢復原網站滾動
        document.body.classList.remove("welcome-active");

        // 回到原網站頂部
        window.scrollTo(0, 0);

        // 淡出動畫完成後移除歡迎畫面
        setTimeout(() => {
            welcomeScreen.remove();
        }, 650);

    });

});
