const form =document.querySelector("form"); 
const createpost = async (e) => {
    e.preventDefault();
    const post ={
        "title":form.title.value,
        "body":form.body.value,
        "likes":0,
    }
    await fetch('http://localhost:3000/posts',{
        method: 'POST',
        body:JSON.stringify(post),
        headers:{'content-type': 'application/json'}
    });
    window.location.replace('/');
};


window.addEventListener('submit', createpost);
