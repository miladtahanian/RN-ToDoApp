import {
  View,
  ScrollView,
  StyleSheet,
  I18nManager,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import MyTextInput from '../components/TextField';
import ListTile from '../components/ProjectListTile';
import FloatingActionButton from '../components/FloatingActionButton';
import AppSafeAreaView from '../components/AppSafeAreaView';
import {useTodos} from '../hooks/useTodos';
import Header from '../components/Header';
import StyledText from '../components/StyledText';
import RNRestart from 'react-native-restart';

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function HomeScreen({navigation}: Props) {
  const [search, setSearch] = useState('');
  const {items} = useTodos();
  const RTL = I18nManager.isRTL;
  useEffect(() => {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    if (!I18nManager.isRTL) {
      ToastAndroid.show('در حال راه اندازی اولیه نرم افزار تودو', 1500);
      RNRestart.Restart();
    }
  }, [RTL]);

  return (
    <AppSafeAreaView>
      <Header navigation={navigation} leading="showDrawer">
        <StyledText weight="semiBold">تودو - لیست کار های روزانه</StyledText>
      </Header>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <MyTextInput placeholder="جستجو" value={search} setValue={setSearch} />

        <View style={styles.projectsListContainer}>
          {items
            .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
            .map(item => (
              <ListTile key={item.id} project={item} navigation={navigation} />
            ))}
        </View>
      </ScrollView>
      <FloatingActionButton navigation={navigation} />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 70},
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  projectsListContainer: {
    marginTop: 30,
  },
});
