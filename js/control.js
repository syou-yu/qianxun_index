// 入口函数
$(function() {

    var i = 0;
    var timer = 0;

    // 设置detail
    // var detail = new Array();
    // detail[0] = "就算是再相同的一天， 换一扇窗看出去， 都是一个不同的世界， 从现在起， 打开应用中心， 发现更大世界。";
    // detail[1] = "不知道该做些什么的时候，让崭新的发现功能为你找真爱，每天发现不同的六个网站，虽然很少，但是很好。";
    // detail[2] = "千寻想要的设计不是迎合潮流，也不是炫技雕饰，点到为止、干净用心才是最适合上网的设计，上善若水，大巧不工。"
    // detail[3] = "能不动就不动的慵懒日子一点也不遥远，在千寻你就做得到，打开几十个网页，看看连续关闭它们有多省事。"
    // detail[4] = "千寻有个勤快的小秘书每天早早起床为你精选最新的阅读视频和音乐，只用三张网页，给你一整天的超棒内容，我们保证。"
    // detail[5] = "秒级安装，独家加速下载技术，和更多让上网更快的事情都被千寻带来你身边，三倍四倍，不止快一点，还要更快一点。"
    // detail[6] = "网页无法显示真让人抓狂，让云修复穿越时空找它们回来，你看，原先打不开的网站忽然就好了。"


        // 设置title3
    // var title = new Array();
    // title[0] = "./images/title1.png"
    // title[1] = "./images/title2.png"
    // title[2] = "./images/title3.png"
    // title[3] = "./images/title4.png"
    // title[4] = "./images/title5.png"
    // title[5] = "./images/title6.png"
    // title[6] = "./images/title7.png"


    // 初始化screen1的detail
    // $("section p").text(detail[0]);
    // 初始化screen1的title3
    // $(".title_3").attr("src", title[0]);


    // 音乐按钮
    $('.music').click(function() {
        $(this).toggleClass("play");
        var hasplay = $(this).hasClass('play')
        if (hasplay) {
            $('audio').get(0).play()
        } else {
            $('audio').get(0).pause()
        }
    });

    // 初始screen1的title特效
    $('section>div').eq(0).children('.title').removeClass('no')
    
    $('.slide li').click(function(event) {

        i = $(this).index();
        // console.log(i);
        // 侧导航
        $('section').animate({ 'top': -100 * i + '%' }, 500);
        $(this).addClass('current').siblings().removeClass('current');
        // 控制no类名
        $('section>div').eq(i).children('.title').removeClass('no').parent().siblings('').children('.title').addClass('no')

        
        // 切换detail
        // $(".title>p").text(detail[i]);
        // 切换title3
        // $(".title_3").attr("src", title[i]);


        });

    // 滚动事件
    $(document).mousewheel(function(e,d){
        // console.log(d);
        // 每次使用定时器前应先清除之前的定时器
        clearTimeout(timer);
        timer = setTimeout(function(){
            i=i-d;
            if(i>6){i=6}
            if(i<0){i=0}
            $('section').animate({ 'top': -100 * i + '%' }, 500);
            $('section>div').eq(i).children('.title').removeClass('no').parent().siblings('').children('.title').addClass('no');
            $('.slide li').eq(i).addClass('current').siblings('li').removeClass('current');
        },500);
        
    });



})