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
        console.log('Error when save to db: ', error);
        res.render('/blog/create')
    }

}

exports.show = async (req, res) => {
    const id = req.params.id
    try {
        let article = await Article.findById(id)
        res.render('blog/show', {
            article: article
        })
    } catch (error) {
        console.log('Error from show article: ', error)
        res.redirect('/')   
    }
}