import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['GET'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const getProducts = await fetch(`https://svr.eramitra.com/product?sort=name,asc&brand=${req.query.brand ? req.query.brand : ""}&industry=${req.query.industry ? req.query.industry : ""}&application=${req.query.application ? req.query.application : ""}&page=${req.query.page ? req.query.page : ""}&size=12`)
        const data = await getProducts.json()
        res.json(data)
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler