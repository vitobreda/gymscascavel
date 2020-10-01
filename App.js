import React, {useEffect, useState} from 'react';
import {Text, Linking, FlatList, TextInput} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {Svg, Circle, Path} from 'react-native-svg';
import {gyms} from './gyms';
import * as S from './styles';

export default function App() {
  const [filter, setFilter] = useState();
  const [dados, setDados] = useState(gyms);

  useEffect(() => {
    filterItem();
  }, [filter]);

  function openGps(coordinates) {
    var url = 'http://www.google.com/maps/place/' + coordinates;
    openExternalApp(url);
  }

  function openExternalApp(url) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  function handleFilter(item) {
    if (filter) {
      return item.name.match(filter.toUpperCase());
    } else {
      return true;
    }
  }

  function filterItem() {
    setDados(gyms.filter(handleFilter));
  }

  function DisplayInfo({caption, value}) {
    return (
      <S.Wrapper>
        <S.Title>{caption}</S.Title>
        <S.Info>{value}</S.Info>
      </S.Wrapper>
    );
  }

  function CustomButtom({onPress, title}) {
    return (
      <S.ContainerButtom onPress={onPress}>
        <S.TextButtom>{title}</S.TextButtom>
      </S.ContainerButtom>
    );
  }

  const renderItem = ({item}) => (
    <S.CardComponent>
      <S.RowComponent>
        <S.CircleContainer>
          <Svg
            style={{
              width: 50,
              height: 50,
            }}>
            <S.CircleValueWrapper>
              <Text
                style={{
                  color: '#F0F0F0',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 18,
                }}>
                {item.id}
              </Text>
            </S.CircleValueWrapper>
            <Circle cx="25" cy="25" r="25" fill="#303030" />
          </Svg>
        </S.CircleContainer>

        <S.WrapperTitle>
          <DisplayInfo caption="Nome" value={item.name} />
        </S.WrapperTitle>
      </S.RowComponent>
      <S.RowComponent>
        <S.Wrapper>
          <DisplayInfo caption="Cordenadas" value={item.coordinates} />
        </S.Wrapper>
        <S.BtnCopy onPress={() => Clipboard.setString(item.coordinates)}>
          <Svg width="20" height="20" x="0" y="0" viewBox="0 0 512 512">
            <Path
              fill="#f0f0f0"
              d="m271 512h-191c-44.113281 0-80-35.886719-80-80v-271c0-44.113281 35.886719-80 80-80h191c44.113281 0 80 35.886719 80 80v271c0 44.113281-35.886719 80-80 80zm-191-391c-22.054688 0-40 17.945312-40 40v271c0 22.054688 17.945312 40 40 40h191c22.054688 0 40-17.945312 40-40v-271c0-22.054688-17.945312-40-40-40zm351 261v-302c0-44.113281-35.886719-80-80-80h-222c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h222c22.054688 0 40 17.945312 40 40v302c0 11.046875 8.953125 20 20 20s20-8.953125 20-20zm0 0"
            />
          </Svg>
        </S.BtnCopy>
      </S.RowComponent>
      <CustomButtom
        title={'Como chegar?'}
        onPress={() => openGps(item.coordinates)}></CustomButtom>
    </S.CardComponent>
  );

  return (
    <S.PageDefault>
      <S.FieldContainer>
        <TextInput
          style={{color: '#C0C0C0'}}
          placeholder={'Pesquisar ...'}
          placeholderTextColor="#C0C0C0"
          onChangeText={(text) => setFilter(text)}
          value={filter}></TextInput>
      </S.FieldContainer>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString() + item.coordinates}
      />
    </S.PageDefault>
  );
}
