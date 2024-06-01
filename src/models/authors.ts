export interface Authors {
  type: {
    key: string;
  };
  author: {
    key: string;
  };
  key: string;
}

export interface Author {
  name: string;
  bio?: { value: string } | string;
}
