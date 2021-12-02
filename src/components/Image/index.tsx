import { IProps } from './interfaces'
import { StyledImage } from './styles'

function Image({ alt, src, width, height }: IProps) {
  return <StyledImage alt={alt} src={src} width={width} height={height} />
}

export default Image
