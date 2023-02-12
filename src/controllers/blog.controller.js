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

exports.edit = async (req, res) => {
    const id = req.params.id
    try {
        let article = await Article.findById(id)
        res.render('blog/edit', {
            article: article
        })
    } catch (error) {
        console.log('Error from edit article: ', error)
        res.redirect('/')   
    }
}

exports.update = async (req, res) => {
    const id = req.params.id
    try {
        let article = await Article.findById(id)
        article.title = req.body.title
        article.subtitle = req.body.subtitle
        article.content = req.body.content
        article.save()
        res.redirect('/')
    } catch (error) {
        console.log('Error from update article: ', error)
        res.render(`blog/${id}/edit`)
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        await Article.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log('Error from delete article: ', error)
        res.redirect('/')
    }
}