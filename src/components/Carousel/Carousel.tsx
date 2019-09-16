import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import Icon from '../atoms/Icon/Icon';
import { Heading2, Title, Subtitle } from '../atoms/Typography/index';

const Wrapper = styled(Flex)`
  text-align: center;
`;

const CarouselSlide = styled.div<{ bg?: string }>`
  background: ${props => (props.bg ? `url(${props.bg})` : props.theme.colorBackground)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 450px;
`;

const CaptionStyled = styled.div`
  mix-blend-mode: normal;
  border-radius: 0px 0px 0px 4px;
  padding: 20px;
  position: relative;
  &:before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ffffff;
    opacity: 0.5;
  }
`;

const TitleStyled = styled(Title)`
  font-size: 18px;
  position: relative;
  font-weight: 600;
`;

const SubtitleStyled = styled(Subtitle)`
  position: relative;
`;

const Circle = styled.div<{ selected?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.theme && props.selected ? props.theme.colorDefault : null)};
  border: 1px solid ${props => (props.theme ? props.theme.colorDefault : '#273456')};
  margin-right: 16px;
`;

const RelativeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & i {
    color: #061f33;
    cursor: pointer;
  }

  & ${Circle}:last-of-type {
    margin-right: 0;
  }
`;

const ArrowLeft = styled(Icon)<React.HTMLAttributes<{}>>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-style: dashed;
  border-width: thin;
  border-color: ${props => (props.theme ? props.theme.colorDarkGrey : '#696D7E')};
`;

const ArrowRight = styled(Icon)<React.HTMLAttributes<{}>>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-style: dashed;
  border-width: thin;
  border-color: ${props => (props.theme ? props.theme.colorDarkGrey : '#696D7E')};
`;

interface ICarouselSlide {
  backgroundImage?: string;
  title?: string;
  description?: string;
  smallCaption?: string;
}

interface ICarouselPage {
  interval: number;
  currentSlide: number;
  slides: ICarouselSlide[];
}

const Carousel: React.FC<ICarouselPage> = props => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const countSlides = (props.slides && props.slides.length) || 0;

  function handlePrevious() {
    const newCurrentSlide = currentSlide === 0 ? countSlides - 1 : currentSlide - 1;
    setCurrentSlide(newCurrentSlide);
  }

  function handleNext() {
    const newCurrentSlide = countSlides - 1 === currentSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newCurrentSlide);
  }

  const { slides } = props;
  return (
    <Wrapper>
      <CarouselSlide bg={slides[currentSlide].backgroundImage}>
        <Flex flexDirection="column" justifyContent="flex-end" style={{ height: '100%' }}>
          <Box pt={5} pb={5} pr={3} pl={3}>
            <Heading2>{slides[currentSlide].title}</Heading2>
          </Box>
          <Box>
            <CaptionStyled>
              <TitleStyled>{slides[currentSlide].description}</TitleStyled>
              <Box pt={3} pb={4}>
                <SubtitleStyled>{slides[currentSlide].smallCaption}</SubtitleStyled>
              </Box>
              <RelativeContainer>
                {slides.length &&
                  slides.map((op, idx) => {
                    return <Circle key={idx} selected={idx === currentSlide} />;
                  })}

                {slides.length && <ArrowLeft name="keyboard_arrow_left" onClick={handlePrevious} />}

                {slides.length && <ArrowRight name="keyboard_arrow_right" onClick={handleNext} />}
              </RelativeContainer>
            </CaptionStyled>
          </Box>
        </Flex>
      </CarouselSlide>
    </Wrapper>
  );
};

(Carousel as any).defaultProps = {
  interval: 2000,
  slides: [
    {
      backgroundImage: 'https://via.placeholder.com/548x402',
      title: 'Upgrade to reward all business spend with cashback and Avios',
      description: 'Earn points on all card spend redeemable to cashback or Avios',
      smallCaption: 'Upgrade on Rewards tab in your portal'
    },
    {
      title: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
      description: 'quis nostrud exercitation ullamco laboris nisi ut aliquip',
      smallCaption: 'Slide small caption 2'
    }
  ]
};
export default Carousel;
