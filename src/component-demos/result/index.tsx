import React from 'react';

import Demo from './result';
import info from './info';
import warning from './warning';
import danger from './danger';
import ResultWithDesc from './resultWithDesc';

import type { ComponentDemo } from '../../interface';

const previewerDemo: ComponentDemo[] = [
  { demo: <Demo /> },
  info,
  warning,
  danger,
  ResultWithDesc,
];

export default previewerDemo;
