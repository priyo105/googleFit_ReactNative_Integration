/* eslint-disable prettier/prettier */

import axios from 'axios';
import {dateToMilliseconds} from '../helpers/DateToMili';

export const fetchCaloryData = async (accessToken: any) => {
  console.log(accessToken);
  try {
    const requestBody = {
      aggregateBy: [
        {
          dataTypeName: 'com.google.calories.expended',
          dataSourceId:
            'derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended',
        },
      ],
      bucketByTime: {
        durationMillis: 86400000,
      },
      startTimeMillis: dateToMilliseconds(new Date(Date.now() - 86400000 * 3)),
      endTimeMillis: dateToMilliseconds(new Date().toISOString()),
    };

    const response = await axios.post(
      'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      console.log(JSON.stringify(response.data));
      return response.data;
    } else {
      console.error(response);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
