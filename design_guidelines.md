# InternWay Platform Design Guidelines

## Design Approach

**Selected Approach:** Hybrid Reference-Based (Modern SaaS/Tech Platform)

Drawing inspiration from:
- **Linear:** Clean typography, subtle animations, professional color usage
- **Stripe:** Gradient backgrounds, floating elements, sophisticated glassmorphism
- **Vercel:** Dark mode excellence, smooth transitions, modern aesthetic

**Design Principles:**
- Progressive disclosure through multi-step forms
- Role-based visual hierarchy
- Trust-building through polish and attention to detail
- Seamless bilingual experience (English/Arabic with full RTL support)

## Color Palette

**Light Mode:**
- Primary: 212 100% 50% (Vibrant Blue)
- Secondary: 270 70% 60% (Purple accent)
- Success: 160 84% 39% (Green for confirmations)
- Background: 0 0% 100% (Pure white)
- Foreground: 222 47% 11% (Dark text)
- Muted: 210 40% 96% (Subtle backgrounds)
- Border: 214 32% 91% (Delicate dividers)

**Dark Mode:**
- Primary: 212 100% 55% (Slightly brighter blue)
- Secondary: 270 75% 65% (Enhanced purple)
- Success: 160 84% 45% (Brighter green)
- Background: 222 47% 11% (Rich dark navy)
- Foreground: 210 40% 98% (Off-white text)
- Muted: 217 33% 17% (Elevated surfaces)
- Border: 217 33% 20% (Subtle dividers)

**Gradient Overlays:**
- Hero Gradient: from 212 100% 50% to 270 70% 60% (Blue to Purple, 135deg)
- Card Glassmorphism: Background blur with opacity 0.7 and subtle border shine

## Typography

**Font Families:**
- Primary: Inter (Google Fonts) - Clean, professional, excellent Arabic support alternative: Cairo
- Monospace: JetBrains Mono - For code snippets or technical elements

**Scale:**
- Hero Title: text-6xl (60px) font-bold tracking-tight
- Page Title: text-4xl (36px) font-bold
- Section Heading: text-2xl (24px) font-semibold
- Card Title: text-xl (20px) font-semibold
- Body Text: text-base (16px) font-normal
- Small Text: text-sm (14px) font-normal
- Micro Text: text-xs (12px) font-medium

**Contextual Usage:**
- Form Labels: text-sm font-medium with 70% opacity
- Floating Labels: Animated from text-base to text-xs on focus
- Button Text: text-sm font-semibold uppercase tracking-wide
- Error Messages: text-xs font-medium text-destructive

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 24

**Key Measurements:**
- Component padding: p-6 (cards), p-8 (forms), p-4 (mobile)
- Section spacing: space-y-12 (desktop), space-y-8 (mobile)
- Container max-width: max-w-7xl for full sections, max-w-md for forms
- Grid gaps: gap-6 (desktop), gap-4 (mobile)

**Responsive Breakpoints:**
- Mobile: Base (< 640px)
- Tablet: md: (768px+)
- Desktop: lg: (1024px+)
- Wide: xl: (1280px+)

## Component Library

**Navbar (Fixed Glassmorphism):**
- Background: backdrop-blur-lg with bg-background/80
- Height: h-16 with border-b border-border/50
- Logo: Animated 3D icon with gradient fill
- Links: Hover underline animation with 200ms transition
- Mobile menu: Slide-in from right with backdrop overlay

**Authentication Cards:**
- Width: max-w-md with mx-auto centering
- Padding: p-8 with rounded-2xl
- Background: Glassmorphism with subtle gradient border
- Shadow: shadow-2xl with colored glow effect

**Role Selector:**
- Grid layout: grid-cols-3 with gap-4
- Active state: Scale 1.05 with gradient border and shadow
- Inactive: Grayscale filter with opacity-60
- Transition: All properties 300ms ease-in-out

**Form Inputs (AnimatedInput):**
- Height: h-12 with px-4 py-3
- Border: border-2 with focus:border-primary transition
- Floating labels: Absolute positioning with smooth translate animation
- Icons: Left positioned with text-muted-foreground color
- Error state: Red border with shake animation

**Buttons:**
- Primary: Gradient background from primary to secondary with hover brightness
- Outline: Transparent background with border, blur backdrop on images
- Sizes: h-10 (default), h-12 (large), h-8 (small)
- Loading state: Spinner with pulse animation

**Feature Cards (Home Page):**
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Design: Glassmorphism with gradient border on hover
- Icon: 3D perspective transform on hover
- Padding: p-6 with space-y-4 content

**CV Upload Zone:**
- Border: border-2 border-dashed with hover:border-primary
- Background: Subtle gradient overlay on drag-over
- Icon: Upload cloud with scale animation
- Size indicator: Real-time file size display

**3D Floating Shapes (Background):**
- Elements: Blurred gradient orbs with different sizes
- Animation: Slow floating with parallax effect
- Opacity: 0.1-0.3 for subtle presence
- Colors: Primary and secondary gradients

## Animation Strategy

**Use Sparingly - Key Moments Only:**

**Page Transitions:** 
- Fade + slight slide (20px) over 300ms

**Form Interactions:**
- Label float: 200ms ease-out
- Input focus: Border color 150ms
- Error shake: 400ms with 3 iterations

**Hover States:**
- Scale: 1.02-1.05 over 200ms
- Color shifts: 150ms ease-in-out
- Shadow growth: 200ms

**Loading States:**
- Spinner: Continuous rotation
- Skeleton: Pulse animation at 1.5s intervals
- Progress: Smooth width transition

**Micro-interactions:**
- Checkbox check: Spring animation
- Toggle switch: Slide 200ms
- Dropdown open: Scale + fade 150ms

## Images

**Hero Section (Login/SignUp Left Side):**
- 3D Illustration: Abstract geometric shapes representing collaboration/learning
- Style: Gradient mesh with floating elements
- Dimensions: Fill container with object-cover
- Animation: Gentle floating and rotation

**Home Page Hero:**
- Full-width gradient background with animated mesh
- Floating 3D shapes overlay (orbs, cubes, pyramids)
- No large central image - focus on typography and shapes

**Feature Cards:**
- Icon-based, no images
- Use Lucide React icons with gradient fills

**About Section (if added):**
- Team photos in circular frames with gradient borders
- Arrangement: Staggered grid with overlap effect

This platform prioritizes modern sophistication through glassmorphism, strategic gradients, and purposeful animations while maintaining usability across all devices and languages.