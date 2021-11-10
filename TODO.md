# TODO

## Things yet to figure out
- Theming and how to share tailwind config with children
  - Install tailwind and make a basic config copying propulsion in `shared-components`
  - Try consuming a) the config and b) the CSS
- Vue dev tools
- Create an auth module
- Create a global state system
- Try exporting script setup component from shared lib


## Tailwind / Shared CSS
**Option 1**: Each app bundles/purges their own TW
Pros
- Easy to maintain own ecosystem and config for TW. Use config from propulsion and do your own thing.

Cons
- Duplicated styles and variants, unless Purge system that works well. The bundle per MF should be very small though

Challenges
- 

**Option 2**: Apps get all styles from global TW css which is loaded in shell
Pros
- 

Cons
- How do we get around loading the entire CSS file? If propulsion is only using 50%, and I need the 55th percent, I'll break

Challenges
- Purging main CSS sheet when a MF deploys new code

----------
Challenges no matter what
- How do we work locally without shell?
- How does JIT compilation work?
- How do we manage a theme? Part of TW config?

---------
Discoveries
- Using tailwind on vue3 project, cannot use postCss@8. Maybe in a different setting, but build didn't work until i went through their compat steps

- We can use a tailwind "preset" to share a default configuration. It's just a JS file. This way, we'll have a shared config
- How do we get the overrides from the base layer etc? Stuff from index.css in design system. This would be the export of a CSS file.
  - Maybe the simplest solution here is
    1. Share config 
    2. On deploy of ANY MF, a service downloads all MFEs from the import map and uses them as input for PurgeCSS. It outputs a single CSS file that we can then make the 1 source of truth