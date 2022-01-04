export declare class User {
    id: string;
    username: string;
    mail: string;
    password: string;
    salt: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    version: number;
    genSalt(): Promise<string>;
    hashPassowrd(password: string, salt: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}
