import { IUserResponse } from "../users";

interface IContactRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
  userId: string;
}

interface IContactResponse {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  user: IUserResponse;
}

interface IContactUpdate {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

export { IContactRequest, IContactResponse, IContactUpdate };