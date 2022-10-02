

let imglink=["https://files.myglamm.com/site-images/original/1920x527sk.jpg","https://files.myglamm.com/site-images/original/TGLF-sept-main-KV-1920x527_2.jpg"]
let imgState=0
let left_btn=document.getElementById("left_btn")
let right_btn=document.getElementById("right_btn")
let slimg=document.getElementById("slimg")

right_btn.addEventListener("click",()=>{
    if( imgState==1){
        return
    }
    
    imgState++
    slimg.src=imglink[imgState]
    console.log(imgState)
})


left_btn.addEventListener("click",()=>{
    if( imgState===0){
        return
        
    }
    
    imgState--
    slimg.src=imglink[imgState]
    console.log(imgState)
})



{/* <script type="text/javascript"> */}
//   $(document).ready(function() {
//     $("#lightSlider").lightSlider(); 
//   });
// </script>
// $(document).ready(function() {
//     $("#lightSlider").lightSlider({
//         item: 3,
//         autoWidth: false,
//         slideMove: 1, // slidemove will be 1 if loop is true
//         slideMargin: 10,
 
//         addClass: '',
//         mode: "slide",
//         useCSS: true,
//         cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
//         easing: 'linear', //'for jquery animation',////
 
//         speed: 400, //ms'
//         auto: false,
//         loop: false,
//         slideEndAnimation: true,
//         pause: 2000,
 
//         keyPress: false,
//         controls: true,
//         prevHtml: '',
//         nextHtml: '',
 
//         rtl:false,
//         adaptiveHeight:false,
 
//         vertical:false,
//         verticalHeight:500,
//         vThumbWidth:100,
 
//         thumbItem:10,
//         pager: true,
//         gallery: false,
//         galleryMargin: 5,
//         thumbMargin: 5,
//         currentPagerPosition: 'middle',
 
//         enableTouch:true,
//         enableDrag:true,
//         freeMove:true,
//         swipeThreshold: 40,
 
//         responsive : [],
 
//         onBeforeStart: function (el) {},
//         onSliderLoad: function (el) {},
//         onBeforeSlide: function (el) {},
//         onAfterSlide: function (el) {},
//         onBeforeNextSlide: function (el) {},
//         onBeforePrevSlide: function (el) {}
//     });
// });
// $(document).ready(function() {
//     var slider = $("#lightSlider").lightSlider();
//     slider.goToSlide(3);
//     slider.goToPrevSlide();
//     slider.goToNextSlide();
//     slider.getCurrentSlideCount();
//     slider.refresh();
//     slider.play(); 
//     slider.pause();    
//   });


