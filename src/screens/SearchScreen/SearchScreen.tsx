import { Button, LoginRequired, Text } from '@components';
import { flexRow, padding } from '@theme';
import React, { FC, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { useAuthContext } from '../../contexts';
import { search } from '../../gun-search';
import SiteRow from '../ListsScreen/SiteRow/SiteRow';
import UserRow from '../ListsScreen/UserRow/UserRow';
import ArticleRow from '../NewsListScreen/ArticleRow/ArticleRow';
import { styles } from './SearchScreen.styles';

const SearchScreen: FC = () => {
  const { isAuthenticated, userId } = useAuthContext();
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  const [dirty, setDirty] = useState(false);

  const handleSearch = () => {
    search(userId, value).then(_items => {
      setItems(_items);
      setDirty(true);
    });
  };

  if (!isAuthenticated) {
    return <LoginRequired text="Do korzystania z wyszukiwarki wymagane jest zalogowanie się" />;
  }

  return (
    <>
      <View style={[flexRow, padding.large.all]}>
        <TextInput
          placeholder="Wpisz szukaną frazę..."
          style={styles.input}
          value={value}
          onChangeText={v => setValue(v)}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
        <Button style={styles.button} text="Szukaj" onPress={handleSearch} />
      </View>
      <FlatList
        data={items}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id}
        ListEmptyComponent={dirty ? <Text style={{ textAlign: 'center' }}>Brak wyników wyszukiwania.</Text> : null}
        renderItem={({ item }) => {
          if (item.type === 'rss') {
            return <ArticleRow article={item} />;
          } else if (item.type === 'user') {
            return <UserRow user={item} />;
          } else if (item.type === 'site') {
            return <SiteRow site={item} />;
          } else {
            return null;
          }
        }}
      />
    </>
  );
};

export default SearchScreen;
