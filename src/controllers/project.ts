import { Request, Response } from "express";
import * as request from "request";
import { ProjectSummary } from "../models/project-summary";

export let getProject = (req: Request, res: Response) => {
  const repoListUrl = `http://localhost:7990/rest/api/1.0/projects/BB/repos`;

  const options: request.CoreOptions = {
    auth: {
      username: "admin",
      password: "password"
    }
  };

  const projectSummary: ProjectSummary = new ProjectSummary();
  projectSummary.name = "BB";

  request.get(repoListUrl, options, function(err, response: request.RequestResponse, body) {
    if (err) {
      console.log("error: " + err);
      res.send("Error received: " + err);
    } else {
      const responseObj: Object[] = JSON.parse(response.body);
      projectSummary.repositoryCount = responseObj.values.length;

      res.send(projectSummary);
    }
  });

};