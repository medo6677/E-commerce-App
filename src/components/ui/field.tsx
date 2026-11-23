import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const fieldVariants = cva("flex flex-col gap-1.5", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-center justify-between",
      responsive: "flex-col sm:flex-row sm:items-center sm:justify-between",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

function Field({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      data-slot="field"
      data-orientation={orientation ?? "vertical"}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-1 font-medium text-sm text-foreground",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn("font-normal text-muted-foreground text-xs", className)}
      {...props}
    />
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined | null> | { message?: string } | null
}) {
  const content = React.useMemo(() => {
    if (children) {
      return children
    }
    if (Array.isArray(errors)) {
      const validErrors = errors.filter((e): e is { message: string } => !!e?.message)
      if (validErrors.length === 1) {
        return validErrors[0].message
      }
      if (validErrors.length > 1) {
        return (
          <ul className="ml-4 flex list-disc flex-col gap-1">
            {validErrors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        )
      }
    } else if (errors && typeof errors === "object" && "message" in errors && errors.message) {
      return errors.message
    }
    return null
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("font-normal text-destructive text-xs", className)}
      {...props}
    >
      {content}
    </div>
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn("gap-4 flex flex-col", className)}
      {...props}
    />
  )
}

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn("gap-4 flex flex-col", className)}
      {...props}
    />
  )
}

function FieldLegend({ className, ...props }: React.ComponentProps<"legend">) {
  return (
    <legend
      data-slot="field-legend"
      className={cn("font-medium text-base text-foreground", className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn("flex flex-col flex-1 gap-1", className)}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-title"
      className={cn("font-medium text-sm text-foreground", className)}
      {...props}
    />
  )
}

function FieldSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="field-separator"
      className={cn("my-2", className)}
      {...props}
    />
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}

