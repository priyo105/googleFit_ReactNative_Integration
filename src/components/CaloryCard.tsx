/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {millisecondsToDate} from '../helpers/MiliToDate';

const CaloryCard = ({data}) => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState();

  useEffect(() => {
    console.log('calory', JSON.stringify(data));
    setStep(data.bucket[0]?.dataset[0]?.point[0]?.value[0]?.fpVal || '0');
    setDate(millisecondsToDate(parseInt(data.bucket[0].startTimeMillis)));
  }, [data]);

  return (
    <View>
      <Card style={{margin: 10}}>
        <Card.Content>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Title style={{fontWeight: 'bold'}}>Calories</Title>
          </View>
          <Paragraph style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
            {step}
          </Paragraph>
          <Paragraph style={{color: 'red'}}>{date}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default CaloryCard;
