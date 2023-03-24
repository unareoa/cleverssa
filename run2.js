#!/bin/sh
UUID=${UUID:-'f8b12f7e-1596-458b-87c4-ce18218f669a'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
