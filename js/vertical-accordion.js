var sclose = false;

$('.js-accordion__item').on('click', function () {
  if (sclose == false) {
        var status = $(this).attr('id');        
        var s1 = "#" + status + "_01";
        var s2 = "#" + status + "_02";
        $(s1).removeClass('showsubclass').addClass('hidesubclass');
        $(s2).removeClass('hidesubclass').addClass('showsubclass');
        $(this).parent().find('.state-active').removeClass('state-active');
        $(this).removeClass('state-collapsed').addClass('state-active');      

        //collapse other items
        $('.js-accordion__item').not(this).addClass('state-collapsed');

        var i;
        for (i = 1; i <= 6; i++) {
            var s3 = "Acc" + i;
            var s4 = "#" + s3 + "_01";
            var s5 = "#" + s3 + "_02";
            var s6 = "#" + s3 + "_03";           

            if (s3 !== status) {               
                $(s4).removeClass('showsubclass').addClass('hidesubclass');
                $(s5).removeClass('showsubclass').addClass('hidesubclass');
                $(s6).removeClass('hidesubclass').addClass('showverticalclass');
            } else {
                $(s6).removeClass('showverticalclass').addClass('hidesubclass');
            }
        }
  } else {
      sclose = false;
  }
});
$('.btn-close-accordion').on('click', function () {   
    var i;
    for (i = 1; i <= 6; i++) {
        var s3 = "#Acc" + i;
       
        $(s3).removeClass('state-collapsed').addClass('');
        $(s3).removeClass('state-active').addClass('');
        var s4 = s3 + "_01";
        var s5 = s3 + "_02";
        var s6 = s3 + "_03";
      
        $(s4).removeClass('hidesubclass').addClass('showsubclass');
        $(s5).removeClass('showsubclass').addClass('hidesubclass');
        $(s6).removeClass('showverticalclass').addClass('hidesubclass');
    }
    sclose = true;
});

