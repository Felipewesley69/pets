export interface Users {
  data: User[];
}

export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  location: any;
  phone: string;
  gender: string;
}