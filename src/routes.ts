import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    educator: "Eduardo",
    name: "NodeJS",
    duration: 10,
  });

  return response.send();
}