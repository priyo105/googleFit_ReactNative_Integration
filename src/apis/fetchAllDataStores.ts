/* eslint-disable prettier/prettier */

import axios from 'axios';

export const fetchData = async (accessToken: any) => {
  console.log(accessToken);
  try {
    const response = await axios.get(
      'https://www.googleapis.com/fitness/v1/users/me/dataSources',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
