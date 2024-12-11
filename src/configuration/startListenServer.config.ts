import Console from "../lib/Console/Console.lib";

export default function startListenServer(): void {
  Console.info(`Start Listening port ${process.env.SERVER_DEV_PORT}`)
}