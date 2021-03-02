export default function getInteractiveExempleCode(
  reverse: boolean,
  transition: string
) {
  return `function Slider() {
    return (
      <HorizontalCarouselWrapper
        transition="${transition}"${reverse ? '\n      reverse' : ''}
        datas={datas}
        currentSize={{ element: 116, margin: 10 }}>
        <HorizontalCarousel>
          <Element />
        </HorizontalCarousel>
        <PrevSlideAction>
          <button>Prev</button>
        </PrevSlideAction>
        <NextSlideAction>
          <button>Next</button>
        </NextSlideAction>
      </HorizontalCarouselWrapper>
    )
  };`
}
