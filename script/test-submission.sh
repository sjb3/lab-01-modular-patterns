#!/usr/bin/env bash

for submission in ./lab-*;do
  cd $submission
  mocha
  [[ "$?" -eq 1 ]] && exit 1
done

exit 0

