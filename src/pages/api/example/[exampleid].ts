import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

enum MethodsEnum {
    POST = "POST",
    GET = "GET"
  }

const example = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case MethodsEnum.GET:
            return getExample(req, res)
        case MethodsEnum.POST:
            return postExample(req, res)    
        default:
            return res.status(404).json({message: "API route not found"})
    }
}

const getExample = async (req: NextApiRequest, res: NextApiResponse) => {
    const { exampleid } = req.query;
    console.log("searching for", exampleid);
    try {
        const response = await prisma.example.findUnique({
            where: {
                id: exampleid as string
            }
        })
        console.log("found", response)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({message: "Error getting example"})
    }
}

const postExample = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await prisma.example.create({data: {}})
        return res.status(200).json({createdExample: response, status: "success"})
    } catch (error) {
        return res.status(500).json({message: "Error in creating example"})
    }
}

export default example