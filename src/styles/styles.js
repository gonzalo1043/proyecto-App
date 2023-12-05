import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  container: {
    flex:1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 40,
    paddingTop: 20,
    backgroundColor: 'rgba(132, 126, 132, 1)'
  },
  inputAndButtonContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    width: "100%",
    justifyContent: "center"
  },

  inputContainer: {
    flexDirection: 'row',
    gap: 10
  },
  buttonContainer: {
    backgroundColor: 'rgba(175, 158, 5, 1)',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 10
  },

  input: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderColor: 'rgba(175, 158, 5, 1)',
    backgroundColor: 'rgba(103, 98, 103, 1)'
  },
  itemsContainer: {
    width: "100%",
    marginTop: 20
  },
  cardProduct: {
    flexDirection: "row",
    padding: 10,
    margin: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'red'
  }, 
  cardTitle: {
    fontSize: 18
  },
  ModalPrincipalContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  modalContainer: {
    width: '80%',
    borderWidth: 1,
    padding: 25,
    gap: 10
  }, 
  ModalText: {
    textAlign: "center",
  },


  cardTaskComplete: {
    backgroundColor: 'green',
    flexDirection: "row",
    padding: 10,
    margin: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },

});
