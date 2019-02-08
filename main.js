 function percentageSeen() {

            var viewportHeight = $(window).height(),

                scrollTop = $win.scrollTop(),

                elementOffsetTop = $element.offset().top,

                elementHeight = $element.height();

            if (elementOffsetTop > (scrollTop + viewportHeight)) {

                return 0;

            } else if ((elementOffsetTop + elementHeight) < scrollTop) {

                return 100;

            } else {

                var distance = (scrollTop + viewportHeight) - elementOffsetTop;

                var percentage = distance / ((viewportHeight + elementHeight) / 100);

                percentage = Math.round(percentage);

                return percentage;

            }

        }
        var $element = $('.home-bottom');
        var $win = $(window);
        $win.on('scroll', function() {

            console.log(percentageSeen());

            // $(".lightBlueSvg").css({
            //     "transform": "translate3d(0px, " + -(svgScrolld * 3) + "px, 0px)"
            // });

        });
