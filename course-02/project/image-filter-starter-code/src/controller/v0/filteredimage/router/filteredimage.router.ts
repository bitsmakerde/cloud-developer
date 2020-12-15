import { Router, Request, Response } from "express";
import { filterImageFromURL, deleteLocalFiles } from "../../../../util/util";

const router: Router = Router();

// update a specific resource
router.get("/", async (req: Request, res: Response) => {
  let filteredpath = req.query.image_url;

  let filterImageURL = await filterImageFromURL(filteredpath.toString());

  res.status(200).sendFile(filterImageURL, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    deleteLocalFiles([filterImageURL]);
  });
});

export const FilteredImageRouter: Router = router;
