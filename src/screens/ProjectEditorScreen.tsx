import {ScrollView, StyleSheet, Platform, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Header from '../components/Header';
import StyledText from '../components/StyledText';
import MyTextInput from '../components/TextField';
import MyButton from '../components/Button';
import DatePicker from '../components/datepicker';
import SnackBar from '../components/SnackBar';
import AppSafeAreaView from '../components/AppSafeAreaView';
import {useTodos} from '../hooks/useTodos';
var moment = require('moment-jalaali');

interface Props {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any, any>;
}

export default function ProjectEditorScreen({route, navigation}: Props) {
  const projectId = route.params?.projectId;
  const {items, editProject, createProject} = useTodos();
  const project = items.find(el => el.id === projectId);

  const [name, setName] = useState(project?.name ?? '');
  const [description, setDescription] = useState(project?.description ?? '');
  const [date, setDate] = useState(
    project?.datetime ??
      moment(new Date()).format('jYYYY/jMM/jDD HH:mm'),
  );
  const [isSnackBarShown, setIsSnackBarShown] = useState(false);

  function handleButtonPress() {
    if (!name) {
      setIsSnackBarShown(true);
      setTimeout(() => {
        setIsSnackBarShown(false);
      }, 2500);

      return;
    }
    if (!projectId) {
      const newProject = {
        name,
        description,
        datetime: date,
        completed: false,
        id: Math.random(),
        tasks: [],
      };
      createProject(newProject);
      navigation.goBack();

      return;
    }
    const newData = {
      name,
      description,
      datetime: date,
    };
    editProject(project?.id, newData);
    navigation.goBack();
  }

  return (
    <>
      <AppSafeAreaView>
        <Header navigation={navigation}>
          <StyledText weight="semiBold">
            {projectId ? 'ویرایش' : 'افزودن'}
          </StyledText>
        </Header>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.titleInputContainer}>
            <View>
              <StyledText>تیتر</StyledText>
              <MyTextInput value={name} setValue={setName} />
            </View>
            <View style={styles.descriptionInputContainer}>
              <StyledText>توضیح</StyledText>
              <MyTextInput
                multiline={true}
                value={description}
                setValue={setDescription}
              />
            </View>
            <View style={styles.datetimeButtonsContainer}>
              <DatePicker
                style={{backgroundColor: '#212121'}}
                selectTimeDropdownIconColor={'white'}
                eachMonthTextStyle={{color: 'white'}}
                eachYearTextStyle={{color: 'white'}}
                selectTimePickerItemStyle={{
                  color: 'white',
                  backgroundColor: '#212121',
                }}
                datePickerDismissIconColor={'white'}
                yearMonthTextStyle={{color: 'white'}}
                isShowSelectTime={true}
                datePickerModalStyle={{backgroundColor: '#212121'}}
                dayTextColor={'#fff'}
                showMonthLabel={true}
                selectTimePickerMode={'dialog'}
                onChange={selected => {
                  setDate(selected);
                }}
              />
            </View>

            <StyledText textStyles={styles.dateString} weight="semiBold">
              {`${date}`}
            </StyledText>
            <MyButton
              accent
              onPress={handleButtonPress}
              containerStyles={styles.editProjectButton}>
              {projectId ? 'ویرایش' : 'افزودن'}
            </MyButton>
          </View>
        </ScrollView>
      </AppSafeAreaView>
      <SnackBar message="تیتر را وارد کنید" isShown={isSnackBarShown} />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  descriptionInputContainer: {
    marginTop: 20,
  },
  datetimeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  dateString: {
    marginTop: 20,
    alignSelf: 'center',
  },
  editProjectButton: {
    marginTop: 20,
  },
  titleInputContainer: {
    marginBottom: 10,
  },
});
