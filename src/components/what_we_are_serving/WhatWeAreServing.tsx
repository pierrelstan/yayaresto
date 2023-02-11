import { CustomContainer, Wrapper } from '@/styles/sharedstyles';
import Serving from './Serving';
import Description from '../common/Description';
import Titles from '../common/Titles';

const WhatWeAreServing: React.FC = () => {
  return (
    <Wrapper>
      <CustomContainer>
        <Wrapper>
          <Titles
            fontSize={'18'}
            color={'yellow'}
            title={'what we are serving'}
          />

          <Titles
            fontSize="70"
            color={'white'}
            title={'We all have to eat, so Why not do it beautifully?'}
          />
        </Wrapper>
        <Description
          description={
            ' Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.Through True Rich Attended does no end it his mother'
          }
        />
      </CustomContainer>
      <Serving />
    </Wrapper>
  );
};

export default WhatWeAreServing;
