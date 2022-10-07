import { User } from '@shared/models/user.model';

export interface Comments {
  data: [{
    id: string;
    message: string;
    owner: User;
    post: string;
    publishDate: string;
  }]
}
