import { useEffect, useState } from 'react';
import { debounceTime } from 'rxjs/operators';
import { observeGunMany } from '../gun';
import { Article } from '../models';

export function useArticlesList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const subscription = observeGunMany('rss')
      .pipe(debounceTime(500))
      .subscribe(_articles => {
        _articles = _articles.filter(Boolean);
        _articles.sort((a, b) => b.isoDate.localeCompare(a.isoDate));
        setArticles(_articles);
      });

    return () => subscription.unsubscribe();
  }, []);

  return articles;
}
