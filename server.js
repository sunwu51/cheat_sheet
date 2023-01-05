import { opine, serveStatic } from "https://deno.land/x/opine@2.3.3/mod.ts";

const app = opine();

app.use(serveStatic("public"))

app.listen(3000, () =>
  console.log("server has started on http://localhost:3000 🚀")
);