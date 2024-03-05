function loadusers(){

    fetch("https://jsonplaceholder.typicode.com/comments")
  .then(res =>res.json())
  .than(data => displayusers(data))



}
loadusers();

function displayusers(data){

  const sectionId = document.getElementById('comments');
for(const commentsof data){
  const div =document.createElement('div');
  div.innerHTML =`
  <h1>${comments. name }</h1>
  <h5>${comments.usersname}</h5>
  <h4>${comments.email}</h4>
  <a>${comments.phone}</a>
  <a href="${comments.website}">website<a/> `;

  sectionId.appendChild(div);
  console.log(comments);    
}


}