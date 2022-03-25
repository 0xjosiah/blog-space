const newPost = document.querySelector('form')

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => displayFetchedBlogs(data, 8))
    
function displayFetchedBlogs(data, numOfBlogs) {
    const dataArr = data.slice(0,numOfBlogs)
    dataArr.forEach(i => displayNewBlog(i))
}

function displayNewBlog(blogObj) {
    let div = document.createElement('div')
    let blogHtml = `<h3>${blogObj.title}</h3>
                    <p>${blogObj.body}</p>`
    div.innerHTML = blogHtml
    let mostRecentPost = document.querySelectorAll('div')[1]
    document.querySelector('section').insertBefore(div, mostRecentPost)
}

newPost.addEventListener('submit', event => {
    event.preventDefault()
    const blogData = {
        title: document.querySelector('#new-blog-title').value,
        body: document.querySelector('#new-blog-body').value
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
    })
        .then(res => res.json())
        .then(data => {
            displayNewBlog(data)
            newPost.reset()
        })
})