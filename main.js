// let counter=0

// function changeImage() {                                1st attempt at 1 button to change image
//     let img=document.getElementById('image')
// // counter+=1
// // if (counter>5){
// //     counter=0
// // }
// // if(counter==0){
// //     img.src="/images/antarctic night sky.jpg"
// // }
// // if(counter==1){
// //     img.src="/images/lebanon night sky.jpg"
// // }
// // if(counter==2){
// //     img.src="/images/night sky.jpg"
// // }
// // if(counter==3){
// //     img.src="/images/night-sky-arctic.webp"
// // }
// // if(counter==4){
// //     img.src="/images/southern hemisphere night sky.webp"
// // }
// // if(counter==5){
// //     img.src="/images/tropics night sky.webp"
// // }

// // console.log(counter)
// console.log()
// }

// function changeImage1(){                                   2nd attempt,multple buttons ,multiple functions
//     let img=document.getElementById('image')
//     img.src="/images/antarctic night sky.jpg"
// }
// function changeImage2(){
//     let img=document.getElementById('image')
//     img.src="/images/lebanon night sky.jpg"
// }
// function changeImage3(){
//     let img=document.getElementById('image')
//     img.src="/images/night sky.jpg"
// }
// function changeImage4(){
//     let img=document.getElementById('image')
//     img.src="/images/night-sky-arctic.webp"
// }
// function changeImage5(){
//     let img=document.getElementById('image')
//     img.src="/images/southern hemisphere night sky.webp"
// }

function changeImage(elem){                                    //3rd attempt,multiple btns,one function,using this
    console.log(elem.id)
    let img=document.getElementById('image')
    if(elem.id==1){
        img.src="/images/antarctic night sky.jpg"
    }
    if(elem.id==2){
        img.src="/images/lebanon night sky.jpg"
    }
    if(elem.id==3){
        img.src="/images/night sky.jpg"
    }
    if(elem.id==4){
        img.src="/images/night-sky-arctic.webp"
    }
    if(elem.id==5){
        img.src="/images/southern hemisphere night sky.webp"
    }
}