// import styled from 'styled-components';

// interface Props {
//   checked: boolean;
//   onClick: () => void;
//   className: string | string[];
// }

// export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
//   // Hide checkbox visually but remain accessible to screen readers.
//   // Source: https://polished.js.org/docs/#hidevisually
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;
// export const StyledCheckbox = styled.div<{ checked: boolean }>`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
//   border-radius: 3px;
//   transition: all 150ms;
// `;

// export const CheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `;

// export const Checkbox = (props: Props) => {
//   return (
//     <CheckboxContainer className={className}>
//       <HiddenCheckbox checked={checked} {...props} />
//       <StyledCheckbox checked={checked} />
//     </CheckboxContainer>
//   );
// };

// import React from 'react';
// import styled from 'styled-components';

// interface Checked {
//   checked: boolean;
// }

// const CheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `;

// const Icon = styled.svg`
//   fill: none;
//   stroke: white;
//   stroke-width: 2px;
// `;
// // Hide checkbox visually but remain accessible to screen readers.
// // Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;

// const StyledCheckbox = styled.div<Checked>`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
//   border-radius: 3px;
//   transition: all 150ms;

//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px pink;
//   }

//   ${Icon} {
//     visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
//   }
// `;

// interface Props {
//   className: string;
//   checked: boolean;
//   props: any[];
// }

// export const Checkbox = (props: Props) => (
//   <CheckboxContainer className={className}>
//     <HiddenCheckbox checked={checked} {...props} />
//     <StyledCheckbox checked={checked}>
//       <Icon viewBox='0 0 24 24'>
//         <polyline points='20 6 9 17 4 12' />
//       </Icon>
//     </StyledCheckbox>
//   </CheckboxContainer>
// );

import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`;

interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
}

export const Checkbox: React.FC<IProps> = ({
  className,
  checked,
  labelWrap = true,
  ...props
}) => {
  const content = (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return labelWrap ? <label>{content}</label> : <>{content}</>;
};
