import { LabelProps } from './Label.types';
import { Div } from './Label.styles';

export function Label(props: LabelProps): JSX.Element {
  return <Div>{props.content}</Div>;
}
