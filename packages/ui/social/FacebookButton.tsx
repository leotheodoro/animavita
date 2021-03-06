import {px2ddp} from '@animavita/theme';
import styled from 'styled-components/native';
import {Platform, TouchableOpacityProps} from 'react-native';
import React from 'react';

import Typography from '../core/Typography';
import Row from '../layout/Row';
import FacebookLogo from '../assets/icons/FacebookLogo';
import Space from '../layout/Space';
import FillSpace from '../layout/FillSpace';

const Touchable = styled.TouchableOpacity`
  background-color: #4167b2;
  padding: ${px2ddp(6)}px ${px2ddp(15)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${() => `${px2ddp(10)}px`};
`;

type FacebookButtonProps = TouchableOpacityProps;

const FacebookButton: React.FC<FacebookButtonProps> = props => {
  return (
    <Touchable {...props}>
      <Row justifyContent="space-around">
        <FacebookLogo />
        <Space width={px2ddp(10)} />
        <Typography variant="body" type="bold" color="#fff">
          Continuar com Facebook
        </Typography>
      </Row>
    </Touchable>
  );
};

export default FacebookButton;
