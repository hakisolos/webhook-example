import { Hono } from "hono";

const app = new Hono()


app.get("/", async(c) => {
    return c.text("app runnning")
})


app.post("/github/webhook", async (c) => {
  const event = c.req.header("x-github-event");

  let data;
  try {
    data = await c.req.json();
  } catch {
    return c.text("invalid json", 400);
  }

  if (event === "push") {
    console.log("push event detected");
  }

  return c.text("ok", 200);
});


Bun.serve({
    fetch: app.fetch,
    port: 4000
})
console.log("api is running")

