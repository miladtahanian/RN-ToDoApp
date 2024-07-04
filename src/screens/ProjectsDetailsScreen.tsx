import {StyleSheet, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {colors} from '../theme/colors';
import Header from '../components/Header';
import StyledText from '../components/StyledText';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import TaskListTile from '../components/TaskListTile';
import AddTaskPopup from '../components/AddTaskPopup';
import {PencilSquareIcon, TrashIcon} from 'react-native-heroicons/outline';
import AppSafeAreaView from '../components/AppSafeAreaView';
import {useTodos} from '../hooks/useTodos';
import {useTheme} from '../hooks/useTheme';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import {AnimatedScrollView} from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';

interface Props {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any, any>;
}

export default function ProjectsDetailsScreen({route, navigation}: Props) {
  const [addTaskPopupVisible, setAddTaskPopupVisible] = useState(false);

  const {items, toggleProjectCompletion, deleteProject} = useTodos();
  const colorPalette = useTheme();

  const projectId = route.params?.projectId;
  const project = projectId ? items.find(el => el.id === projectId) : null;

  const scrollViewRef = useAnimatedRef<AnimatedScrollView>();
  const scrollOfset = useScrollViewOffset(scrollViewRef);

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOfset.value, [0, 60], [0, 1]),
    };
  });

  return (
    <>
      <AppSafeAreaView>
        {project ? (
          <>
            <Header
              navigation={navigation}
              trailing={
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: 'ProjectEditorScreen',
                      params: {
                        projectId: project.id,
                      },
                    });
                  }}>
                  <PencilSquareIcon color={colorPalette.text} strokeWidth={2} />
                </Pressable>
              }>
              <Animated.View style={titleStyle}>
                <StyledText weight="semiBold">{project.name}</StyledText>
              </Animated.View>
            </Header>
            <Animated.ScrollView
              ref={scrollViewRef}
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}>
              <StyledText textStyles={styles.title}>{project.name}</StyledText>

              {project.description && (
                <StyledText>{project.description}</StyledText>
              )}

              <StyledText textStyles={styles.dateText} weight="semiBold">
                تاریخ: {`${project.datetime}`}
              </StyledText>

              <View style={styles.completedCheckBoxContainer}>
                <StyledText weight="semiBold">کامل شده</StyledText>
                <Checkbox
                  value={project.completed}
                  onChanged={() => toggleProjectCompletion(project.id)}
                />
              </View>

              <Button
                containerStyles={styles.deleteButton}
                accent
                onPress={() => {
                  deleteProject(project.id);
                  navigation.goBack();
                }}>
                  <TrashIcon color={colors.white} strokeWidth={2} size={30}  />
                  حذف
              </Button>

              <View style={styles.showingTasksElementContainer}>
                <View style={styles.tasksContainer}>
                  <StyledText textStyles={styles.tasksText} weight="semiBold">
                    لیست کار ها:
                  </StyledText>
                  <Button
                    onPress={() => setAddTaskPopupVisible(true)}
                    containerStyles={styles.addTaskButton}>
                    افزودن کار
                  </Button>
                </View>

                {project.tasks.length > 0 ? (
                  project.tasks.map(item => (
                    <TaskListTile task={item} key={item.id} project={project} />
                  ))
                ) : (
                  <StyledText>
                    کاری وجود نداره! برای اضافه کردن 'افزودن کار' رو بزن
                  </StyledText>
                )}
              </View>
            </Animated.ScrollView>
          </>
        ) : (
          <View style={styles.errorBoxContainer}>
            <View
              style={[styles.errorBox, {backgroundColor: colorPalette.accent}]}>
              <StyledText textStyles={{color: colors.white}}>
                خطایی رخ داد
              </StyledText>
            </View>
          </View>
        )}
      </AppSafeAreaView>

      {addTaskPopupVisible && project && (
        <AddTaskPopup
          setPopupOpen={setAddTaskPopupVisible}
          projectId={project.id}
        />
      )}
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
  title: {fontSize: 44},
  dateText: {
    marginTop: 10,
  },
  completedCheckBoxContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  deleteButton: {
    marginTop: 20,
    backgroundColor:'#b72126'
  },
  showingTasksElementContainer: {
    marginTop: 30,
  },
  tasksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tasksText: {fontSize: 30},
  addTaskButton: {
    padding: 5,
  },
  errorBoxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBox: {
    width: '85%',
    height: '20%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
