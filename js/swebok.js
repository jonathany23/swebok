$(document).ready(function() {
    Home();
    $('#mHome').addClass("active");
    $('.list').click(function(){
        var parts = this.id;
        console.log(parts);
        if (parts == 'mHome') {
            Home(parts);
        } else if(parts == 'mReq'){
            mReq(parts);
        };
    });
    //$('.hero-unit').hide();
    $('.row-fluid .span4').hide();
});

function Home(parts){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mHome, function(i, item){
            //var contents = $('.hero-unit');
            //$('.list').click(function(){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            //var parts = this.id;
            //console.log(parts);
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            
            //$('.row-fluid .span4' +'#'+parts).show();
            $('#mHome').addClass("active");
        //});
        });
    
        //$('.row-fluid .span4').hide();
    });
}

function mReq(parts){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mReq, function(i, item){
            //var contents = $('.hero-unit');
            //$('.list').click(function(){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            //var parts = this.id;
            //console.log(parts);
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            var out="";
            $('.row-fluid .span4').show();
            $('.row-fluid .span4 h2').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    //out += '<h2>'+item.id1[i].tGroup+'</h2><hr>';
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
                console.log(out);
                //$('.row-fluid').append(out);
            }
            $('#'+parts).addClass("active");
        //});
        });
    
        //$('.row-fluid .span4').hide();
    });
}