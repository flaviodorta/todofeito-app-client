import { ReactComponent as SvgIcon } from '../../../assets/svgs/more-three-dots.svg';
import { Props } from '../types';
import { baseTheme } from '../../../styles/theme/theme';

export function MoreThreeDotsIcon({
  height = baseTheme.sizes.icon,
  width = baseTheme.sizes.icon,
  ...restProps
}: Props): JSX.Element {
  return <SvgIcon height={height} width={width} {...restProps} />;
}
