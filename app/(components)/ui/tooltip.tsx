"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils";;

const TooltipContext = React.createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isPersistent: boolean
  setIsPersistent: (persistent: boolean) => void
  closeTimeoutRef: React.MutableRefObject<NodeJS.Timeout | null>
}>({
  isOpen: false,
  setIsOpen: () => {},
  isPersistent: false,
  setIsPersistent: () => {},
  closeTimeoutRef: { current: null }
})

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  persistOnClick = false,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  persistOnClick?: boolean
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isPersistent, setIsPersistent] = React.useState(false)
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleOpenChange = React.useCallback((open: boolean) => {
    if (!open && isPersistent) {
      // Don't close if it's persistent
      return
    }
    setIsOpen(open)
    if (!open) {
      setIsPersistent(false)
    }
  }, [isPersistent])

  if (persistOnClick) {
    return (
      <TooltipProvider>
        <TooltipContext.Provider value={{ isOpen, setIsOpen, isPersistent, setIsPersistent, closeTimeoutRef }}>
          <TooltipPrimitive.Root 
            data-slot="tooltip" 
            open={isOpen}
            onOpenChange={handleOpenChange}
            {...props} 
          />
        </TooltipContext.Provider>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider>
      <TooltipPrimitive.Root 
        data-slot="tooltip" 
        {...props} 
      />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  const { setIsOpen, setIsPersistent, closeTimeoutRef } = React.useContext(TooltipContext)

  return (
    <TooltipPrimitive.Trigger 
      data-slot="tooltip-trigger" 
      onMouseEnter={() => {
        // Clear any pending close timeout
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current)
          closeTimeoutRef.current = null
        }
        setIsOpen(true)
        setIsPersistent(true)
      }}
      onClick={() => {
        // Clear any pending close timeout
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current)
          closeTimeoutRef.current = null
        }
        setIsOpen(true)
        setIsPersistent(true)
      }}
      onMouseLeave={() => {
        // Set a longer delay to allow moving to tooltip content
        closeTimeoutRef.current = setTimeout(() => {
          setIsPersistent(false)
          setIsOpen(false)
          closeTimeoutRef.current = null
        }, 300)
      }}
      {...props} 
    />
  )
}

function TooltipContent({
  className,
  sideOffset = 4,
  showArrow = false,
  children,
  withBackdrop = false,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  showArrow?: boolean
  withBackdrop?: boolean
}) {
  const { setIsOpen, setIsPersistent, closeTimeoutRef } = React.useContext(TooltipContext)

  if (withBackdrop) {
    return (
      <TooltipPrimitive.Portal>
        <div>
          <div 
            className="fixed inset-0 bg-black/10 dark:bg-black/60 z-60 animate-in fade-in-0 duration-200 pointer-events-none"
          />
          <TooltipPrimitive.Content
            data-slot="tooltip-content"
            sideOffset={sideOffset}
            className={cn(
              "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative max-w-70 rounded-md border px-3 py-1.5 text-sm shadow-lg z-70",
              className
            )}
            onMouseEnter={() => {
              // Clear any pending close timeout from trigger mouse leave
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current)
                closeTimeoutRef.current = null
              }
              setIsPersistent(true)
              setIsOpen(true)
            }}
            onMouseLeave={() => {
              // Close when leaving tooltip content, even with backdrop
              setIsPersistent(false)
              setIsOpen(false)
            }}
            {...props}
          >
            {children}
            {showArrow && (
              <TooltipPrimitive.Arrow className="fill-popover -my-px drop-shadow-[0_1px_0_var(--border)]" />
            )}
          </TooltipPrimitive.Content>
        </div>
      </TooltipPrimitive.Portal>
    )
  }

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative max-w-70 rounded-md border px-3 py-1.5 text-sm shadow-lg z-70",
          className
        )}
        onMouseEnter={() => {
          // Clear any pending close timeout from trigger mouse leave
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
            closeTimeoutRef.current = null
          }
          setIsPersistent(true)
          setIsOpen(true)
        }}
        onMouseLeave={() => {
          setIsPersistent(false)
          setIsOpen(false)
        }}
        {...props}
      >
        {children}
        {showArrow && (
          <TooltipPrimitive.Arrow className="fill-popover -my-px drop-shadow-[0_1px_0_var(--border)]" />
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
