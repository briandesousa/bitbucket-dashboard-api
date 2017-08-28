import { Request, Response } from "express";
import * as request from "request";

export let getRepositories = (req: Request, res: Response) => {
  const repoListUrl = `http://localhost:7990/rest/api/1.0/projects/BB/repos`;

  const options: request.CoreOptions = {
    auth: {
      username: "admin",
      password: "password"
    }
  };

  request.get(repoListUrl, options, function(err, response: request.RequestResponse, body) {
    if (err) {
      console.log("error: " + err);
      res.send("Error received: " + err);
    } else {
      console.log("response: " + response);
      res.send(JSON.stringify(response.body));
    }
  });

  
};