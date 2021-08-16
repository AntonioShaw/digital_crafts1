const articleList = document.getElementById("articleList")

async function getNewsStories() {
    let response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    let newsArray = response.json()
    return newsArray
}

function displayNews(articleData) {
    console.log(articleDetails)
    articleList.insertAdjacentHTML("beforeend", articleDetails)
    articleList.innerHTML = articleDetails
}

async function getarticleData(newsArray) {
    const newsArticle = newsArray.map(async function(article) {
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${article}.json?print=pretty`)
    .then 
    })
}