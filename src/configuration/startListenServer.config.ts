import Console from "../util/Console/Console.util";

export default function startListenServer(): void {
  Console.info(`Start server on port ${process.env.SERVER_DEV_PORT}`)
}