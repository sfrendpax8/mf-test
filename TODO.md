# TODO

## Things yet to figure out
- Theming and how to share tailwind config with children
  - Install tailwind and make a basic config copying propulsion in `shared-components`
  - Try consuming a) the config and b) the CSS
- Vue dev tools
- Create an auth module
- Create a global state system
- Try exporting script setup component from shared lib
- Figure out a good local development (standalone) system for regular MF

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

- We can use a tailwind "preset" to share a default configuration. It's just a JS file. This way, we'll have a shared config.
  - When doing this, part of the purging means the MF will include the rule that's derived from the config. For example, if I use "text-gray-100" and I am using another config as a preset, my export will contain the rule that's generated. But if the design system also uses "text-gray-100", the rule will exist in two style sheets. The problem with omitting the preset from the MF though, is that if I need "text-gray-800" and the design system hasn't used that variable, my style won't work. The good thing is that unless we have 10 MFs mounted at the same time, there will only ever be one duplication of the design system styles (if any).
- How do we get the overrides from the base layer etc? Stuff from index.css in design system. This would be the export of a CSS file.
  - Maybe the simplest solution here is
    1. Share config 
    2. On deploy of ANY MF, a service downloads all MFEs from the import map and uses them as input for PurgeCSS. It outputs a single CSS file that we can then make the 1 source of truth

- If a MF adds @layer stuff to their index.css, it overrides the same @layer rules from shared-components

- Another MF using a shared config will probably not be possible at runtime. The tailwind.config file requires presets during build. We can either add a build step to propulsion which publishes a npm package which everyone consumes (will be duplicated, but it's only a json file so should be fine), or we need another way of sharing it as a build time lib.

**Conclusion**
V1: 
  - Every MF consumes propulsions tw.config as a preset (need to figure out how to consume it from another module rather than folder)
  - Both propulsion and MF purges their styles. Duplication will occur
  - Propulsion imports its index.css in main.js, enabling resets for entire app

V2:
  - Every MF consumes propulsions tw.config as a preset
  - When MF deploys their code, it first goes through a "tailwind purger" or similar. This purger downloads all MFs from import map and uses PurgeCSS to manually output a "master" CSS file. This file is housed somewhere as a separate entity. Propulsion still remains the source of truth for where the config is defined, but it will need to go through the deployer just like other MFs when deploying new code.
