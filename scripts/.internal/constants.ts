import { join } from 'node:path';

const ROOT = join(__dirname, '../../');

export const PATHS = {
  ROOT,
  DOCS: join(ROOT, './docs'),
  PACKAGES: join(ROOT, './packages'),
  EXAMPLES: join(ROOT, './examples'),
} as const;
