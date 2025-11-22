"use client"

import React from "react";
import { useTheme } from "next-themes"
import { Moon, Sun, SunMoon } from "lucide-react"

export default function ThemeToggleButton() {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? resolvedTheme : theme
  const isSystem = theme === "system"

  // 循环 dark -> light -> system -> dark ...
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("system")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative inline-flex h-6 w-6 items-center justify-center
        rounded-md border bg-background text-foreground shadow-sm
        transition-colors hover:bg-accent hover:text-accent-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      "
    >
      {/* Dark 默认图标 */}
      <Moon className={`h-4 w-4 absolute duration-300 transition-transform ${
          (!isSystem && currentTheme === "dark") || !currentTheme
            ? "scale-100"
            : "scale-0"
        }`} />

      {/* Light 图标 */}
      <Sun
        className={`h-4 w-4 absolute duration-300 transition-transform ${
          !isSystem && currentTheme === "light"
            ? "scale-100"
            : "scale-0"
        }`}
      />

      {/* System 图标 */}
      <SunMoon
        className={`h-4 w-4 absolute duration-300 transition-transform ${
          isSystem
            ? "scale-100"
            : "scale-0"
        }`}
      />

      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
