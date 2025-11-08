const shareImgBtn=document.querySelector(".shareimage-btn");

console.log(shareImgBtn)

shareImgBtn.addEventListener("click",async()=>{
    const imageUrl="https://narendran1424.github.io/quiet-climb/assets/images/blog-details1-img.png";
    
    try{
        const response=await fetch(imageUrl);
        const blob= await response.blob();
        console.log(blob.size)
        const file=new File([blob],"https://narendran1424.github.io/quiet-climb/assets/images/blog-details1-img.png",{type:blob.type})
        if(navigator.canShare({files:[file]})){
            await navigator.share({
                title:'Loud Leaders',
                text:'Loud Leaders',
                files:[file]
            });
            console.log("image shared")
        }else{
            alert("your browser does not support")
        }
    }catch(error){
            console.error("Error while sharong this image")
        }
})