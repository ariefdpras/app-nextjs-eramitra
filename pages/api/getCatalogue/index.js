import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['GET'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const getCatalogue = await fetch(`https://svr.eramitra.com/catalogue?status=active`)
        const data = await getCatalogue.json()
        res.json(data)
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler