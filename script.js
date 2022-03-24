fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        const blogData = data.slice(0,5)
        for (let i = 0; i < blogData.length; i++) {
            let div = document.createElement('div')
            let blogHtml = `<h3>${blogData[i].title}</h3>
                            <p>${blogData[i].body}</p>`
            div.innerHTML = blogHtml
            document.body.appendChild(div)
        }
    })

