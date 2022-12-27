// create a function call Hello that returns a string hello world
export default function handler(req: any, res: any) {
  res.status(200).json({ text: "Hello" });
}
