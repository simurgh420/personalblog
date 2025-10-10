import { useTheme } from "next-themes"
<<<<<<< HEAD
import { Toaster as Sonner, type ToasterProps } from "sonner"
=======
import { Toaster as Sonner, ToasterProps } from "sonner"
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
