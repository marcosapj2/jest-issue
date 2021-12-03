import { IProps } from './interfaces'
import { Label, Value, Field } from './styles'

export default function ({ label, value }: IProps) {
  return (
    <Field>
      <Label>{label}</Label> <Value>{value}</Value>
    </Field>
  )
}
