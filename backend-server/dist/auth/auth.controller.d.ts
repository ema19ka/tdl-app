import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/Login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    protected login(loginDto: LoginDto, response: Response): Promise<any>;
    logout(res: Response): Promise<Response<any, Record<string, any>>>;
}
