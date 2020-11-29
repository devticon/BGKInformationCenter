import { gun } from './gun';

function getOnce(path) {
  return new Promise(resolve =>
    gun.get(path).once(data => {
      resolve(data);
    }),
  );
}

async function getMany(path) {
  const list = await getOnce(path);
  if (!list) {
    return [];
  }
  const many = await Promise.all(
    Object.keys(list)
      .filter(key => list[key])
      .filter(key => key !== '_')
      .map(key => {
        return getOnce(list[key]['#']);
      }),
  );
  return many.filter(item => item !== null);
}

export async function search(rootId, query) {
  query = query.toLowerCase();
  return Promise.all([
    getMany(`${rootId}/users`).then(users =>
      users
        .filter(Boolean)
        .filter(i => i.displayName.toLowerCase().includes(query.toLowerCase()))
        .map(i => ({ ...i, id: i.id, name: i.displayName, path: i._['#'], type: 'user' })),
    ),
    getMany(`${rootId}/sites`).then(sites =>
      sites
        .filter(Boolean)
        .filter(i => i.displayName.toLowerCase().includes(query.toLowerCase()))
        .map(i => ({
          ...i,
          id: i.id,
          name: i.displayName,
          path: i._['#'],
          type: 'site',
          link: i.webUrl,
        })),
    ),
    getMany(`rss`).then(rss =>
      rss
        .filter(Boolean)
        .filter(
          i =>
            i.title.toLowerCase().includes(query) ||
            (i.contentSnippet && i.contentSnippet.toLowerCase().includes(query)) ||
            (i.content && i.content.toLowerCase().includes(query)),
        )
        .map(i => ({
          ...i,
          id: i.id,
          title: i.title,
          path: i._['#'],
          type: 'rss',
          link: i.link,
        })),
    ),
  ]).then(matches => [].concat.apply([], matches));
}
