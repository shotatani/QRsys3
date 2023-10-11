let para = location.search;
para = para.slice(1);
para = para.split('&');

if(para[0] == 'item01'){
           jQuery('.box > div:not("#item01")').hide();
           jQuery('.box > div#item01').show();

}else if(para[0] == 'item02'){
           jQuery('.box > div:not(#item02)').hide();
           jQuery('.box > div#item02').show();          
}