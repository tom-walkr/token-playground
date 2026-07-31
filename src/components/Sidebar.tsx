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
      className="flex w-80 shrink-0 flex-col gap-gutter border-r border-border bg-surface px-gutter py-gutter overflow-y-auto h-screen"
    >
      {(title !== undefined || description !== undefined) && (
        <header className="flex flex-col gap-inset">
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
      <div className="flex flex-col gap-gutter">{children}</div>
    </aside>
  )
}

export default Sidebar
