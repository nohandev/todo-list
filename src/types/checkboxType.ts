export interface CheckboxProps {
  checked: boolean;
  onChange: (e: boolean) => void
  data: string | number
  onClick: React.MouseEventHandler<HTMLInputElement>
}