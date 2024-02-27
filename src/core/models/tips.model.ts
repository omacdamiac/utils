export interface ITIPS {
  id: number;
  title: string;
  description: string;
  date_create: string;
  date_update: string;
  tags: string[];
  link: string;
  comments: ICOMMENTS[];
  categories: string[];
  profile: IPROFILE;
}

export interface ICOMMENTS {
  id: number;
  avatar: string;
  comment: string;
  estado: string;
  date_create: string;
}

export interface IPROFILE {
  id: number;
  username: string;
  email: string;
}
