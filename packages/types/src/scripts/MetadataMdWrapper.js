#!/usr/bin/env node
// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

require('@babel/register')({
  extensions: ['.js', '.ts'],
  plugins: [
    ['module-resolver', {
      alias: {
        '^@polkadot/types(.*)': './packages/types/src\\2',
        '^@polkadot/api-metadata/extrinsics(.*)': './packages/api-metadata/src/extrinsics\\2'
      }
    }]
  ]
});

require('./MetadataMd.ts');
