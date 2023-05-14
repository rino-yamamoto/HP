// ハンバーガーメニューおしたら開く
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// ハンバーガーメニュー開いたら文字が動く
$(".open").click(function (){
    $(this).toggleClass("active");
    $("#g-nav").toggleClass("pantel-active");
    $(".open-nav_list1").toggleClass("fade-up text1");
    $(".open-nav_list2").toggleClass("fade-up text2");
    $(".open-nav_list3").toggleClass("fade-up text3");
    $(".open-nav_list4").toggleClass("fade-up text4");
    $(".open-nav_list5").toggleClass("fade-up text5");
});

$("#open-nav a").click(function () {
    $(".open").removeClass("active");
    $("#open-nav").removeClass("panel-active");
    $(".open-nav_list1").removeClass("fade-up text1");
    $(".open-nav_list2").removeClass("fade-up text2");
    $(".open-nav_list3").removeClass("fade-up text3");
    $(".open-nav_list4").removeClass("fade-up text4");
    $(".open-nav_list5").removeClass("fade-up text5");
});