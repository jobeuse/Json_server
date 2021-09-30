const id= new URLSearchParams(window.location.search).get('id');
const container=document.querySelector(".details");
const deletebtn=document.querySelector(".delete");
const renderPostsDetails = async () =>{ 
  const res = await fetch('http://localhost:3000/posts/'+id);
  const post= await res.json();

 const template = 
  `
    <div class="row p-2 mt-3 bg-white shadow-sm rounded">
      <div class="col-lg-12">
        <h4>${post.title}</h4>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body}</p> 
      </div> 
    </div>
`;
container.innerHTML = template;

};

deletebtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const res=await fetch('http://localhost:3000/posts/'+id,{
    method: 'DELETE',
  });
  window.location.replace("/");
})

window.addEventListener('DOMContentLoaded', () => renderPostsDetails());
