export default function getInteractiveExempleCode(props: {
  reverse: boolean
  transition: string
  one: boolean
}) {
  return `function Carousel() {
  return (
    <div${props.one ? ' style={{ width: 116px }}' : ''}>
      <CarouselWrapper
        transition="${
          props.transition.slice(0, 42) +
          (props.transition.length > 42 ? '...' : '')
        }"${props.reverse ? '\n        reverse' : ''}
        datas={datas}
        currentSize={{ element: 116, margin: 10 }}>
        <CarouselElement>
          <Element />
        </CarouselElement>
        <PrevSlideAction>
          <button>Prev</button>
        </PrevSlideAction>
        <NextSlideAction>
          <button>Next</button>
        </NextSlideAction>
      </CarouselWrapper>
    </div>
  )
};

const Element = ({ className, data }: SliderElementProps<DatasTypes>) => {
  return (
    <div className={className}>
      <div style={{ backgroundColor: data?.color, margin: "8px"}}>
        <p>{data?.text}</p>
      </div>
    </div>
  )
}`
}
