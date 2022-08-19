import { LabelProps } from './Label.types';
import { Div } from './Label.styled';
import { useElementSize } from '../../hooks/useElementSize';

export function Label(props: LabelProps): JSX.Element {
  const [labelRef, labelSize] = useElementSize();

  const { isVisible, content, parentWidth } = props;

  return (
    <Div
      ref={labelRef}
      isVisible={isVisible}
      parentWidth={parentWidth}
      elementWidth={labelSize.width}
    >
      {content}
    </Div>
  );
}
