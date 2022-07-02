import { ReactComponent as SvgIcon } from '../../../assets/svgs/circle-user-solid.svg';
import { IconProps } from './types/IconProps.types';
import { baseTheme } from '../../../styles/theme/theme';

export function CircleUserSolidIcon({
  height = baseTheme.sizes.icon,
  width = baseTheme.sizes.icon,
  ...restProps
}: IconProps): JSX.Element {
  return <SvgIcon height={height} width={width} {...restProps} />;
}
