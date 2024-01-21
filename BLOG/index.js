function loadBlogs () { // function realizando requisição
    fetch("infoBlog.json") // fetch no infoBlog.json.
    .then(response => response.json()) // convertemos a requisição JSON a uma resposta.
    .then(blogsGET => { // acessamos "blogs": [...] da nossa resposta convertida e constamos os objetos.
        const postsId = document.getElementById("postsId");

        // manipulação DOM + mapeameamento de dados.
        blogsGET.blogs.map(blog => {
            const post = document.createElement("div");
            post.classList.add("post");

            const date = document.createElement("p");
            date.classList.add("date");
            date.textContent = blog.postData;

            const p = document.createElement("p");

            const h1 = document.createElement("h1");
            h1.classList.add("post-title")
            h1.textContent = blog.title;

            const div = document.createElement("div");
            div.classList.add("post-content");

            const desc = document.createElement("p");
            desc.classList.add("post-description")
            desc.textContent = blog.description;

            const hr = document.createElement("hr");

            post.appendChild(date);
            post.appendChild(p);
            post.appendChild(h1);
            post.appendChild(div);
            div.appendChild(desc);
            postsId.appendChild(post);
            postsId.appendChild(hr);
        });
    });
};

loadBlogs();