export interface BlogContent {
  subtitle: string;
  quote: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const BLOG_CONTENTS: Record<string, BlogContent> = {};
