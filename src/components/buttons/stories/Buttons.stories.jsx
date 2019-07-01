import React from 'react';
import '../../../sass/main.scss';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {select, text, boolean} from '@storybook/addon-knobs';

import {Button, Welcome} from '@storybook/react/demo';

import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from '../ButtonPrimary';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import Icon, {TYPE as ICON_TYPES, ICON_COLOR} from '../../icons/Icon';
import Label, {ICON_TYPE} from '../../labels/Label';
import plus from '../../../images/icons/plus.svg';

console.log(plus);
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Buttons', module)
  .add('ButtonPrimary', () => (
    <ButtonPrimary>
    Add your answer
    </ButtonPrimary>
  )).add('Login with facebook', () => (
    <ButtonPrimary
      buttonType="fb"
    >
    Login with Facebook
    </ButtonPrimary>
  )).add('Round button', () => (
    <ButtonRound label="Add question">
      <Icon type="plus" size={16} />
    </ButtonRound>
  )).add('ButtonSecondary search', () => (
    <ButtonSecondary>
      <Icon type={ICON_TYPES.SEARCH} color={ICON_COLOR.ADAPTIVE} size={14} />
    </ButtonSecondary>
  )).add('ButtonSecondary comment', () => (
    <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE} small>
      <Label
        text="Comment"
        number={21}
        iconType={ICON_TYPE.COMMENT}
        iconColor={ICON_COLOR.LAVENDER}
        secondary
      />
    </ButtonSecondary>
  )).add('ButtonSecondary qweqwe', () => (
    <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE} small>
      <Label
        text="Thank you"
        number={331}
        iconType={ICON_TYPE.HEART}
        iconColor={ICON_COLOR.ADAPTIVE}
        secondary
        unstyled
      />
    </ButtonSecondary>
  ));

storiesOf('Primitives|Button', module).add('default', () => (
  <ButtonPrimary
    disabled={boolean('disabled', false)}
    type={select('type', BUTTON_PRIMARY_TYPE)}
    // size={select('size', sizeOptions, sizeDefaultValue)}
    href={text('hrf', 'example')}
  >
    {text('content', 'Button')}
  </ButtonPrimary>
));
