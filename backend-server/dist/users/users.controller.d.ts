import { User } from './entity/User.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registerUser(user: User): Promise<User>;
    protected getAllUsers(): string;
}
