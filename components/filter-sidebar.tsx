"use client"

import type React from "react"

import { useState } from "react"
import { Wifi, Wind, UtensilsCrossed, WashingMachine, ShieldCheck, Dumbbell, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterSidebarProps {
  onClose?: () => void
  onFiltersChange?: (filters: FilterState) => void
}

interface FilterState {
  rentRange: [number, number]
  amenities: Record<string, boolean>
  verifiedOnly: boolean
  roomType: string[]
  genderPreference: string
}

export default function FilterSidebar({ onClose, onFiltersChange }: FilterSidebarProps) {
  const [minRent, setMinRent] = useState(2000)
  const [maxRent, setMaxRent] = useState(20000)

  const [amenities, setAmenities] = useState({
    wifi: false,
    ac: false,
    food: false,
    laundry: false,
    gym: false,
    powerBackup: false,
  })

  const [verifiedOnly, setVerifiedOnly] = useState(false)

  const [roomTypes, setRoomTypes] = useState<string[]>([])

  const [genderPreference, setGenderPreference] = useState("any")

  const handleAmenityChange = (amenity: keyof typeof amenities) => {
    setAmenities((prev) => ({
      ...prev,
      [amenity]: !prev[amenity],
    }))
  }

  const handleRoomTypeToggle = (type: string) => {
    setRoomTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const handleMinRentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxRent - 1000)
    setMinRent(value)
  }

  const handleMaxRentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minRent + 1000)
    setMaxRent(value)
  }

  const handleApplyFilters = () => {
    const filters: FilterState = {
      rentRange: [minRent, maxRent],
      amenities,
      verifiedOnly,
      roomType: roomTypes,
      genderPreference,
    }
    onFiltersChange?.(filters)
    if (onClose) onClose()
  }

  const handleResetFilters = () => {
    setMinRent(2000)
    setMaxRent(20000)
    setAmenities({ wifi: false, ac: false, food: false, laundry: false, gym: false, powerBackup: false })
    setVerifiedOnly(false)
    setRoomTypes([])
    setGenderPreference("any")
  }

  // Calculate slider fill percentage
  const minPercent = ((minRent - 2000) / (30000 - 2000)) * 100
  const maxPercent = ((maxRent - 2000) / (30000 - 2000)) * 100

  return (
    <div className="p-6 space-y-8">
      {/* Section: Rent Range - Enhanced Dual Thumb Slider */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Rent Range</h3>
        <div className="space-y-4">
          {/* Min/Max Display */}
          <div className="flex items-center justify-between text-sm">
            <span className="px-3 py-1.5 bg-secondary rounded-lg font-medium text-foreground">
              ₹{minRent.toLocaleString()}
            </span>
            <span className="text-muted-foreground">to</span>
            <span className="px-3 py-1.5 bg-secondary rounded-lg font-medium text-foreground">
              ₹{maxRent.toLocaleString()}
            </span>
          </div>

          <div className="relative h-2 mt-6 mb-4">
            {/* Track background */}
            <div className="absolute inset-0 bg-border rounded-full" />
            {/* Active track */}
            <div
              className="absolute h-full bg-primary rounded-full"
              style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
            />
            {/* Min thumb */}
            <input
              type="range"
              min="2000"
              max="30000"
              step="500"
              value={minRent}
              onChange={handleMinRentChange}
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-card
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-primary
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-md
                [&::-webkit-slider-thumb]:transition-transform
                [&::-webkit-slider-thumb]:hover:scale-110
                [&::-moz-range-thumb]:pointer-events-auto
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-card
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:border-primary
                [&::-moz-range-thumb]:cursor-pointer"
            />
            {/* Max thumb */}
            <input
              type="range"
              min="2000"
              max="30000"
              step="500"
              value={maxRent}
              onChange={handleMaxRentChange}
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-card
                [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-primary
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-md
                [&::-webkit-slider-thumb]:transition-transform
                [&::-webkit-slider-thumb]:hover:scale-110
                [&::-moz-range-thumb]:pointer-events-auto
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-card
                [&::-moz-range-thumb]:border-2
                [&::-moz-range-thumb]:border-primary
                [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Under ₹5k", min: 2000, max: 5000 },
              { label: "₹5k-10k", min: 5000, max: 10000 },
              { label: "₹10k-15k", min: 10000, max: 15000 },
              { label: "₹15k+", min: 15000, max: 30000 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setMinRent(preset.min)
                  setMaxRent(preset.max)
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all
                  ${
                    minRent === preset.min && maxRent === preset.max
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-border"
                  }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Gender</h3>
        <div className="flex rounded-xl bg-secondary p-1">
          {[
            { value: "any", label: "Any" },
            { value: "boys", label: "Boys" },
            { value: "girls", label: "Girls" },
            { value: "unisex", label: "Unisex" },
          ].map((pref) => (
            <button
              key={pref.value}
              onClick={() => setGenderPreference(pref.value)}
              className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${
                  genderPreference === pref.value
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {pref.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Room Type</h3>
        <div className="space-y-3">
          {[
            { value: "single", label: "Single Occupancy" },
            { value: "double", label: "Double Sharing" },
            { value: "triple", label: "Triple Sharing" },
          ].map((type) => (
            <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                  ${
                    roomTypes.includes(type.value)
                      ? "bg-primary border-primary"
                      : "border-border group-hover:border-primary/50"
                  }`}
              >
                {roomTypes.includes(type.value) && (
                  <svg
                    className="w-3 h-3 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-foreground">{type.label}</span>
              <input
                type="checkbox"
                checked={roomTypes.includes(type.value)}
                onChange={() => handleRoomTypeToggle(type.value)}
                className="sr-only"
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Amenities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: "wifi", label: "WiFi", icon: Wifi },
            { key: "ac", label: "AC", icon: Wind },
            { key: "food", label: "Food", icon: UtensilsCrossed },
            { key: "laundry", label: "Laundry", icon: WashingMachine },
            { key: "gym", label: "Gym", icon: Dumbbell },
            { key: "powerBackup", label: "Power Backup", icon: Zap },
          ].map(({ key, label, icon: Icon }) => (
            <label
              key={key}
              className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all border-2
                ${
                  amenities[key as keyof typeof amenities]
                    ? "bg-primary/5 border-primary"
                    : "bg-secondary border-transparent hover:border-border"
                }`}
            >
              <div
                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all shrink-0
                  ${amenities[key as keyof typeof amenities] ? "bg-primary border-primary" : "border-border"}`}
              >
                {amenities[key as keyof typeof amenities] && (
                  <svg
                    className="w-2.5 h-2.5 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <Icon
                className={`w-4 h-4 shrink-0 ${amenities[key as keyof typeof amenities] ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                className={`text-sm ${amenities[key as keyof typeof amenities] ? "text-foreground font-medium" : "text-muted-foreground"}`}
              >
                {label}
              </span>
              <input
                type="checkbox"
                checked={amenities[key as keyof typeof amenities]}
                onChange={() => handleAmenityChange(key as keyof typeof amenities)}
                className="sr-only"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Section: Safety */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Safety</h3>
        <label className="flex items-center justify-between cursor-pointer group p-4 bg-green-50 rounded-xl border border-green-100">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <div>
              <span className="text-sm text-foreground font-medium block">Verified PGs Only</span>
              <span className="text-xs text-muted-foreground">Background checked & inspected</span>
            </div>
          </div>
          {/* Toggle Switch */}
          <button
            role="switch"
            aria-checked={verifiedOnly}
            onClick={() => setVerifiedOnly(!verifiedOnly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0
              ${verifiedOnly ? "bg-green-600" : "bg-border"}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-card shadow-sm transition-transform
                ${verifiedOnly ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 space-y-3 border-t border-border">
        <Button
          onClick={handleApplyFilters}
          className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Apply Filters
        </Button>
        <Button
          variant="outline"
          onClick={handleResetFilters}
          className="w-full rounded-full border-border text-foreground hover:bg-secondary bg-transparent"
        >
          Reset All
        </Button>
      </div>
    </div>
  )
}
