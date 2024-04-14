

export class Profile {
  id: number;
  username: string;
  profile_picture: string;
  about_me: string;
 

  constructor(profile: any) {
    this.id = profile.id || 0;
    this.username = profile.username || '';
    this.profile_picture = profile.profile_picture || '';
    this.about_me = profile.about_me || '';
  }
}
