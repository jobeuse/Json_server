const container=document.querySelector(".blogs");
const search=document.querySelector(".search");

const renderPosts = async (term) =>{

  let uri='http://localhost:3000/posts?_sort=likes&_order=desc';

  if (term) {
    uri +=`&q=${term}`;
  }
  const res = await fetch(uri);
  const posts = await res.json();
  let template='';

  posts.forEach(post => {
    template += 
  `
    <div class="row p-2 mt-3 bg-white shadow-sm rounded">
      <div class="col-lg-12">
        <h4>${post.title}</h4>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 100)}</p>
        <a href="/details.html?id=${post.id}">Read more</a>
      </div> 
    </div>
`;
    
  });
  container.innerHTML = template;
}; 



search.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(search.term.value)

});

window.addEventListener('DOMContentLoaded', () => renderPosts());
  