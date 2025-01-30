export interface IProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  releaseData: {
    isPublished: boolean;
    releaseDate: string;
    urls: {
      github?: string;
      demo?: string;
      appstore?: string;
      playstore?: string;
    };
  };
}
