const newsUL = document.getElementById("newsUL");
const articles = document.getElementById("Article");
const newsToDisplay = news.articles;

window.addEventListener("load", function() {
    newsToDisplay.map(function(articles) {
        let content = `
            <ul>
            <h3>${articles.title}</h3>
            <b>${articles.author}</b>
            <div id="articleImage"><img src = "${articles.urlToImage}"/></div>
            <div>${articles.description}</div>
            <b>${articles.publishedAt}</b>
            <p>${articles.content}</p>
            </ul>
            `
            
        newsUL.insertAdjacentHTML("beforeend", content)    
            
    })
})
