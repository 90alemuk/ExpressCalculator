#!/bin/bash

set -e

nohup npm run start >/dev/null >2>&1 &
npm run e2e-test
kill $!
pkill -f geckodriver
