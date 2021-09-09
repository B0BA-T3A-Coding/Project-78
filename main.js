var images = ["https://https://tse2.mm.bing.net/th?id=OIP.ml0Uu4nIp1s81eevnNJ9bwHaHa&pid=Api&P=0&w=300&h=300i.postimg.cc/MGn9GJXw/family.jpg", "https://tse4.mm.bing.net/th?id=OIP._ZnE5M0asQj_2ITthOc54gHaH5&pid=Api&P=0&w=300&h=300" , "https://tse2.mm.bing.net/th?id=OIP.FM-AgOyS2CuvqvGZfl5t1gHaQ3&pid=Api&P=0&w=300&h=300", "https://i.postimg.cc/JnL6wtrd/sisthttp://clipground.com/images/boy-clipart-9.jpger.jpg", "https://cliparting.com/wp-content/uploads/2018/03/cartoon-girl-2018-48.jpg"];
var names = ["Family Book", "Dad", "Mom", "Sister(Me)", "Brother"];
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
