import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['GET'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const getProducts = await fetch(`https://svr.eramitra.com/product?brand=${req.query.brand ? req.query.brand : ""}&industry=${req.query.industry ? req.query.industry : ""}&application=${req.query.application ? req.query.application : ""}&page=${req.query.page ? req.query.page : ""}`)
        const data = await getProducts.json()
        res.json(data)
        console.log(res.json(data))
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler