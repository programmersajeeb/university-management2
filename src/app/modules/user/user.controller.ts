import { RequestHandler } from 'express';
import { userService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    /*  req validation 
        body akta object  
        data gulao object
    */

    // const createUserZodSchema = z.object({
    //   body: z.string({
    //     required_error: 'role is required',
    //   }),
    //   password: z.string().optional(),
    // });

    // await createUserZodSchema.parseAsync(req);

    const { user } = req.body;
    const result = await userService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
};
