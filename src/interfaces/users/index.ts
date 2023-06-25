

interface IUserRequest {
  name: string;
  phoneNumber: string;
  email: string;
}

interface IUserResponse {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
}

interface IUserUpdate {
  name?: string;
  phoneNumber?: string;
  email?: string;
}

export type { IUserRequest, IUserResponse, IUserUpdate };