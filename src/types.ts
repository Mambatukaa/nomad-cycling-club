export interface ISocialAccount {
  name: string;
  url: string;
}

export interface ILeader {
  id: number;
  fullName: string;
  summary: string;
  avatar: string;
  role: string;
  socialAccounts?: ISocialAccount[];
}
