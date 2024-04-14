import { User } from "./user";

export class Post {
  id: number;
  subject: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  user: User;
  profile_pic: string;

  constructor(post: any) {
    this.id = post.id || 0;
    this.subject = post.subject || '';
    this.content = post.content || '';
    this.created_at = post.created_at || '';
    this.updated_at = post.updated_at || '';
    this.user = post.username || null;
    this.profile_pic = post.profile_pic || '';
  }
}
