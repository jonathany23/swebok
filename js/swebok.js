$(document).ready(function() {
    $.getJSON('Data.json', function(){
        var contents = $('.hero-unit');
        $('.list').click(function(){
           $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            var parts = this.id;
            console.log(parts);
            $('.row-fluid .span4' +'#'+parts).show();
            $(this).addClass("active");
        });
    
        $('.row-fluid .span4').hide();
    });
});