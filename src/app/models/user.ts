export class User {
  id: number;
  email: string;
  password: string;
  password_confirmation: string;

  constructor(user: any) {
    this.id = user.id || 0;
    this.email = user.email || '';
    this.password = user.password || '';
    this.password_confirmation = user.password_confirmation || '';
  }
}
