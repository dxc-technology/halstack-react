# Spinner Component

A circular progress indicator component that shows loading state with support for both determinate and indeterminate modes.

## Key Features

- **2 modes**: indeterminate (loading) and determinate (progress tracking)
- **3 sizes**: small (16px), medium (140px), large (180px)
- **Overlay support**: Can be displayed as a modal overlay
- **Progress tracking**: Shows percentage and custom labels
- **Accessibility**: Full ARIA support for screen readers
- **Smooth animations**: CSS-based animations for performance

## Design Specifications

Based on Figma design tokens:

### Colors
- **Default**: `var(--color-fg-primary-strong)` (#6f4b97)
- **Overlay**: `var(--color-fg-primary-medium)` (#c8a7eb)
- **Track**: `var(--color-bg-neutral-light)` / `var(--color-bg-neutral-medium)`
- **Text**: `var(--color-fg-neutral-dark)` (#333333) / `var(--color-fg-neutral-bright)` (#ffffff)

### Sizes
- **Small**: 16px diameter, 2px stroke, hidden content
- **Medium**: 140px diameter, 8px stroke, 14px font
- **Large**: 180px diameter, 10px stroke, larger font

## Usage

```tsx
import { DxcSpinner } from "@dxc-technology/halstack-react";

// Basic indeterminate spinner
<DxcSpinner />

// Determinate spinner with progress
<DxcSpinner value={75} showValue />

// Custom label
<DxcSpinner label="Processing..." />

// Different sizes
<DxcSpinner size="small" />
<DxcSpinner size="large" />

// Overlay modal
<DxcSpinner overlay label="Loading application..." />

// Complete example
<DxcSpinner 
  size="medium"
  value={progressValue}
  showValue
  label="Uploading files..."
  overlay
/>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `"Loading..."` | Text displayed next to the spinner |
| `showValue` | `boolean` | `false` | Whether to show the percentage value |
| `value` | `number` | `undefined` | Progress value (0-100). If provided, enables determinate mode |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Size of the spinner |
| `mode` | `"indeterminate" \| "determinate"` | Auto-detected | Mode of the spinner |
| `overlay` | `boolean` | `false` | Whether to display as overlay modal |
| `margin` | `Space \| object` | `undefined` | Margin around the component |
| `ariaLabel` | `string` | Auto-generated | Custom aria-label for accessibility |

### Modes

- **Indeterminate**: Continuous spinning animation, used when progress is unknown
- **Determinate**: Shows specific progress from 0-100%, automatically enabled when `value` prop is provided

### Accessibility

- Uses `role="progressbar"` for screen reader compatibility
- Provides `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for determinate mode
- Auto-generates descriptive `aria-label` based on progress and mode
- Supports custom `aria-label` and `aria-describedby` attributes

## Animation Details

- **Indeterminate**: 2-second linear rotation with 25% stroke dash
- **Determinate**: Smooth 0.3s ease-in-out transitions for progress changes
- **Performance**: Uses CSS transforms and GPU acceleration

## Examples

### Loading States
```tsx
// Network request
<DxcSpinner label="Fetching data..." />

// File upload with progress
<DxcSpinner 
  value={uploadProgress} 
  showValue 
  label="Uploading..." 
/>
```

### User Feedback
```tsx
// Overlay for page transitions
<DxcSpinner overlay label="Loading page..." />

// Small inline spinner
<DxcSpinner size="small" />
```

## Files Structure

```
spinner/
├── Spinner.tsx                    # Main component implementation
├── types.ts                      # TypeScript type definitions
├── Spinner.stories.tsx           # Storybook stories
├── Spinner.test.tsx              # Unit tests
└── Spinner.accessibility.test.tsx # Accessibility tests
```
