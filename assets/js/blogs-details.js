const shareImgBtn1=document.querySelector(".blogs-content-section .blogs-section-container .date-share-icon  .shareimage-btn1");

const shareImgBtn2=document.querySelector(".blogs-content-section .blogs-section-container .date-share-icon  .shareimage-btn2");
const shareImgBtn3=document.querySelector(".blogs-content-section .blogs-section-container .date-share-icon  .shareimage-btn3");

const shareImgBtn4=document.querySelector(".blogs-content-section .blogs-section-container .date-share-icon  .shareimage-btn4");

if(shareImgBtn1){
    shareImgBtn1.addEventListener("click",async()=>{
        const imageUrl="https://narendran1424.github.io/quiet-climb/assets/images/blog-details1-img.png";
        
        try{
            const response=await fetch(imageUrl);
            const blob= await response.blob();
            const file=new File([blob],"https://narendran1424.github.io/quiet-climb/assets/images/blog-details1-img.png",{type:blob.type})
            if(navigator.canShare({files:[file]})){
                await navigator.share({
                    title:'Loud Leaders',
                    text:'Loud Leaders',
                    files:[file]
                });
            }
        }catch(error){
            console.error("Error while sharong this image")
        }
    })
}


if(shareImgBtn2){
    shareImgBtn2.addEventListener("click",async()=>{
        const imageUrl="https://narendran1424.github.io/quiet-climb/assets/images/blog-details2.png";
        
        try{
            const response=await fetch(imageUrl);
            const blob= await response.blob();
            const file=new File([blob],"https://narendran1424.github.io/quiet-climb/assets/images/blog-details2.png",{type:blob.type})
            if(navigator.canShare({files:[file]})){
                await navigator.share({
                    title:'Professionals At Work',
                    text:'Professionals At Work',
                    files:[file]
                });
            }
        }catch(error){
            console.error("Error while sharong this image")
        }
    })
}

if(shareImgBtn3){
    shareImgBtn3.addEventListener("click",async()=>{
        const imageUrl="https://narendran1424.github.io/quiet-climb/assets/images/blog-details3.png";
        
        try{
            const response=await fetch(imageUrl);
            const blob= await response.blob();
            const file=new File([blob],"https://narendran1424.github.io/quiet-climb/assets/images/blog-details3.png",{type:blob.type})
            if(navigator.canShare({files:[file]})){
                await navigator.share({
                    title:'Self Promoters',
                    text:'Self Promoters',
                    files:[file]
                });
            }
        }catch(error){
            console.error("Error while sharong this image")
        }
    })
}

if(shareImgBtn4){
    shareImgBtn4.addEventListener("click",async()=>{
        const imageUrl="https://narendran1424.github.io/quiet-climb/assets/images/blog-details4.png";
        
        try{
            const response=await fetch(imageUrl);
            const blob= await response.blob();
            const file=new File([blob],"https://narendran1424.github.io/quiet-climb/assets/images/blog-details4.png",{type:blob.type})
            if(navigator.canShare({files:[file]})){
                await navigator.share({
                    title:'Back In Meetings',
                    text:'Back In Meetings',
                    files:[file]
                });
            }
        }catch(error){
            console.error("Error while sharong this image")
        }
    })
}