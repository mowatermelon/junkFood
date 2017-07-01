$(function () {
    console.log("welcome");

    $(".flexImg li:nth-child(1)").hover(
    function () {
        console.log("$flexImgLi:gt(1)hover");
        $(this).css("background-color", "#0366fb")
               .css("background-image", "url(img/glyphicons-halflings-white.png)");
        $(".flexWord li:nth-child(1)").css("color", "#0366fb");
    }, function () {
        console.log("$flexImgLi:nth-child(1)leaf");
        $(this).css("background-color", "transparent")
               .css("background-image", "url(img/glyphicons-halflings.png)");
        $(".flexWord li:nth-child(1)").css("color", "#000");
    });


    $(".flexWord li:nth-child(1)").hover(
    function () {
        console.log(".flexWord:gt(1)hover");
        $(".flexImg li:nth-child(1)").css("background-color", "#0366fb")
               .css("background-image", "url(img/glyphicons-halflings-white.png)");
        $(this).css("color", "#0366fb");
    }, function () {
        console.log(".flexWord:nth-child(1)leaf");
        $(".flexImg li:nth-child(1)").css("background-color", "transparent")
               .css("background-image", "url(img/glyphicons-halflings.png)");
        $(this).css("color", "#000");
    });



    $(".flexImg li:nth-child(2)").hover(
    function () {
        console.log("$flexImgLi:nth-child(2)hover");
        $(this).css("background-color", "#0366fb")
               .css("background-image", "url(img/glyphicons-halflings-white.png)");
        $(".flexWord li:nth-child(2)").css("color", "#0366fb");
    }, function () {
        console.log("$flexImgLi:nth-child(2)leaf");
        $(this).css("background-color", "transparent")
               .css("background-image", "url(img/glyphicons-halflings.png)");
        $(".flexWord li:nth-child(2)").css("color", "#000");
    });

    $(".flexWord li:nth-child(2)").hover(
    function () {
        console.log(".flexWord:gt(2)hover");
        $(".flexImg li:nth-child(2)").css("background-color", "#0366fb")
               .css("background-image", "url(img/glyphicons-halflings-white.png)");
        $(this).css("color", "#0366fb");
    }, function () {
        console.log(".flexWord:nth-child(1)leaf");
        $(".flexImg li:nth-child(2)").css("background-color", "transparent")
               .css("background-image", "url(img/glyphicons-halflings.png)");
        $(this).css("color", "#000");
    });


    $(".flexImg li:nth-child(3)").hover(
    function () {
        console.log("$flexImgLi:gt(3)hover");
        $(this).css("background-color", "#0366fb")
               .css("background-image", "url(img/glyphicons-halflings-white.png)");
        $(".flexWord li:nth-child(3)").css("color", "#0366fb");
    }, function () {
        console.log("$flexImgLi:nth-child(3)leaf");
        $(this).css("background-color", "transparent")
               .css("background-image", "url(img/glyphicons-halflings.png)");
        $(".flexWord li:nth-child(3)").css("color", "#000");
    });


    $(".flexWord li:nth-child(3)").hover(
    function () {
        console.log(".flexWord:gt(3)hover");
        $(".flexImg li:nth-child(3)").css("background-color", "#0366fb")
               .css("background-image", "url(img/glyphicons-halflings-white.png)");
        $(this).css("color", "#0366fb");
    }, function () {
        console.log(".flexWord:nth-child(3)leaf");
        $(".flexImg li:nth-child(3)").css("background-color", "transparent")
               .css("background-image", "url(img/glyphicons-halflings.png)");
        $(this).css("color", "#000");
    });



    var $playScrollTop = $(".play").scrollTop();
    console.log($playScrollTop);

    $(".play").scroll(function () {
        console.log("njodnfs");
    })

    $("#goLogin").hover(
    function () {
        console.log("#goLogin hover");
        $(this).css("background-color", "#0366fb")
               .css("color", "#fff");
    }, function () {
        console.log("#goLogin leaf");
        $(this).css("background-color", "transparent")
               .css("color", "#0366fb");
    });


    $("#goLogin").hover(function () {
        console.log("njodnfs");
    });

    $(".loginList li").click(function () {
        $(this).css("border-bottom", "5px solid #0366fb")
               .css("color", "#0366fb");
        console.log("xianshi yi ");
        $("#loginContent01").show();
        $("#loginContent02").hide();
    })
    $(".loginList li").dblclick(function () {
        $(this).css("border-bottom", "0px solid #0366fb")
               .css("color", "#000");
        console.log("xianshi er ");
        $("#loginContent02").show();
        $("#loginContent01").hide();
    })


});