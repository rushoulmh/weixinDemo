(function($) {
    var ua = navigator.userAgent.toLowerCase(),
        isWX = /micromessenger/.test(ua);
    var audio = {},
        doc = $(document),
        isAni = false,
        pageIdx = 1,
        pageNo = $('.m-pg').length,
        towards = {up:1, right:2, down:3, left:4};
    var startY,endY;

    // 自动播放音频
    /*$(document).ready(function(){
        audio.playMusic();
        audio.autoPlay();
    });*/
    $('.u-music').bind('touchend', function(e) {
        e.preventDefault();
        var aud = $('#bg-audio');
        if(aud.paused) {
            aud.play();
            $(this).css('src', 'imgs/musicon.png');
        } else {
            aud.pause();
            $(this).css('src', 'imgs/musicoff.png');
        }
        doc.bind('WeixinJSBridgeReady', function() {
            if(aud.paused) {
                aud.play();
                self.css('src', 'imgs/musicon.png');
            } else {
                aud.pause();
                self.css('src', 'imgs/musicoff.png');
            }
        });
        /*audio.playMusic();
        audio.autoPlay();*/
    });
    /*$('.u-music').bind('click', function() {
        var aud = $('#bg-audio'), self=$(this);
        alert(aud);
        if(aud.paused) {
            aud.play();
            self.css('src', 'imgs/musicon.png');
        } else {
            aud.pause();
            self.css('src', 'imgs/musicoff.png');
        }
        doc.bind('WeixinJSBridgeReady', function() {
            if(aud.paused) {
                aud.play();
                self.css('src', 'imgs/musicon.png');
            } else {
                aud.pause();
                self.css('src', 'imgs/musicoff.png');
            }
        });
    });*/
    /*audio.autoPlay = function() {
        var aud = $('#bg-audio');
        aud.play();
        doc.bind('WeixinJSBridgeReady', function() {
            aud.play();
        });
    };
    audio.playMusic = function() {
        var self = $(this);
        function musicInBrowser() {
            self.musicPlay(true);
            $(document.body).unbind('touchstart', musicInBrowser);
        }
        $(document.body).bind('touchstart', musicInBrowser);
        function musicInWX() {
            self.musicPlay(true);
            doc.bind('WeixinJSBridgeReady', function() {
                self.musicPlay(true);
            }).unbind('DOMContentLoaded', musicInBrowser);
        }
    };
    audio.musicPlay = function(isPlay) {
        var aud = $('#bg-audio');
        if(isPlay && aud.paused) {
            aud.play();
        } else {
            aud.pause();
        }
    };*/

    // 触摸滚屏
    doc.on('touchstart', function(e) {
        e.preventDefault();
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    doc.bind('touchmove', function(e) {
        e.preventDefault();
        var y = 0;
        endY = e.originalEvent.changedTouches[0].pageY;
        y = endY - startY;
        if(y > 10) {
            
        }
    });
    /*doc.swipeUp(function() {
        if(isAni) return;
        if(pageIdx < pageNo) {
            pageIdx++;
        } else {
            pageIdx = 1;
        }
        pageMove(towards.up);
    });
    doc.swipeDown(function() {
        if(isAni) return;
        if(pageIdx > 1) {
            pageIdx--;
        } else {
            pageIdx = pageNo;
        }
        pageMove(towards.down);
    });*/
    function pageMove(tw) {
        var lastPage, crtPage;
        if(tw == 1) {
            if(pageIdx == 1) {
                lastPage = '.m-pg-' + (pageNo-1);
            } else {
                lastPage = '.m-pg-' + (pageIdx-1);
            }
        } else if(tw == 3) {
            if(pageIdx == pageNo) {
                lastPage = '.m-pg-0';
            } else {
                lastPage = '.m-pg-' + pageIdx;
            }
        }
        crtPage = '.m-pg-' + (pageIdx-1);
        $(crtPage).css('display', 'block');
        switch(tw) {
            case towards.up:break;
            case towards.down:break;
        }
    }
})(jQuery)