import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['GET'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const getArticles = await fetch(`https://svr.eramitra.com/article?sort=createdAt,desc&active=true`)
        const data = await getArticles.json()
        res.json(data)
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler