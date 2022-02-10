import { Repository } from 'typeorm';
import { User } from './entity/User.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    registerUser(user: User): Promise<User>;
    getCategoriesOfUser(userId: string): Promise<User>;
}
