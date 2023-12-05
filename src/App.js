import { useState } from 'react';
import { View } from 'react-native';
import uuid from 'react-native-uuid'
import { styles } from './styles/styles.js';
import ModalDelete from './components/Modal/ModalDelete.js';
import ModalSuccesfulDelete from './components/Modal/ModalSuccessfulDelete.js';
import AddTasks from './components/AddTasks.js';
import ListTasks from './components/ListTasks/index.js';

export default function App() {

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [taskTime, setTaskTime] = useState('')
  const [tasks, setTasks] = useState([])
  const [modalVisible, setModalVisible] = useState (false)
  const [taskSelected, setTaskSelected] = useState({})
  const [modalVisibleSuccessfulDelete, setModalVisibleSuccessfulDelete] = useState (false)
  const [taskComplete, setTaskComplete] = useState(false)

const handleAddTask = () => {
  const newTask = {
    id: uuid.v4(),
    title: newTaskTitle, 
    price: taskTime}
  setTasks(current => [...current, newTask ])
  setNewTaskTitle('')
  setTaskTime('')
  console.log(tasks)
}

const handlerModal = (item) => {
  setTaskSelected(item)
  setModalVisible(true)
}

const handlerDeleteTask = () => {
  setTasks(current => current.filter(task => task.id !== taskSelected.id))
  setModalVisible(false)
  setModalVisibleSuccessfulDelete(true)
}

const handlerTaskComplete = (item) => {
  setTaskComplete(true)
  console.log(taskComplete)
}

const handlerTaskIncomplete = () => {
  setTaskComplete(false)
  console.log(taskComplete)
}

  return (
    <View style= {styles.principalContainer}>
<View style={styles.container}>

<AddTasks
title = {newTaskTitle}
onChangeTitle= {setNewTaskTitle} 
time= {taskTime}
onChangeTime = {setTaskTime}
onAddTask = {handleAddTask}
/>

<ListTasks
tasks={tasks}
onModal={handlerModal}
onTaskComplete = {handlerTaskComplete}
taskComplete = {taskComplete}
onTaskIncomplete = {handlerTaskIncomplete}
/>

  <ModalDelete
  visible={modalVisible}
  task={taskSelected}
  onDelete={handlerDeleteTask}
  onChangeVisible={setModalVisible}
  />

  <ModalSuccesfulDelete
  visibleSuccessfulDelete={modalVisibleSuccessfulDelete}
  onChangeVisibleSuccessfulDelete={setModalVisibleSuccessfulDelete}
  />

</View>
    </View>
    
  );
}


