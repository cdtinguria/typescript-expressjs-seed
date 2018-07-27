import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({ m: 'Hello, Typescript World!'});
});


export const HelloRouter: Router = router;
