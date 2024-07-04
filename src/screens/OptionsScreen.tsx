import React from 'react';
import Header from '../components/Header';
import {NavigationProp} from '@react-navigation/native';
import AppSafeAreaView from '../components/AppSafeAreaView';
import StyledText from '../components/StyledText';
import {Dimensions, Text, View} from 'react-native';

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function OptionsScreen({navigation}: Props) {
  return (
    <AppSafeAreaView>
      <Header navigation={navigation} leading="showDrawer">
        <StyledText weight="semiBold">تنظیمات</StyledText>
      </Header>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '90%',
          padding:20
        }}>
                    <Text style={{textAlign:"center",fontWeight:"bold",fontSize:30}}>
          تودو
          </Text>
          <Text style={{textAlign:"center",fontSize:20}}>
          به معنای لیستی از وظایف و کارهایی است که یک فرد در یک بازه زمانی مشخص می‌خواهد انجام دهد. این لیست معمولاً به ترتیب اولویت و زمانبندی تنظیم می‌شود و به شخص کمک می‌کند تا برنامه‌ریزی دقیق‌تری داشته باشد.
          </Text>
          <Text style={{textAlign:"center",fontSize:20}}>
          با استفاده از تودو، می‌توانید به بهبود کیفیت کارهای خود، افزایش بهره‌وری و کاهش استرس دست یابید.
          </Text>
          <Text />
        <Text>درباره نرم افزار تودو - لیست کار های روزانه</Text>
        <Text>نسخه 1.0</Text>
        <Text />
        <Text>طراحی و توسعه</Text>
        <Text>میلاد طحانیان</Text>
      </View>
    </AppSafeAreaView>
  );
}
