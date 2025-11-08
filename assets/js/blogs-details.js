const shareImgBtn=document.querySelector(".shareimage-btn");

console.log(shareImgBtn)

shareImgBtn.addEventListener("click",async()=>{
    const imageUrl="/assets/images/blog-details1-img.png";
    
    // try{
    //     const response=await fetch(imageUrl);
    //     const blob= await response.blob();
    //     const file=new File([blob],"/assets/images/blog-details1-img.png",{type:blob.type})
    //     if(navigator.canShare({files:[file]})){
    //         await navigator.share({
    //             title:'Loud Leaders',
    //             text:'Check this Out',
    //         });
    //         console.log("image shared")
    //     }else{
    //         alert("your browser does not support")
    //     }
    // }catch(error){
    //         console.error("Error while sharong this image")
    //     }
    navigator.share({ title:'Loud Leaders',
                text:'Loud Leaders',
                url:"http://127.0.0.1:5500/blogs-details.html/assets/images/blog-details1-img.png"
    })
})