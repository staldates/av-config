# Livestream Manual

This directory contains the complete operations manual for running livestream services.

## Structure

- **[index.md](index.md)** - Main entry point for the manual
- **[equipment-overview.md](equipment-overview.md)** - Hardware and software inventory
- **[camera-setup.md](camera-setup.md)** - Camera positions and operations guide
- **roles/** - Detailed role-specific guides
  - [director.md](roles/director.md) - Director role guide
  - [graphics-producer.md](roles/graphics-producer.md) - Graphics/IMAG Producer guide
  - [stream-producer.md](roles/stream-producer.md) - Stream Producer guide
  - [camera-operator.md](roles/camera-operator.md) - Camera Operator guide

## Front Matter

All manual pages include YAML front matter for compatibility with static site generators:

```yaml
---
title: Page Title
description: Page description
date: 2026-03-11
layout: default
---
```

Role pages include additional metadata:
- `role`: The role name
- `location`: Physical location where the role operates

## Publishing Options

### Jekyll

This manual is ready to be published with Jekyll:
1. Add a `_config.yml` file
2. Install Jekyll: `gem install jekyll bundler`
3. Run: `jekyll serve`

### Vite

To use with Vite:
1. Install vite-plugin-markdown or similar
2. Configure Vite to process markdown files
3. Extract front matter for navigation

### GitHub Pages

Can be deployed directly as markdown documentation on GitHub with minimal setup.

## Development

To add new pages:
1. Create markdown file with front matter
2. Add links in [index.md](index.md)
3. Follow existing naming conventions (lowercase with hyphens)
