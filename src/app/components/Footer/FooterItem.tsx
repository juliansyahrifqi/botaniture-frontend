import React from 'react'

interface FooterItemProps {
  children: React.ReactNode;
  title?: string;
}
export default function FooterItem(props: FooterItemProps) {
  const { title, children} = props;
  return (
    <div> 
      {title && (
        <h4 className='text-2xl font-bold text-white font-sansation mb-6'>{title}</h4>
      )}
     
      {children}
    </div>
  )
}
