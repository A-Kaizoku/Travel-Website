// scroll effects
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

//1st method

// const hikeExp=document.querySelector(".hike-exp");
// console.log(hikeExp)
// window.addEventListener('scroll',()=>{
//     const hikePos=hikeExp.getBoundingClientRect().top;
//     const windowHeight=window.innerHeight/2;
//     if(hikePos<windowHeight){
//         hikeExp.style.color="red";
//     }
    
// })

//2nd method
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// const slide=document.querySelector('.hike');

// let options={
//     threshold: 0.5
// }
// let observer=new IntersectionObserver(slideAnim,options);

// function slideAnim(enteries){
//     enteries.forEach(entry => {
//         console.log(entry.target);
//         if(entry.isIntersecting)
//         {   entry.target.style.zoom='1.2';
//             entry.target.style.boxShadow='0 0 20px 1px white';
//         }
//         else {
//             entry.target.style.zoom='normal';
//             entry.target.style.boxShadow='none';
//         }   
            
//     });
// }

// observer.observe(slide);

//3rd scroll magic


// const controller=new ScrollMagic.Controller();
// const exploreScene=new ScrollMagic.Scene({
//     triggerElement:'.hike-exp',
//     triggerHook:0.5
// })
// .addIndicators({
//     colorStart:'white',colorTrigger:'white'})   //for visualization of BTS working only
// .setClassToggle('.hike-exp','active')
// .addTo(controller)
