import { useEffect, useState } from 'react';
import { watchMany } from '../gun';
import { Article } from '../models';

export function useArticlesList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    watchMany('rss', _articles => {
      setArticles(_articles.filter(Boolean));
    });
  }, []);

  return articles;
}
