#!/bin/sh
GIT_HOOKS_FOLDER=".git/hooks"

if [ -d "$GIT_HOOKS_FOLDER" ]; then
  # Pre commit hook
  cp scripts/pre-commit .git/hooks/pre-commit
  # Make files executable.
  chmod +x .git/hooks/pre-commit
  # Post merge hook.
  cp scripts/post-merge .git/hooks/post-merge
  # Make files executable.
  chmod +x .git/hooks/post-merge
fi
### End Git hooks ####
