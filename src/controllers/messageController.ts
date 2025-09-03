import { Request, Response } from "express";
import Message from "../models/messageSchema";

interface messageRequestBody {
  name: string;
  email: string;
  message: string;
}

export const sendMessage = async (
  req: Request<{}, {}, messageRequestBody>,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Fields cannot be left empty",
        success: false,
      });
    }

    await Message.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      message: "Message Sent Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getAllMessage = async (
  req: Request<{}, {}, {}>,
  res: Response
): Promise<Response> => {
  try {
    const messages = await Message.find();

    return res.status(200).json({
      messages,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
