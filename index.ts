import { Hono } from "hono";

const app = new Hono()


app.get("/", async(c) => {
    return c.text("app runnning")
})


app.post("/github/webhook", async(c) => {
    const event = c.req.header('x-github-event')
    const data = await c.req.json()

    if(event == "push"){
        console.log("push event detected")
    }
    return c.status(200)
})


Bun.serve({
    fetch: app.fetch,
    port: 4000
})
console.log("api is running")

