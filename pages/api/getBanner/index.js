import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['GET'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const getBrands = await fetch(`https://svr.eramitra.com/banner?status=active`)
        const data = await getBrands.json()
        res.json(data)
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler