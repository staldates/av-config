# ME-1 configuration

There are three config files stored under `ME1CFG`:

- `ALDATES.ME1` - standard configuration for most of the band
- `ALD BASS.ME1` - configuration for bass player (separates kick and snare)
- `ALD DRUM.ME1` - configuration for drummer (separates most of kit)

## Restoring configs

You will need a USB key that is formatted to FAT32 and has the anointing to work
with ME-1s (which can only be determined by trial and error).

Make sure the `ME1CFG` directory is in the root of the USB key's filesystem.
(You may need to have an - empty - `ME1PST` directory too, or the ME-1 may
create it. Our worship team don't use the presets feature.)

In the ME-1 menu, go to:

- System setup
- Config
- Import

and select the configuration file you want to load.

## File format notes

A `.ME1` file can be _either_ a configuration file _or_ a presets file - the
ME-1s use directory structure to tell them apart, but file size is also a clue:
preset files are 4kB, while full config files are 72kB.

File names must be in DOS `8.3` format; specifically, `[0-9A-Z ]+\.ME1`.

The data structure itself looks fairly simple, but I've not spent much time
trying to decipher it. Custom group names are easily identifiable; channel names
don't seem to be fully stored, but presumably are junk data that gets
overwritten by the live channel name data from the ME-U.

First section of the config file seems to be:

```text
[header data 0x00 - 0x08]

16 * button config

button config =
[
  47 * [
    is in group? (1 byte)
    level within group (1 byte)
    pan within group (1 byte)
    0x25
  ]
  [
    some config information (2 bytes)
    0x25
  ]
  custom name (6 bytes)
  0x0
  0x0
  0x0
  ?? (1 byte)
]

```
