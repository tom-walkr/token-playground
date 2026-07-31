import type { ReactNode } from 'react'

interface ControlCardProps {
  children: ReactNode
  title?: ReactNode
  description?: ReactNode
}

function ControlCard({ children, title, description }: ControlCardProps) {
  return (
    <section className="flex flex-col gap-gutter rounded border border-border bg-background p-gutter">
      {(title !== undefined || description !== undefined) && (
        <header className="flex flex-col gap-inset">
          {title !== undefined && (
            <div className="font-heading text-base font-bold text-foreground">
              {title}
            </div>
          )}
          {description !== undefined && (
            <div className="text-sm text-muted">{description}</div>
          )}
        </header>
      )}
      <div className="flex flex-col gap-gutter">{children}</div>
    </section>
  )
}

export default ControlCard
