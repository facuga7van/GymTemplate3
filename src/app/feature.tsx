import React from 'react'
import Typography from '@components/ui/typography'

interface FeatureProps {
  icon: React.ReactNode
  headline: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  headline,
  description
}) => {
  return (
    <div
      className="flex flex-col gap-6 text-left max-w-72 md:items-start
        items-center"
    >
      <div className="py-4 px-4 rounded-md text-gray-300 border border-[#4b0c0c]/40 bg-[#141414] max-w-fit">
        {icon}
      </div>
      <Typography variant="h3">{headline}</Typography>
      <Typography variant="p" >
        {description}
      </Typography>
    </div>
  )
}

export default Feature
