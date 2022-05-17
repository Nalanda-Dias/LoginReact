import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/estilo';

var email, password;

export default function Login({navigation}) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        })
    }
    return (
        <View style={styles.container}>
            <Text h3>Entre com Login</Text>
            <Input 
                placeholder="Email"
                leftIcon={{type:'font-awesome', name:'envelope'}}
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />

            <Input  
                placeholder='Sua senha'
                leftIcon={{type:'font-awesome', name:'lock'}}
                onChangeText={value =>setPassword(value)}
                secureTextEntry="true"
            />
            <Button
                icon={
                <Icon
                    name ="check"
                    size={15}
                    color="white"
                />
                }
                title="Entrar"
                onPress={()=> entrar()}
            />
      
    </View>
  );
}

