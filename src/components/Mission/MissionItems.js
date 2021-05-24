import React from 'react';
import Text from '../Text/Text.js';
import classes from './MissionItems.module.css';
import mission from '../../assets/mission.jpg';

const missionItems = () => (
  <div className={classes.Mission}>
    <div>
      <img src={mission} />
    </div>
    <div>
    <Text head="Our Mission" par="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software" />
    </div>
  </div>
)

export default missionItems;
