import type { ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
  title?: ReactNode
  description?: ReactNode
}

function Sidebar({ children, title, description }: SidebarProps) {
  return (
    <aside
      aria-label="Token controls"
      className="flex h-full w-80 shrink-0 flex-col border-r border-border bg-surface"
    >
      {(title !== undefined || description !== undefined) && (
        <header className="flex shrink-0 flex-col gap-inset px-gutter pt-gutter pb-inset">
          {title !== undefined && (
            <div className="font-heading text-lg font-bold text-foreground">
              {title}
            </div>
          )}
          {description !== undefined && (
            <div className="text-sm text-muted">{description}</div>
          )}
        </header>
      )}
      <div className="flex min-h-0 flex-1 flex-col gap-gutter overflow-y-auto px-gutter pb-gutter">
        {children}
      </div>
    </aside>
  )
}

export default Sidebar
