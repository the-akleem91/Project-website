import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const body = req.json();
    const { message } = body;

    if (!configuration.apiKey)
      return new NextResponse(" Open api key not working", { status: 404 });

    if (!message)
      return new NextResponse("messsage is required", { status: 400 });

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      message,
    });
  } catch (error) {
    console.log("connextion error");
    return new NextResponse("internal error", { status: 500 });
  }
}
