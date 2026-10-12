import { cn } from '@utils/cn'
import { ComponentProps } from 'react'

type IServerIconProps = ComponentProps<'svg'> & {
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-12 h-12',
}

export const ServerIcon = (props: IServerIconProps) => {
  const { className, size = 'sm', ...res } = props
  return (
    <svg
      role='button'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(`${sizeClasses[size]}`, className)}
      {...res}
    >
      <rect x='4' y='4' width='20' height='8' rx='2' fill='var(--primary-folder-up)' />
      <rect x='4' y='16' width='20' height='8' rx='2' fill='var(--primary-folder-up)' />
      <circle cx='8' cy='8' r='1.5' fill='white' />
      <circle cx='8' cy='20' r='1.5' fill='white' />
      <rect x='12' y='7' width='8' height='2' rx='1' fill='white' opacity='0.6' />
      <rect x='12' y='19' width='8' height='2' rx='1' fill='white' opacity='0.6' />
      <path d='M14 12V16' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
