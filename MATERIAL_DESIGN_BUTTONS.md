# Material Design Button Styling Guide

## Overview
This project now uses Material Design-inspired button styling with a premium green gradient and proper shadow effects.

## CSS Classes Available

### 1. `.btn-success-gradient`
The main button class for action buttons (Submit, Search, Create, etc.)

**Features:**
- Green gradient background: `linear-gradient(60deg, #288c6c, #4ea752)`
- Material Design shadow with green tint
- Smooth hover effect with enhanced shadow
- Active state with scale animation

**Usage:**
```jsx
<button className="btn-success-gradient text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs">
  SEARCH
</button>
```

### 2. `.card-header-success`
For card headers with the Material Design success style

**Features:**
- Same green gradient as buttons
- Elevated card header with negative margin
- Rounded corners
- Material Design shadow

**Usage:**
```jsx
<div className="card-header-success absolute -top-10 left-5 right-5 h-[90px] flex items-center justify-center">
  <Icon className="w-10 h-10 text-white" />
</div>
```

## Color Palette

### Primary Green Gradient
- Start: `#288c6c` (darker teal-green)
- End: `#4ea752` (lighter green)
- Direction: `60deg`

### Shadow Colors
- Base shadow: `rgba(0, 0, 0, 0.14)` and `rgba(0, 0, 0, 0.14)`
- Green tint: `rgba(76, 175, 80, 0.4)` (hover: `0.5`)

## Migration Guide

### Before (Old Style):
```jsx
<button className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs transition-all shadow-md">
  SEARCH
</button>
```

### After (New Style):
```jsx
<button className="btn-success-gradient text-white font-bold py-2.5 px-8 rounded uppercase tracking-wide text-xs">
  SEARCH
</button>
```

## Files Updated

1. ✅ `src/index.css` - Added utility classes
2. ✅ `src/pages/LoginPage.jsx` - Sign In button and header card
3. ✅ `src/pages/users/UsersPage.jsx` - SEARCH and ADD SUB BROKER buttons

## Files to Update (Recommended)

The following files still use the old green button styling and should be updated:

### High Priority (Action Buttons):
- `src/pages/funds/TraderFundsPage.jsx`
- `src/pages/trades/ClosedTradesPage.jsx`
- `src/pages/trades/ActiveTradesPage.jsx`
- `src/pages/trades/GroupTradesPage.jsx`
- `src/pages/trades/TradesPage.jsx`
- `src/pages/orders/PendingOrdersPage.jsx`
- `src/pages/trades/DeletedTradesPage.jsx`
- `src/pages/accounts/AccountsPage.jsx`
- `src/pages/banned/BannedLimitOrdersPage.jsx`

### Medium Priority (Form Buttons):
- `src/components/AddBrokerForm.jsx`
- `src/components/ClientDetailsForm.jsx`
- `src/components/CreateFundForm.jsx`
- `src/components/CreateTradeForm.jsx`
- `src/components/FilterBar.jsx`

### Low Priority (Headers/Labels):
- `src/pages/bank/BankDetailsPage.jsx`
- `src/pages/bank/NewClientBankDetailsPage.jsx`
- `src/pages/tickers/TickersPage.jsx`
- `src/components/ClientDashboard.jsx`
- `src/components/ActivePositionsTable.jsx`

## Best Practices

1. **Always use the CSS class** instead of inline styles for consistency
2. **Keep text white** for proper contrast on the green gradient
3. **Use uppercase text** with tracking for Material Design feel
4. **Maintain proper padding** (py-2.5 to py-3, px-6 to px-10 depending on button size)
5. **Add rounded corners** with `rounded` class

## Example Implementations

### Primary Action Button
```jsx
<button 
  onClick={handleSubmit}
  className="btn-success-gradient text-white font-bold py-3 px-10 rounded uppercase tracking-wider text-xs"
>
  CREATE CLIENT
</button>
```

### Secondary Action Button (smaller)
```jsx
<button 
  onClick={handleSearch}
  className="btn-success-gradient text-white font-bold py-2 px-6 rounded uppercase tracking-wide text-xs"
>
  SEARCH
</button>
```

### Card Header with Icon
```jsx
<div className="card-header-success absolute -top-10 left-5 right-5 h-[90px] flex items-center justify-center z-10">
  <UserIcon className="w-10 h-10 text-white" />
</div>
```

## Notes

- The `@theme` warning in `index.css` is expected and can be ignored (it's a Tailwind CSS v4 feature)
- The gradient provides a more premium look compared to flat colors
- The shadow effects create depth and improve visual hierarchy
- Hover effects are built into the CSS class, no need to add them manually
