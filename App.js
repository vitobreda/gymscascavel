import React, {useEffect, useState} from 'react';
import {View, Text, Linking, ScrollView, TextInput} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {Svg, Circle} from 'react-native-svg';
import {gyms} from './gyms';
import * as S from './styles';

export default function App() {
  const [filter, setFilter] = useState();

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

  function DisplayInfo({caption, value}) {
    return (
      <S.Wrapper>
        <S.Title>{caption}</S.Title>
        <S.Info
          style={{color: parseInt(value) < 0 ? '#E65D4E' : '#4B6E8B'}}
          numberOfLines={1}>
          {value}
        </S.Info>
      </S.Wrapper>
    );
  }

  /*<S.CircleContainer>
    <Svg
      style={{
        width: 50,
        height: 50,
      }}>
      <S.CircleValueWrapper>
        <S.TextIdClient>{item.codigo}</S.TextIdClient>
      </S.CircleValueWrapper>
      <Circle cx="25" cy="25" r="25" fill="#4B6E8B" />
    </Svg>
  </S.CircleContainer>;*/

  function CustomButtom({onPress, title}) {
    return (
      <S.ContainerButtom onPress={onPress}>
        <S.TextButtom>{title}</S.TextButtom>
      </S.ContainerButtom>
    );
  }

  function renderCard() {
    return gyms.filter(handleFilter).map((item, index) => {
      return (
        <S.CardComponent key={index}>
          <S.RowComponent>
            <S.CircleContainer>
              <Svg
                style={{
                  width: 50,
                  height: 50,
                }}>
                <S.CircleValueWrapper>
                  <Text>{item.id}</Text>
                </S.CircleValueWrapper>
                <Circle cx="25" cy="25" r="25" fill="#4B6E8B" />
              </Svg>
            </S.CircleContainer>
          </S.RowComponent>
          <S.RowComponent>
            <DisplayInfo
              caption="Cordenadas"
              value={item.coordinates}></DisplayInfo>
          </S.RowComponent>
          <CustomButtom
            title={'Como chegar?'}
            onPress={() => openGps(item.coordinates)}></CustomButtom>
        </S.CardComponent>
      );
    });
  }

  return (
    <ScrollView>
      <S.FieldContainer>
        <TextInput
          placeholder={'Pesquisar ...'}
          onChangeText={(text) => setFilter(text)}
          value={filter}></TextInput>
      </S.FieldContainer>
      {renderCard()}
    </ScrollView>
  );
}
