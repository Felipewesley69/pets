import { User } from '@shared/models/user.model';

export interface Posts {
  data: Post[]
}

export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  owner: User;
}