import { CustomContainer, Wrapper } from '@/styles/sharedstyles';
import { AProps, ITitleProps } from '@/utils/types';
import Description from './Description';
import Titles from './Titles';

const Article1: React.FC<AProps> = (props: AProps) => {
  return (
    <CustomContainer>
      <Wrapper>
        {props.data.map((element, i) => (
          <Titles
            fontSize={element.fontSize}
            color={element.color}
            title={element.title}
            key={i}
          />
        ))}
      </Wrapper>
      <div>
        {props.data.map((element, i) => (
          <div key={i}>
            <Description description={element.description} />
          </div>
        ))}
      </div>
    </CustomContainer>
  );
};

export default Article1;
