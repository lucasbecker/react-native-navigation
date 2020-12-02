import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
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

/* import api from '../../services/api'; */

export default function Techs() {
  const navigation = useNavigation();
  const route = useRoute();

  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [value, setValue] = useState(null);

  function handleAddTech() {
    setLoading(true);

    /* try {
      const {data} = await api.post('techs', {
        name: value,
      });
      setTechs([...techs, data]);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    } */

    const include = techs.some((tech) => tech.name === value);
    if (!include) setTechs([...techs, {name: value}]);

    setLoading(false);
    setValue(null);
    Keyboard.dismiss();
  }

  function handleDeleteTech(name) {
    /* await api.delete(`/techs/${name}`); */

    const filteredTechs = techs.filter((item) => item.name !== name);
    setTechs(filteredTechs);
  }

  useEffect(() => {
    if (route.params !== undefined) {
      const {oldName, newName} = route.params;
      const include = techs.some((tech) => tech.name === newName);
      if (!include) {
        techs.forEach((tech) => {
          if (tech.name === oldName) {
            tech.name = newName;
          }
        });
      }

      route.params = undefined;
    }
  }, [route.params, techs]);

  function navigationToEdit(tech) {
    navigation.navigate('TechEdit', {techs, tech});
  }

  function navigationToInfos(tech) {
    navigation.navigate('TechInfos', {tech});
  }

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
        keyExtractor={(tech) => tech.name}
        renderItem={({item}) => (
          <Tech>
            <Name>{item.name}</Name>
            <ProfileButton
              background="#ffc107"
              onPress={() => navigationToInfos(item)}>
              <Icon name="search" size={20} color="#FFF" />
            </ProfileButton>
            <ProfileButton
              background="#ffc107"
              onPress={() => navigationToEdit(item)}>
              <Icon name="edit" size={20} color="#FFF" />
            </ProfileButton>
            <ProfileButton
              background="#ffc107"
              onPress={() => handleDeleteTech(item.name)}>
              <Icon name="delete" size={20} color="#FFF" />
            </ProfileButton>
          </Tech>
        )}
      />
    </Container>
  );
}
