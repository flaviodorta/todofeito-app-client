import { ReactComponent as SvgIcon } from '../../../assets/svgs/home-outline.svg';
import { Props } from '../types';
import { baseTheme } from '../../../styles/theme/theme';

export function HomeOutlineIcon({
  height = baseTheme.sizes.icon,
  width = baseTheme.sizes.icon,
  ...restProps
}: Props): JSX.Element {
  return <SvgIcon height={height} width={width} {...restProps} />;
}
