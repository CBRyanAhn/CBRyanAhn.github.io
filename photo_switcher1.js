var ImgPath='./'; 
var ImgAry=new Array('CB_photo1.jpg'); 
var RandomNu; 
var ImgCnt=1; 

function ShufImages(){ 
  RandomNu=Math.floor(Math.random()*(ImgAry.length-1)); 
  if (ImgAry[RandomNu]!='X'){ 
    document.getElementById('I'+ImgCnt).src=ImgPath+ImgAry[RandomNu]; 
    ImgAry[RandomNu]='X'; 
    ImgCnt++; 
  }
  if (ImgCnt<ImgAry.length){ setTimeout('ShufImages()',10); } 
}
