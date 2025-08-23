# Asset Organization Guide

This document describes the organized asset structure for the Thach's Apps portfolio website.

## Structure Overview

```
public/
├── apps/
│   ├── time-jar/
│   │   ├── icon.png                    # Time Jar app icon
│   │   ├── app-store-badge.svg         # App Store download badge
│   │   └── screenshots/
│   │       ├── session-tracking.png    # Time tracking interface
│   │       ├── session-management.png  # Session management screen
│   │       ├── analytics-dashboard.png # Analytics dashboard
│   │       └── live-activities.png     # Live activities feature
│   └── questions-game/
│       ├── icon.png                    # Questions Game app icon
│       └── screenshots/                # Future screenshots directory
└── shared/
    └── privacy-illustration.png        # Shared privacy policy illustration
```

## Usage in Components

### App Icons
- **Time Jar**: `/thach-indi/apps/time-jar/icon.png`
- **Questions Game**: `/thach-indi/apps/questions-game/icon.png`

### Screenshots
- **Time Jar Screenshots**: `/thach-indi/apps/time-jar/screenshots/{filename}.png`
- **Questions Game Screenshots**: `/thach-indi/apps/questions-game/screenshots/{filename}.png`

### Shared Assets
- **Privacy Illustration**: `/thach-indi/shared/privacy-illustration.png`

## Adding New Assets

### For Questions Game App
1. Add app screenshots to: `public/apps/questions-game/screenshots/`
2. Use descriptive filenames (e.g., `gameplay.png`, `leaderboard.png`)
3. Update QuestionsGamePage.tsx with proper paths

### For New Apps
1. Create directory: `public/apps/{app-name}/`
2. Add subdirectories: `screenshots/`
3. Place assets with descriptive names
4. Update component imports accordingly

## Benefits of This Structure

1. **Scalability**: Easy to add new apps and assets
2. **Organization**: Clear separation by app and purpose
3. **Maintainability**: Descriptive names instead of generic "Frame X"
4. **Consistency**: Standardized naming convention
5. **Performance**: Eliminates duplicate assets

## Migration Notes

- All old asset locations have been cleaned up
- All React components updated to use new paths
- Images load correctly with Vite's base path configuration
- Ready for Questions Game app assets to be added