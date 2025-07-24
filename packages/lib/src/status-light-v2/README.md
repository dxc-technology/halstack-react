# Status Light V2 Component

This is an alternative implementation of the Status Light component created based on the Figma design specifications to compare design-to-code capabilities.

## Key Features

- **5 semantic modes**: default, info, success, warning, error
- **3 sizes**: small, medium, large
- **Design token-based implementation**: Uses CSS custom properties for consistent theming
- **Accessibility**: Includes proper ARIA roles and semantic markup
- **Text overflow handling**: Ellipsis for long labels

## Design Specifications from Figma

The component follows these design tokens extracted from Figma:

### Colors
- **Default**: `var(--color-fg-neutral-strong)` (#797979)
- **Info**: `var(--color-fg-secondary-medium)` (#267fbf)
- **Success**: `var(--color-fg-success-medium)` (#39884f)
- **Warning**: `var(--color-fg-warning-strong)` (#a76d2b)
- **Error**: `var(--color-fg-error-medium)` (#e33248)

### Sizes
- **Small**: 8px dot, 12px font (Label/semibold-12), 4px gap
- **Medium**: 12px dot, 14px font (Label/semibold-14), 8px gap
- **Large**: 16px dot, 20px font (Label/semibold-20), 8px gap

## Differences from Original Implementation

1. **More explicit design token mapping**: Direct mapping from Figma variables
2. **Updated size system**: Different gap values based on Figma specifications
3. **Enhanced type safety**: More explicit typing patterns
4. **Better documentation**: Comprehensive comments explaining design decisions

## Usage

```tsx
import { DxcStatusLightV2 } from "@dxc-technology/halstack-react";

// Basic usage
<DxcStatusLightV2 label="Active" mode="info" size="medium" />

// Different modes
<DxcStatusLightV2 label="Completed" mode="success" />
<DxcStatusLightV2 label="Warning" mode="warning" />
<DxcStatusLightV2 label="Failed" mode="error" />

// Different sizes
<DxcStatusLightV2 label="Small" size="small" />
<DxcStatusLightV2 label="Large" size="large" />
```

## Testing

The component includes comprehensive test coverage:
- Unit tests for all props and behaviors
- Accessibility tests for all modes and sizes
- Visual regression tests through Storybook

## Files Structure

```
status-light-v2/
├── StatusLightV2.tsx              # Main component implementation
├── types.ts                       # TypeScript type definitions
├── StatusLightV2.stories.tsx      # Storybook stories
├── StatusLightV2.test.tsx         # Unit tests
└── StatusLightV2.accessibility.test.tsx  # Accessibility tests
```
