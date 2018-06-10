export class UserModel{
    userId?: number;
    userName: string;
    userPassword: string;
    firstName: string;
    lastName: string;
    userPhotoPath: string;
    description: string;
    userCvPath: string;
    creUser?: number;
    creDate?: Date;
    modUser?: number;
    modDate?: Date;
    isDeleted: boolean;
}