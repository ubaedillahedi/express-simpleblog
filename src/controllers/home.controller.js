const Article = require('../models/article.model')

exports.index = async (req, res) => {
    let articles = await Article.find()
    // console.log(articles)
    res.render('index', {
        data: articles
    })
}