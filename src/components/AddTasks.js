import { View, TextInput, Button } from "react-native"
import { styles } from "../styles/styles"

const AddTasks = ({title, onChangeTitle, time, onChangeTime, onAddTask}) => {

    return <View style= {styles.inputAndButtonContainer}>
    <View style={styles.inputContainer}>
    <TextInput
    style={styles.input}
    placeholder='Tarea'
    value={title}
    onChangeText={(t) => onChangeTitle(t)}
    />

    <TextInput
    style={styles.input}
    placeholder='Hora'
    value={time}
    onChangeText={(t) => onChangeTime(t)}
    />
    </View>
    <View style= {styles.buttonContainer}>
          <Button title='ADD' onPress={onAddTask}/>

    </View>
    </View>
  
}

export default AddTasks