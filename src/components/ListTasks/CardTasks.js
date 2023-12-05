import { View, Text, Button } from "react-native"
import { styles } from "../../styles/styles"

const CardTasks = ({onModal, item, onTaskComplete, taskComplete,onTaskIncomplete}) => {
    return <View style= {!taskComplete ? styles.cardProduct : styles.cardTaskComplete}>
    <Text style= {styles.cardTitle}>{item.title}</Text>
    <Text>{item.price}</Text>
    {!taskComplete ? <Button title= 'COMPLETADO' onPress={() => onTaskComplete()} /> : <Button title= 'DESMARCAR' onPress={() => onTaskIncomplete()} /> }
    <Button title= 'BORRAR' onPress={() => onModal(item)} />
      </View>
}

export default CardTasks