declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name: string;
                role: string;
            };
        }
    }
}
declare const registerUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
declare const loginUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
declare const logoutUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
declare const refreshAccessToken: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
declare const changePassword: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
declare const getUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
declare const updateAccount: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
export { registerUser, loginUser, logoutUser, refreshAccessToken, changePassword, getUser, updateAccount };
//# sourceMappingURL=user.controller.d.ts.map