var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");

for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
}



function showlist(){
    for(var i = 0; i<tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}
var seckillNav = document.getElementById("seckillNav");
    window.onscroll = function(){ var scrollTop = document.documentElement.scrollTop;
        if( scrollTop >= 270 ){
            seckillNav.className = "seckill-nav seckill-navfixed"
        }
        else{
            seckillNav.className = "seckill-nav";
        }
    console.log(scrollTop);
}
   