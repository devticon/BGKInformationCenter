import { useEffect, useState } from 'react';
import { observeGunMany } from '../gun';
import { Article } from '../models';

export function useArticlesList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const subscription = observeGunMany('rss').subscribe(_articles => {
      _articles = _articles.filter(a => a?.isoDate);
      _articles.sort((a, b) => b.isoDate.localeCompare(a.isoDate));
      setArticles(_articles);
    });

    return () => subscription.unsubscribe();
  }, []);

  return articles;
}
