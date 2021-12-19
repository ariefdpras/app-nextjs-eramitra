import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['GET'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const getIndustry = await fetch(`https://svr.eramitra.com/industry/${req.query.id}`)
        const data = await getIndustry.json()
        res.json(data)
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler