import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['GET'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const getBrand = await fetch(`https://svr.eramitra.com/brand/${req.query.id}`)
        const data = await getBrand.json()
        res.json(data)
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler