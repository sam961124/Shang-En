"use client"
import AniSpinner from "@/components/aniSpinner/aniSpinner"

export default function Home() {
  return (
    <div className="flex h-full bg-orange-50 items-center justify-center">
      <AniSpinner size={50} />
    </div>
  )
}
