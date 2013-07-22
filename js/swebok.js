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
        }else if(parts == 'mDis'){
            mDis();
        }else if(parts == 'mCons'){
            mCons();
        }else if(parts == 'mPru'){
            mPru();
        }else if(parts == 'mMan'){
            mMan();
        }else if(parts == 'mGC'){
            mGC();
        }else if(parts == 'mDIS'){
            mDIS();
        }else if(parts == 'mPIS'){
            mPIS();
        }else if(parts == 'mISHM'){
            mISHM();
        }else if(parts == 'mCal'){
            mCal();
        }
    });
    $('.row-fluid .span4').hide();
});

function Home(parts){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mHome, function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('#mHome').addClass("active");
        });
    });
}

function mReq(parts){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mReq, function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<h2>'+item.id1[i].tGroup+'</h2><hr>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#'+parts).addClass("active");
        });
    });
}

function mDis(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mDis, function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mDis').addClass("active");
        });
    });
}

function mCons(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mCons, function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mCons').addClass("active");
        });
    });
}

function mPru(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mPru,function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mPru').addClass("active");
        });
    });
}

function mMan(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mMan,function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mMan').addClass("active");
        });
    });
}
function mGC(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mGC,function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mGC').addClass("active");
        });
    });
}

function mDIS(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mDIS,function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mDIS').addClass("active");
        });
    });
}

function mPIS(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mPIS,function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mPIS').addClass("active");
        });
    });
}

function mISHM(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mISHM,function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');        
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mISHM').addClass("active");
        });
    });
}

function mCal(){
    $.getJSON('data.json', function(data){
        $.each(data.areas[0].mCal,function(i, item){
            $('.hero-unit').hide();
            $('.row-fluid .span4').hide();
            $('.list').removeClass('active');
            
            $('.hero-unit').show();
            $('.hero-unit h1').remove();
            $('.hero-unit p').remove();
            $('.hero-unit').append('<h1>'+this['titulo']+'</h1><p>'+this['description']+'</p>');
            $('.span9 .row-fluid h2').remove();
            $('.span9 .row-fluid hr').remove();
            $('.row-fluid .span4 h3').remove();
            $('.row-fluid .span4 p').remove();
            if(item.id1.length>0){
                console.log(item.id1.length);
                for(i=0;i<item.id1.length;i++){
                    $('.span9 .row-fluid').append('<div><h2>'+item.id1[i].tGroup+'</h2><hr></div>');
                    for(j=0;j<item.id1[i].fund.length;j++){
                        $('.span9 .row-fluid').append('<div class="span4"><h3>'+item.id1[i].fund[j].name+'</h3><p>'+item.id1[i].fund[j].content+'</p></div>');
                    }
                }
            }
            $('#mCal').addClass("active");
        });
    });
}