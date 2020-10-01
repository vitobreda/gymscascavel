import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const space = width < 430 ? 5 : 8;

export const PageDefault = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #101010;
`;

export const metrics = {
  cardPadding: 10,
  cardBorderRadius: space,
  cardMargin: space,
  width,
  height,
};

export const CardComponent = styled.View`
  flex-direction: column;
  padding: ${metrics.cardPadding}px;
  margin: ${metrics.cardMargin}px;
  border-radius: ${metrics.cardBorderRadius}px;
  background: #242424 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 6px #00000029;
  elevation: 3;
`;

export const Wrapper = styled.View`
  flex: 1;
  margin: 5px 0 5px 0;
`;

export const WrapperTitle = styled.View`
  flex: 1;
  margin: 5px 10px 5px 10px;
`;

export const Title = styled.Text`
  text-align: left;
  font-size: 14px;
  color: #c0c0c0;
  margin-bottom: 5px;
  font-family: Roboto-Regular;
`;

export const Info = styled.Text`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: #f0f0f0;
  text-transform: capitalize;
  font-family: Roboto-Bold;
`;

export const RowComponent = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const FieldContainer = styled.View`
  height: 40px;
  border: 0.2px;
  padding: 0 10px 0 10px;
  border-color: #34725b;
  margin: 15px 10px 5px 10px;
`;

export const ContainerButtom = styled.TouchableOpacity`
  height: 48px;
  background-color: #34725b;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButtom = styled.Text`
  font-size: 16px;
  font-family: Roboto-Bold;
  color: #ffffff;
  text-transform: capitalize;
`;

export const CircleContainer = styled.View`
  height: 100%;
  margin-top: 10px;
  padding: 0;
`;

export const CircleValueWrapper = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const BtnCopy = styled.TouchableOpacity`
  margin: 20px 30% 10px 10px;
`;
