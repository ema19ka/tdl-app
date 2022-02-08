import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/Login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    protected login(loginDto: LoginDto, response: Response): Promise<any>;
    logout(res: Response, req: Request): Promise<void>;
}
