import React, {useState} from 'react';
import {ActivityIndicator, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Tech,
  Name,
  ProfileButton,
} from './styles';

import api from '../../services/api';

export default function Techs() {
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [value, setValue] = useState(null);

  const handleAddTech = async () => {
    setLoading(true);

    try {
      const {data} = await api.post('techs', {
        id: value,
      });
      setTechs([...techs, data]);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    setLoading(false);
    setValue(null);
    Keyboard.dismiss();
  };

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="sentences"
          placeholder="Adicionar tecnologia"
          value={value}
          onChangeText={setValue}
          returnKeyType="send"
          onSubmitEditing={handleAddTech}
        />
        <SubmitButton loading={loading} onPress={handleAddTech}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="add" size={20} color="#fff" />
          )}
        </SubmitButton>
      </Form>
      <List
        data={techs}
        keyExtractor={(tech) => tech.id}
        renderItem={({item}) => (
          <Tech>
            <Name>{item.id}</Name>
            <ProfileButton background="#ffc107" onPress={() => {}}>
              <Icon name="design-services" size={20} color="#FFF" />
            </ProfileButton>
            <ProfileButton background="#e8a800" onPress={() => {}}>
              <Icon name="delete" size={20} color="#FFF" />
            </ProfileButton>
          </Tech>
        )}
      />
    </Container>
  );
}
