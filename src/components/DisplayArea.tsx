import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'

interface PanOffset {
  x: number
  y: number
}

interface DisplayAreaProps {
  children: ReactNode
}

function DisplayArea({ children }: DisplayAreaProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState<PanOffset>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{
    pointerX: number
    pointerY: number
    offsetX: number
    offsetY: number
  } | null>(null)

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.button !== 0) {
        return
      }

      event.currentTarget.setPointerCapture(event.pointerId)
      dragStartRef.current = {
        pointerX: event.clientX,
        pointerY: event.clientY,
        offsetX: offset.x,
        offsetY: offset.y,
      }
      setIsDragging(true)
    },
    [offset.x, offset.y],
  )

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const dragStart = dragStartRef.current
      if (dragStart === null) {
        return
      }

      setOffset({
        x: dragStart.offsetX + (event.clientX - dragStart.pointerX),
        y: dragStart.offsetY + (event.clientY - dragStart.pointerY),
      })
    },
    [],
  )

  const endDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartRef.current === null) {
      return
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    dragStartRef.current = null
    setIsDragging(false)
  }, [])

  useEffect(() => {
    const node = viewportRef.current
    if (node === null) {
      return
    }

    const preventWheelScroll = (event: WheelEvent) => {
      event.preventDefault()
    }

    node.addEventListener('wheel', preventWheelScroll, { passive: false })

    return () => {
      node.removeEventListener('wheel', preventWheelScroll)
    }
  }, [])

  return (
    <div
      ref={viewportRef}
      aria-label="Token display"
      className={`relative min-h-0 flex-1 overflow-hidden ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        className="absolute left-1/2 top-1/2 w-max max-w-[min(100%,48rem)] origin-center px-gutter py-gutter will-change-transform"
        style={{
          transform: `translate(calc(-50% + ${String(offset.x)}px), calc(-50% + ${String(offset.y)}px))`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default DisplayArea
