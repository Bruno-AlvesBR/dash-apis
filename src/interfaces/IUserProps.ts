export interface IUserProps {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  admin?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUser {
  user?: IUserProps;
}