import React, {useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Title, Form, Input, SubmitButton} from './styles';

/* import api from '../../services/api'; */

export default function TechEdit() {
  const navigation = useNavigation();
  const route = useRoute();

  const {tech} = route.params;

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(tech.name);

  function handleEditTech() {
    setLoading(true);

    /* try {
      await api.put(`/techs/${tech.name}`, {
        name: value,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(err);
    } */

    setLoading(false);
    Keyboard.dismiss();

    navigation.navigate('Techs', {oldName: tech.name, newName: value});
  }

  return (
    <Container>
      <Title>
        {tech.name}
        {tech.name !== value ? ` para ${value}` : ``}
      </Title>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="sentences"
          value={value}
          onChangeText={setValue}
          returnKeyType="send"
          onSubmitEditing={handleEditTech}
        />
        <SubmitButton loading={loading} onPress={handleEditTech}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="done" size={20} color="#fff" />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
