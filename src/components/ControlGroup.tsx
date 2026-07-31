import type { ReactNode } from 'react'

interface ControlGroupProps {
  children?: ReactNode
  label?: ReactNode
  description?: ReactNode
}

function ControlGroup({ children, label, description }: ControlGroupProps) {
  return (
    <div className="flex flex-col gap-inset">
      {(label !== undefined || description !== undefined) && (
        <div className="flex flex-col gap-1">
          {label !== undefined && (
            <div className="text-sm font-bold text-foreground">{label}</div>
          )}
          {description !== undefined && (
            <div className="text-sm text-muted">{description}</div>
          )}
        </div>
      )}
      {children !== undefined && (
        <div className="flex flex-col gap-inset">{children}</div>
      )}
    </div>
  )
}

export default ControlGroup
