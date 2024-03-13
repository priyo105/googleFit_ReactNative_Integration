/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {millisecondsToDate} from '../helpers/MiliToDate';

const StepCard = ({data}) => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState();

  useEffect(() => {
    console.log(data);
    setStep(data.bucket[0].dataset[0].point[0].value[0].intVal);
    setDate(millisecondsToDate(parseInt(data.bucket[0].startTimeMillis)));
  }, [data]);

  return (
    <View>
      <Card style={{margin: 10}}>
        <Card.Content>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Title style={{fontWeight: 'bold'}}>Steps</Title>
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

export default StepCard;
