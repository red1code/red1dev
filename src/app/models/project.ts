export interface Project {
  id: string;
  title: string;
  description: string;
  itemImg: string;
  mockupImg: string;
  skillsImgs: string[];
  previewHref: string;
  sourceCodeHref: string;
  isFavorite: boolean;
  type: ProjectType;
};

export type ProjectType = 'Web App' | 'Website' | 'Game';
