import { calculateSize } from './calculateSize';

export const expandTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  let scrollHeight = e.target.scrollHeight;
  console.log(scrollHeight);
  let text = e.target.value;
  let { height } = calculateSize(text);
  console.log(height);

  if (scrollHeight < 193) {
    e.target.style.height = `${scrollHeight}px`;
  }
  if (scrollHeight >= 193) {
    e.target.style.overflowY = 'auto';
    e.target.classList.add('scroll');
    console.log(scrollHeight);
  }
};
