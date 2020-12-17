import express, { Router, Request, Response } from "express";
import bodyParser from "body-parser";
import { IndexRouter } from "./controller/v0/index.router";

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  const router: Router = Router();

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  //! END @TODO1

  app.use("/", IndexRouter);

  app.get("/", async (req, res) => {
    res.send(
      "test app please use this command {{host}}/filteredimage?image_url=https://i.auto-bild.de/ir_img/1/7/6/3/5/7/9/Alle-Auto-Neuheiten-2020-1200x800-5ee05953c940d5aa.jpg"
    );
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
