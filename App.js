import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      peso: 0,
      altura: 0,
      resultado: 0
    }
    this.calcularIMC = this.calcularIMC.bind(this)
  }

  calcularIMC()
  {
    let calculo = this.state.peso / (this.state.altura * 2)
    let imc = this.state
    imc.resultado = calculo

    if (imc.resultado < 18.5)
    {
      Alert.alert("Resultado:", "Abaixo do peso!")
    }
    else if (imc.resultado < 25)
    {
      Alert.alert("Resultado:", "Saudável")
    }
    else if (imc.resultado < 30)
    {
      Alert.alert("Resultado:", "Sobrepeso")
    }
    else if(imc.resultado < 35)
    {
      Alert.alert("Resultado:", "Obesidade 1º Grau")
    }
    else if(imc.resultado < 40)
    {
      Alert.alert("Resultado:", "Obesidade 2º Grau")
    }
    else
    {
      Alert.alert("Resultado:", "Obesidade: 3º Grau")
    }

    this.setState(imc)
  }

  render(){
    return (
      <>
        <View style={styles.conteudo}>
          <View style={styles.cabecalho}>
            <Text style={styles.textoPrincipal}>
              Cálculo de IMC
            </Text>
          </View>
          <View style={styles.form}>
            <TextInput placeholder="Peso (Ex: 60)" keyboardType="numeric" style={styles.input} onChangeText={(peso) => this.setState({peso})} />
            <TextInput placeholder="Altura (Ex: 1.80)" keyboardType="numeric" style={styles.input} onChangeText={(altura) => this.setState({altura})} />

            <Text style={styles.input}>{this.state.resultado}</Text>
            <TouchableOpacity style={styles.button} onPress={this.calcularIMC}><Text style={styles.textoSecundario}>Calcular IMC</Text></TouchableOpacity>
          </View>
          <View style={styles.rodape}>

          </View>
        </View>
      </>
    )
  }


}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1
  },
  cabecalho: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    height: 150,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textoPrincipal: {
    color: 'white',
    fontSize: 24,
  },

  textoSecundario: {
    color: 'white',
    fontSize: 20
  },

  form: {
    backgroundColor: 'lightcoral',
    height: 500,
    padding: 100,

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  input: {
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 10,

    fontSize: 20,
    textAlign: 'center',

    backgroundColor: 'aliceblue',
  },

  button: {
    width: 250,
    height: 50,
    borderRadius: 10,

    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rodape: {
    backgroundColor: 'red',
    height: 100,
  }
})

export default App;