import { Request, Response } from "express";
import * as request from "request";
import { Project } from "../models/project";
import { Repository } from "../models/repository";

export let getProject = (req: Request, res: Response) => {
  const repoListUrl = `http://localhost:7990/rest/api/1.0/projects/BB/repos`;

  const options: request.CoreOptions = {
    auth: {
      username: "admin",
      password: "password"
    }
  };

  const project: Project = new Project();
  project.name = "BB";

  request.get(repoListUrl, options, function(err, response: request.RequestResponse, body) {
    if (err) {
      console.log("error: " + err);
      res.send("Error received: " + err);
    } else {
      const responseObj = JSON.parse(response.body);

      if (responseObj.nextPageStart && responseObj.nextPageStart > 0) {
        console.log("Paging bitbucket project API not yet supported");
        // TODO add support for paging
      }

      project.repositories = new Array<Repository>();

      for (const repo of responseObj.values) {
        const repository = new Repository();
        repository.name = repo.name;
        repository.url = repo.links.self.length > 0 ? repo.links.self[0].href : "(no URL available)";
        project.repositories.push(repository);
      }

      res.send(project);
    }
  });

};