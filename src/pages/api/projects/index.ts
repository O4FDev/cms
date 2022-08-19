// Example of a restricted endpoint that only authenticated users can access from https://next-auth.js.org/getting-started/example

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const projectsBaseRequest = async (req: NextApiRequest, res: NextApiResponse) => {
    // if the Api Request is post, then we want to create a new project
    if (req.method === "POST") {
        const { name, userId } = req.body;
        const createProject = await prisma.project.create({
            data: {
                name,
                usersId: { set: [userId] },
                createdBy: { connect: { id: userId } },
                projectUsers: { create: { user_id: userId } },
            }
        });

        // Return the project created
        return res.status(200).json(createProject);
    }

};

export default projectsBaseRequest;
