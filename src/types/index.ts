/* eslint-disable @typescript-eslint/no-explicit-any */

import { Models } from "appwrite";

export type ProfileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};


export interface StabBlockProps {
  value: string | number;
  label: string;
}

export type UserCardProps = {
  user: Models.Document;
};

export type GridPostListProps = {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

export type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: any;
};

export type PostStatsProps = {
  post?: Models.Document;
  userId: string;
}

export type PostCardProps = {
  post: Models.Document;
}

export type PostFormProps = {
  post?: Models.Document;
  action: 'Crear' | 'Actualizar';
}


export type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
}

export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
  signOut: () => Promise<void>; // Agregar la función signOut a la interfaz
};

export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
  };
  
  export type IUpdateUser = {
    userId: string;
    name: string;
    bio: string;
    imageId: string;
    imageUrl: URL | string;
    file: File[];
  };
  
  export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
  };
  
  export type IUpdatePost = {
    postId: string;
    caption: string;
    imageId: string;
    imageUrl: URL;
    file: File[];
    location?: string;
    tags?: string;
  };
  
  export type IUser = {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
  };
  
  export type INewUser = {
    name: string;
    email: string;
    username: string;
    password: string;
  };