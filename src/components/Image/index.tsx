import { IProps } from './interfaces'
import { StyledImage } from './styles'

function Image({ alt, src, width, height, className, onClick }: IProps) {
  return (
    <StyledImage
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  )
}

export default Image
