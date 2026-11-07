import {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// Modal documentaatio vaikutti tarjoavan aika lailla toimivan modaalinapin?
// Kommentoin ja muokkasom kuitenkin koodia että voin myöhemmin viitata näihin tarvittaessa + että oppii jotain 
const App = () => {

  // Modaalin tilamuuttuja, false kun modaali on piilossa, true kun se halutaan näkyviin
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <SafeAreaProvider> {/*SULJE LOPUSSA */}
      <SafeAreaView style={styles.centeredView}> 
        
        {/* Modal näkymän koodi*/}
          <Modal
          // Modaalin aukeamis animaatio mikä lie, löytyy mm. slide, fade, none 
          animationType="fade" 
          
          // true = tausta on läpinäkyvä, muulloin backdropColor vaihtaa taustan väriä
          transparent={true} 

          // Modaalin tilamuuttuja
          visible={modalVisible} 

          // Muuttaa tilamuuttujan arvon takaisin falseen kun "Hide modal" nappia painetaan
          // Huom, Alert näkyy vain kun puhelimen back-nappia painetaan (pelkästään Androidilla? Ainakin viikkotehtävän pdf:n mukaan)
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}> 

          {/* Container */}
          <View style={styles.centeredView}>
            {/* Sisältää tekstin ja kaiken muun sisällön*/}
            <View style={styles.modalView}>

              {/* Teksti + tekstin tyyli */}
              <Text style={styles.modalText}>This is a modal...!!!</Text>

              {/* Close nappi, muuttaa tilamuuttujan tilan takaisin Falseksi kun nappia painetaan (huom. Text Pressablen sisällä) */}
              <Pressable
                style={[styles.modalTextClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalTextClose}>Close</Text>
              </Pressable>

            </View> {/* Modaalinäkymän sisältöön liittyvä koodi suljetaan tässä */}
          </View> {/* View containerin sisällön koodi suljetaan tässä */}
        </Modal> {/* Modal suljetaan tässä */}
        
      {/* Pressable on komponentti joka seuraa painalluksia, tässä se muuttaa modaalin tilamuuttujan true:ksi kun sitä painetaan*/}
      {/* Teksti sai Modal dokumentaatiossa napin ulkonäön button stylesheetin kautta, säilytin tässä ns. tekstin ulkonäön jotta se vastaa tehtävänantoa */}
        <Pressable
          style={[styles.modalTextOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.modalTextOpen}>Show Modal Message...</Text>
        </Pressable>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// centeredView ja modalView peräisin Modal dokumentaatiosta, mm. centeraa tekstin, lisää padding jne.
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#a6edff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  // Muut Modal dokumentaation stylesheet hommelit joita en käyttänyt
  /*
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  */

  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 20,
    padding: 35,
  },

  modalTextOpen: {
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalTextClose: {
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;