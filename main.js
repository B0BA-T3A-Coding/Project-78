var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Dad", "Brother", "Me", "Mom"];
var i=0;
function next(){
  document.getElementById("FI").src=image[i];
  document.getElementById("FN").innerHTML=names[i];
  i++; 

    if (i == 4)
      {
          i = 0;
      }
    
}
