const Article = require('../models/article.model')

exports.create = (req, res) => {
    res.render('blog/create')
}

exports.store = async (req, res) => {
    let article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
    })

    try {
        await article.save()
        console.log('Success insert data!')
        res.redirect('/')
    } catch (error) {
        console.log('Error when save to db: ' + error);
        res.render('/blog/create')
    }

}

exports.show = (req, res) => {
    res.render('blog/show')
}