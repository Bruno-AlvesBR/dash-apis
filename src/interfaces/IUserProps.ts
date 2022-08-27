export interface IUserProps {
  id?: string;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  email?: string;
  password?: string;
  interest?: string;
  creditCard?: {
    numberCard?: string;
    dateCard?: string;
    codeCard?: string;
  };
  admin?: boolean;
  cep?: number;
  createdAt?: string;
  updatedAt?: string;
  acessToken?: string;
}

export interface IUserRegister {
  id?: string;
  firstName?: IUserProps;
  lastName?: IUserProps;
  email?: string;
  password?: string;
  admin?: boolean;
}

export interface IUserLogin {
  id?: string;
  email?: string;
  password?: string;
  admin?: boolean;
  acessToken?: string;
}

export interface IUserCard {
  creditCard?: IUserProps;
}

export interface IUser {
  user?: IUserProps;
}

export enum TOKEN {
  AUTH_TOKEN='authUserId'
}
