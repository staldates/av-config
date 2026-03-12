---
title: Equipment Overview
description: Hardware and software used in livestream operations
date: 2026-03-11
layout: default
---

# Equipment Overview

## Video Switching

### ATEM Mixer

- **Model:** ATEM with 4 M/Es (Mix Effects) [TODO: confirm exact model]
- **Control Surface:** ATEM 1 ME Advanced Panel for the Director
- **Configuration:**
  - **M/E 1 (IMAG M/E):** Controlled by Graphics/IMAG Producer for in-room screens
  - **M/E 2 (Stream M/E):** Controlled by Stream Producer for online output
  - **M/E 3 (Cam Mix M/E):** Controlled by Director for camera switching
  - **M/E 4:** Spare - available for advanced requirements

**M/E Numbering:** The ATEM allows higher-numbered M/Es to be brought into lower-numbered ones, but not the reverse. Therefore, the Cam Mix M/E (M/E 3) is routed into both M/E 1 and M/E 2 as the camera background. M/E 4 could be used for special requirements like a separate projector output or to build complex transitions that are then taken on M/E 3. A future enhancement could involve automated switching on M/E 4 (driven by MIDI from the Multitracks.com playback app or tools like CuePilot) which could then be taken into M/E 3 during songs where automation is available.

## Cameras

### Fixed Cameras

- **Camera 2:** Canon C70 - Wide shot of the stage/room
- **Camera 4:** Drums
- **Camera 6:** Livestream hosts (outside the room)

### Operated Cameras

- **Camera 1:** Canon C300 Mark II - Back of room (operated)
- **Camera 3:** Canon C300 Mark II - Side of room (operated)
- **Camera 5:** Canon C70 - Roving near stage (operated)

See [Camera Setup](camera-setup.md) for detailed positioning and configuration.

## Presentation Software

### ProPresenter

**Two separate machines:**

#### IMAG/Graphics ProPresenter

Operated by Graphics/IMAG Producer for in-room visuals and lyrics.

**Configuration:**

- **2 Outputs:** Each with separate key and fill signals [TODO: Stage screen / NDI]
- **Output Routing:** Connected to upstream keys (USKs) on both M/E 1 and M/E 2 [TODO: confirm exact routing]
- **Layout Differences:**
  - **IMAG output:** Larger text for in-room viewing
  - **Stream output:** Smaller text styled as subtitles for online viewers
- **Content:** Service lyrics, slides, teaching content, and in-room graphics

#### Stream ProPresenter

Operated by Stream Producer for stream-specific content. This is the central workstation for all streaming operations.

**Configuration:**

- **Stream-only output:** Dedicated to the Stream M/E (M/E 2)
- **Content:** Lower thirds, graphics, and overlays for online-only portions of service (pre-service, transitions)
- **Integrated Systems:**
  - HELO control and monitoring
  - YouTube Studio access and stream monitoring
  - Capture device for M/E 2 feed (alternative streaming option)
  - Livestream chat monitoring

**Capture Device:**

- Takes feed from M/E 2 [TODO: confirm exact routing]
- Can be used for video conference tools like Zoom / Teams / Meet
- Can be used with OBS for streaming if HELO is unavailable
- [TODO: NDI?]

## Stream Control

### Stream Decks (2)

Two Stream Decks are used by the production team, connected to Bitfocus Companion for flexible control.

**Bitfocus Companion Integration:**

- Provides centralized control for various church systems
- Allows custom button configurations for different roles
- Can control ATEM switching, ProPresenter, and other equipment

**Usage:**

- **Graphics/IMAG Producer:** Stream Deck for functions they need, including M/E 1 control
- **Stream Producer:** Stream Deck for functions they need, including M/E 2 control

[TODO: Write more about our companion config. Both streamdecks are the same but usually on different pages; controls talking on comms, talking and listening to hosts; some settings for camera 2; some lighting controls; automation of HELO; etc.]

### HELO Streaming Device

Hardware encoder that outputs the final stream to YouTube and other platforms.

## Communication

### Comms System

Allows Director to communicate with camera operators during the service.

## Audio

Audio is managed by a separate audio team and is outside the scope of this manual.

**Audio Team Structure:**

- **In-room operator:** Front of house audio
- **Gallery operator:** (Streamed services only) Manages audio mix for the stream

For audio-related questions, consult with the audio team.

---

[Back to Manual Index](index.md)
