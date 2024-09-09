AFRAME.registerComponent("whatnameshouldigive",{
    init:function(){
        tutle4=4
        this.el.addEventListner('collide',function (e){
            e.detail.target.el.remove();
            tutle4-=1
            abanatext= document.getElementById("abana") 
            abanatext.setAttribute('text',{value:String(tutle4)/4});
            if(tutle4==0){
                anabatext=document.getElementById("anaba")
                anabatext.setAttribute("text",{value:"you win because\n you found all the tutles!!!\n now go outside "})
            }
        })
    }
})