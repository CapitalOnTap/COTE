import * as React from 'react';
import Snackbar from './Snackbar';
import { Snacks } from './types';

export interface Props {
  clearSnack: (snackId: string) => void;
  snacks: Snacks;
}

export default class SnacksContainer extends React.Component<Props, any> {
  clearSnackItem = snackId => {
    const { clearSnack } = this.props;
    clearSnack(snackId);
  };

  public render() {
    const { snacks } = this.props;

    const items = Object.keys(snacks).map(snackId => (
      <Snackbar
        clearSnack={() => this.clearSnackItem(snackId)}
        key={snackId}
        action={
          snacks[snackId].action ? () => snacks[snackId].action : () => this.clearSnackItem(snackId)
        }
        actionText={snacks[snackId].actionText}
        message={snacks[snackId].message}
        title={snacks[snackId].title}
        icon={snacks[snackId].icon}
        status={snacks[snackId].status}
        delay={snacks[snackId].delay}
      />
    ));

    return <div>{items}</div>;
  }
}
