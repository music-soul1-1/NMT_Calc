import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';


export default function App() {

  const [mathResult, setMathResult] = useState('0');
  const [movaResult, setMovaResult] = useState('0');
  const [historyResult, setHistResult] = useState('0');

  var [math200Result, setMath200] = useState('0');
  var [mova200Result, setMova200] = useState('0');
  var [history200Result, setMova200] = useState('0');
  // Mova table
  var arrayMova = [
    0, 100, 107, 113, 
    119, 125, 127, 129, 
    131, 133, 135, 137, 
    139, 140, 142, 143, 
    145, 147, 149, 151, 
    154, 157, 160, 163, 
    166, 169, 172, 174, 
    177, 180, 182, 184, 
    187, 190, 194, 200
  ];
  // Math table
  var arrayMath = [
    0, 100, 110, 118,
    125, 128, 131, 134,
    136, 138, 140, 142,
    144, 146, 148, 149,
    150, 151, 152, 154,
    156, 159, 162, 165,
    168, 172, 176, 180,
    185, 192, 200
  ];
  // History table
  var arrayHistory = [
    0, 100, 107, 113,
    119, 125, 128, 131,
    134, 136, 138, 140,
    142, 144, 146, 147,
    148, 149, 150, 151,
    152, 153, 154, 156,
    158, 160, 162, 164,
    167, 170, 173, 176,
    180, 186, 192, 200
  ];


  // MOVA
  if (movaResult > 35) {
    mova200Result = "Брешеш.";
  }
  else {
    mova200Result = arrayMova[movaResult];
  }

  // MATH
  if (mathResult > 30) {
    math200Result = "Брешеш.";
  }
  else {
    math200Result = arrayMath[mathResult];
  }
  
  // HISTORY
  if (historyResult > 35) {
    history200Result = "Брешеш.";
  }
  else {
    history200Result = arrayHistory[historyResult];
  }


  // font load check
  let [fontsLoaded] = useFonts({
    'e-Ukraine': require('./assets/fonts/e-Ukraine-Regular.ttf'),
    'e-Ukraine-Head': require('./assets/fonts/e-UkraineHead-Regular.ttf'),
    'e-Ukraine-Head-Bold': require('./assets/fonts/e-UkraineHead-Bold.ttf'),
    'e-Ukraine-Head-Light': require('./assets/fonts/e-UkraineHead-Light.ttf'),
    'e-Ukraine-Light': require('./assets/fonts/e-Ukraine-Light.ttf')
  })
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Калькулятор результатів НМТ</Text>
            <View style={styles.box}>
                    <TextInput 
                        placeholderTextColor={'#A68FCB'}
                        textAlign='center' 
                        style={styles.input}
                        maxLength={2}
                        placeholder={"Введіть ваш результат НМТ з мови"}
                        keyboardType={'number-pad'}
                        onChangeText={(val) => setMovaResult(val)}
                    />
                    <Text style={styles.text}>
                    Ваш результат з мови у 200-бальній системі:
                    </Text>
                    <Text style={styles.result}>{mova200Result}</Text>

            </View>
            <View style={styles.box}>
                <TextInput 
                placeholderTextColor={'#A68FCB'}
                textAlign='center'
                maxLength={2}
                placeholder={"Введіть ваш результат НМТ з математики"}
                keyboardType={'number-pad'}
                onChangeText={(val) => setMathResult(val)}
                style={styles.input}
                />
                <Text style={styles.text}>
                    Ваш результат з математики у 200-бальній системі:</Text>
                <Text style={styles.result}>{math200Result}</Text>
            </View>

            <View style={styles.box}>
                <TextInput 
                    placeholderTextColor={'#A68FCB'}
                    textAlign='center' 
                    style={styles.input}
                    maxLength={2}
                    placeholder={"Введіть ваш результат НМТ з історії"}
                    keyboardType={'number-pad'}
                    onChangeText={(val) => setHistResult(val)}
                    />
                    <Text style={styles.text}>
                    Ваш результат з історії у 200-бальній системі:
                    </Text>
                    <Text style={styles.result}>{history200Result}</Text>
            </View>

          <View style={{flex: 1, alignItems: 'flex-end',}}>
            <Text style={styles.version}>
                v.0.0.3
            </Text>
            <Text style={styles.year}>
                2022
            </Text>
          </View>
          
      <StatusBar style="auto" />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#352647',
    alignItems: 'center',
    fontFamily: 'e-Ukraine-Light'
   
  },
  header: {
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {width: -1, height: 3.5},
    textShadowRadius: 20,
    marginTop: 80,
    marginBottom: 50,
    fontSize: 18,
    fontFamily: 'e-Ukraine-Head'
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: 300, 
    height: 50, 
    borderRadius: 14,
    borderColor: '#6360FF',
    borderWidth: 1,
    backgroundColor: '#7B1ADB',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
    
  },
  result: {
    color: '#9123FF', 
    fontSize: 20, 
    fontFamily: 'e-Ukraine-Light',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 25,
  },
  box: {
    marginVertical: 10,
    width: 370,
    alignItems: 'center',
    backgroundColor: '#302C4E',
    borderRadius: 21,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 20,
    color: '#ffffff', 
    fontSize: 14, 
    fontFamily: 'e-Ukraine-Light'
  },
  version: {
    color: '#ffffff', 
    fontSize: 12, 
    fontFamily: 'e-Ukraine-Light', 
    alignSelf: "center",
    marginTop: 70, 
    flex: 0
  },
  year: {
    color: '#ffffff', 
    fontSize: 12, 
    fontFamily: 'e-Ukraine-Light', 
    alignSelf: "center",
    marginTop: 5, 
    flex: 0
  }

});
