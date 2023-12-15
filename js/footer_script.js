
$(document).ready(function() {
    // 定義一個函數來處理點擊事件
    function toggleDropdown() {
        var windowWidth = $(window).width();
        if (windowWidth <= 834) {
            var dropdown = $(this).next("ul");
            dropdown.slideToggle();
            $(".footer_nav ul").not(dropdown).slideUp(); // 關閉其他已經展開的下拉清單
            click.stopPropagation();
        }
    }

    $(".footer_title").click(toggleDropdown);

    // 點擊其他地方時關閉已展開的下拉清單
    // $(document).click(function(e) {
    //     if (!$(e.target).closest('.footer_nav').length) {
    //         $(".footer_nav ul").slideUp();
    //     }
    // });

    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth > 834) {
            $(".footer_title").off("click", toggleDropdown);
            $(".footer_nav ul").show();
        } else {
            $(".footer_title").click(toggleDropdown);
            $(".footer_nav ul").hide();
        }
    });
});
