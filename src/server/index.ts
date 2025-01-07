import express, {
  Express,
  Request,
  Response,
  NextFunction
} from 'express'

class Server {
  private readonly app: Express
  private readonly port: number

  constructor(port: number) {
    this.app = express()
    this.port = port
  }

  public start(): void {

    this.app.get('/ping', (req: Request, res: Response, next: NextFunction) => {
      res.send('Hello World!')
    })
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}

export default Server