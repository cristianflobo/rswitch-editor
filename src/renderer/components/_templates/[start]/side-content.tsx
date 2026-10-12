import { ComponentPropsWithoutRef } from 'react'

type IStartSideContentProps = ComponentPropsWithoutRef<'div'>
const StartSideContent = (props: IStartSideContentProps) => {
  const { children, ...res } = props
  return (
    <div className='relative -bottom-4 ml-16 min-w-[240px]' {...res}>
      {children}
    </div>
  )
}

export { StartSideContent }
