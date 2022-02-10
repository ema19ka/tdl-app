import { User } from './entity/User.entity';
import { RegisterUserDto } from './dtos/RegisterUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registerUser(user: User): Promise<User>;
    protected getAllUsers(): string;
    getCategories(params: RegisterUserDto): Promise<User>;
}
