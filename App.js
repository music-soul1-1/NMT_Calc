import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font'



export default function App() {
  

  const [math_result, setMathResult] = useState('0');
  const [mova_result, setMovaResult] = useState('0');
  const [hist_result, setHistResult] = useState('0');
  var [math_200_result, setMath200] = useState('0');
  var [mova_200_result, setMova200] = useState('0');
  var [hist_200_result, setMova200] = useState('0');
  if (math_result > 30) {
    math_200_result = 'Брехун!'
  }
  else if (math_result == 30) {
    math_200_result = '200'
  }
  else if (math_result == 29) {
    math_200_result = '192'
  }
  else if (math_result == 28) {
    math_200_result = '185'
  }
  else if (math_result == 27) {
    math_200_result = '180'
  }
  else if (math_result == 26) {
    math_200_result = '176'
  }
  else if (math_result == 25) {
    math_200_result = '172'
  }
  else if (math_result == 24) {
    math_200_result = '168'
  }
  else if (math_result == 23) {
    math_200_result = '165'
  }
  else if (math_result == 22) {
    math_200_result = '162'
  }
  else if (math_result == 21) {
    math_200_result = '159'
  }
  else if (math_result == 20) {
    math_200_result = '156'
  }
  else if (math_result == 19) {
    math_200_result = '154'
  }
  else if (math_result == 18) {
    math_200_result = '152'
  }
  else if (math_result == 17) {
    math_200_result = '151'
  }
  else if (math_result == 16) {
    math_200_result = '150'
  }
  else if (math_result == 15) {
    math_200_result = '149'
  }
  else if (math_result == 14) {
    math_200_result = '148'
  }
  else if (math_result == 13) {
    math_200_result = '146'
  }
  else if (math_result == 12) {
    math_200_result = '144'
  }
  else if (math_result == 11) {
    math_200_result = '142'
  }
  else if (math_result == 10) {
    math_200_result = '140'
  }
  else if (math_result == 9) {
    math_200_result = '138'
  }
  else if (math_result == 8) {
    math_200_result = '136'
  }
  else if (math_result == 7) {
    math_200_result = '134'
  }
  else if (math_result == 6) {
    math_200_result = '131'
  }
  else if (math_result == 5) {
    math_200_result = '128'
  }
  else if (math_result == 4) {
    math_200_result = '125'
  }
  else if (math_result == 3) {
    math_200_result = '118'
  }
  else if (math_result == 2) {
    math_200_result = '110'
  }
  else if (math_result == 1) {
    math_200_result = '100'
  }
  else if (math_result == 0) {
    math_200_result = '0'
  }

  // mova:

  if (mova_result > 35) {
    mova_200_result = 'Брехун!'
  }
  else if (mova_result == 35) {
    mova_200_result = '200'
  }
  else if (mova_result == 34) {
    mova_200_result = '194'
  }
  else if (mova_result == 33) {
    mova_200_result = '190'
  }
  else if (mova_result == 32) {
    mova_200_result = '187'
  }
  else if (mova_result == 31) {
    mova_200_result = '184'
  }
  else if (mova_result == 30) {
    mova_200_result = '182'
  }
  else if (mova_result == 29) {
    mova_200_result = '180'
  }
  else if (mova_result == 28) {
    mova_200_result = '177'
  }
  else if (mova_result == 27) {
    mova_200_result = '174'
  }
  else if (mova_result == 26) {
    mova_200_result = '172'
  }
  else if (mova_result == 25) {
    mova_200_result = '169'
  }
  else if (mova_result == 24) {
    mova_200_result = '166'
  }
  else if (mova_result == 23) {
    mova_200_result = '163'
  }
  else if (mova_result == 22) {
    mova_200_result = '160'
  }
  else if (mova_result == 21) {
    mova_200_result = '157'
  }
  else if (mova_result == 20) {
    mova_200_result = '154'
  }
  else if (mova_result == 19) {
    mova_200_result = '151'
  }
  else if (mova_result == 18) {
    mova_200_result = '149'
  }
  else if (mova_result == 17) {
    mova_200_result = '147'
  }
  else if (mova_result == 16) {
    mova_200_result = '145'
  }
  else if (mova_result == 15) {
    mova_200_result = '143'
  }
  else if (mova_result == 14) {
    mova_200_result = '142'
  }
  else if (mova_result == 13) {
    mova_200_result = '140'
  }
  else if (mova_result == 12) {
    mova_200_result = '139'
  }
  else if (mova_result == 11) {
    mova_200_result = '137'
  }
  else if (mova_result == 10) {
    mova_200_result = '135'
  }
  else if (mova_result == 9) {
    mova_200_result = '133'
  }
  else if (mova_result == 8) {
    mova_200_result = '131'
  }
  else if (mova_result == 7) {
    mova_200_result = '129'
  }
  else if (mova_result == 6) {
    mova_200_result = '127'
  }
  else if (mova_result == 5) {
    mova_200_result = '125'
  }
  else if (mova_result == 4) {
    mova_200_result = '119'
  }
  else if (mova_result == 3) {
    mova_200_result = '113'
  }
  else if (mova_result == 2) {
    mova_200_result = '107'
  }
  else if (mova_result == 1) {
    mova_200_result = '100'
  }
  else if (mova_result == 0) {
    mova_200_result = '0'
  }

  // history

  if (hist_result > 35) {
    hist_200_result = 'Брехун!'
  }
  else if (hist_result == 35) {
    hist_200_result = '200'
  }
  else if (hist_result == 34) {
    hist_200_result = '192'
  }
  else if (hist_result == 33) {
    hist_200_result = '186'
  }
  else if (hist_result == 32) {
    hist_200_result = '180'
  }
  else if (hist_result == 31) {
    hist_200_result = '176'
  }
  else if (hist_result == 30) {
    hist_200_result = '173'
  }
  else if (hist_result == 29) {
    hist_200_result = '170'
  }
  else if (hist_result == 28) {
    hist_200_result = '167'
  }
  else if (hist_result == 27) {
    hist_200_result = '164'
  }
  else if (hist_result == 26) {
    hist_200_result = '162'
  }
  else if (hist_result == 25) {
    hist_200_result = '160'
  }
  else if (hist_result == 24) {
    hist_200_result = '158'
  }
  else if (hist_result == 23) {
    hist_200_result = '156'
  }
  else if (hist_result == 22) {
    hist_200_result = '154'
  }
  else if (hist_result == 21) {
    hist_200_result = '153'
  }
  else if (hist_result == 20) {
    hist_200_result = '152'
  }
  else if (hist_result == 19) {
    hist_200_result = '151'
  }
  else if (hist_result == 18) {
    hist_200_result = '150'
  }
  else if (hist_result == 17) {
    hist_200_result = '149'
  }
  else if (hist_result == 16) {
    hist_200_result = '148'
  }
  else if (hist_result == 15) {
    hist_200_result = '147'
  }
  else if (hist_result == 14) {
    hist_200_result = '146'
  }
  else if (hist_result == 13) {
    hist_200_result = '144'
  }
  else if (hist_result == 12) {
    hist_200_result = '142'
  }
  else if (hist_result == 11) {
    hist_200_result = '140'
  }
  else if (hist_result == 10) {
    hist_200_result = '138'
  }
  else if (hist_result == 9) {
    hist_200_result = '136'
  }
  else if (hist_result == 8) {
    hist_200_result = '134'
  }
  else if (hist_result == 7) {
    hist_200_result = '131'
  }
  else if (hist_result == 6) {
    hist_200_result = '128'
  }
  else if (hist_result == 5) {
    hist_200_result = '125'
  }
  else if (hist_result == 4) {
    hist_200_result = '119'
  }
  else if (hist_result == 3) {
    hist_200_result = '113'
  }
  else if (hist_result == 2) {
    hist_200_result = '107'
  }
  else if (hist_result == 1) {
    hist_200_result = '100'
  }
  else if (hist_result == 0) {
    hist_200_result = '0'
  }



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
                    <Text style={styles.result}>{mova_200_result}</Text>

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
                <Text style={styles.result}>{math_200_result}</Text>
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
                    <Text style={styles.result}>{hist_200_result}</Text>
            </View>

          <View style={{flex: 1, alignItems: 'flex-end',}}>
            <Text style={{color: '#ffffff', fontSize: 12, fontFamily: 'e-Ukraine-Light', marginTop: 80, flex: 0}}>
                v.0.0.2
            </Text>
          </View>
          
      <StatusBar style="auto" />
    </View>
  );
}
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
  }
});
