import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

enum MethodsEnum {
  POST = "POST",
  GET = "GET"
}

/* this is basically just raw nextjs backend functionality, no trpc */
const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case MethodsEnum.GET:
      return getExamples(req, res)
    default:
      return res.status(404).json({error: "ROUTE_NOT_FOUND", message: "Route doesn't exist"})
  }
};

const getExamples = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await prisma.example.findMany();
    return res.status(200).json(response)
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Internal server error", message: "Error getting in database"})
  }
}

export default examples;
