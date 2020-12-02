import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-top: 20px;
  border-top-width: 1px;
  border-color: #f0422750;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  width: 80%;
  height: 40px;
  background: #e9e9e9;
  border-radius: 4px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #f04227;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.8 : 1)};
`;
