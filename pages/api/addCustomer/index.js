import Cors from 'cors'
import runMiddleware from 'Lib/middleware'

const cors = Cors({
    methods: ['POST'],
})

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        }
        console.log(req.body)
        await fetch(`https://svr.eramitra.com/customer`, config).then((response) => {
        if (response.status >= 400 && response.status < 600) {
            throw new Error("Bad response from server");
        } else {
            res.json({ msg: "Customer is successfully created" })
        }})
    } catch (err) {
        res.json({ error: err })
    }
}

export default handler