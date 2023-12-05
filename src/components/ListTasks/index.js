import { View, FlatList, Text, Button } from "react-native"
import { styles } from "../../styles/styles"
import CardTasks from "./CardTasks"

const ListTasks = ({tasks, onModal, onTaskComplete, taskComplete, onTaskIncomplete, taskColor}) => {
    return <View style= {styles.itemsContainer}>
    <FlatList
    data= {tasks}
    keyExtractor={item => item.id}
    renderItem={({item}) => <CardTasks 
                            item={item}
                            onModal={onModal}
                            onTaskComplete= {onTaskComplete}
                            taskComplete = {taskComplete}
                            onTaskIncomplete = {onTaskIncomplete}
                            
                            />
    }
    />
    </View>
}

export default ListTasks