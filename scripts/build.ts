import util from 'util';
import { exec } from 'child_process';
import commandLineArgs from 'command-line-args';
import { nextTask } from './utils';

const execPromise = util.promisify(exec);

const { skipfullcss } = commandLineArgs([{ name: 'skipfullcss', type: Boolean }]);

(async () => {
  await nextTask('Generating base', () => {
    return execPromise(`postcss --config src/base src/base/*.css --base src --dir dist`);
  });

  await nextTask('Cat base', () => {
    return execPromise(`cat dist/base/*.css > dist/base.css`);
  });

  await nextTask('Prejss base', () => {
    return execPromise(`prejss-cli dist/base.css --format commonjs`);
  });

  await nextTask('Generating utilities global', () => {
    return execPromise(`postcss --config src/utilities/global src/utilities/global/*.css --base src --dir dist`);
  });

  await nextTask('Cat utilities global', () => {
    return execPromise(`cat dist/utilities/global/*.css > dist/utilities.css`);
  });

  await nextTask('Prejss utilities global', () => {
    return execPromise(`prejss-cli dist/utilities.css --format commonjs`);
  });

  await nextTask('Generating utilities unstyled', () => {
    return execPromise(`postcss --config src/utilities/unstyled src/utilities/unstyled/*.css --base src --dir dist`);
  });

  await nextTask('Cat utilities unstyled', () => {
    return execPromise(`cat dist/utilities/unstyled/*.css > dist/utilities-unstyled.css`);
  });

  await nextTask('Prejss utilities unstyled', () => {
    return execPromise(`prejss-cli dist/utilities-unstyled.css --format commonjs`);
  });

  await nextTask('Generating utilities styled', () => {
    return execPromise(`postcss --config src/utilities/styled src/utilities/styled/*.css --base src --dir dist`);
  });

  await nextTask('Cat utilities styled', () => {
    return execPromise(`cat dist/utilities/styled/*.css > dist/utilities-styled.css`);
  });

  await nextTask('Prejss utilities styled', () => {
    return execPromise(`prejss-cli dist/utilities-styled.css --format commonjs`);
  });

  await nextTask('Generating components', () => {
    return execPromise(`postcss --config src/components src/components/**/*.css --base src --dir dist`);
  });

  await nextTask('Cat components unstyled', () => {
    return execPromise(`cat dist/components/unstyled/*.css > dist/unstyled.css`);
  });

  await nextTask('Cat components styled', () => {
    return execPromise(`cat dist/components/unstyled/*.css dist/components/styled/*.css > dist/styled.css`);
  });

  await nextTask('Prejss utilities styled', () => {
    return execPromise(`prejss-cli dist/{unstyled,styled}.css --format commonjs`);
  });

  await nextTask('Prejss themes', () => {
    return execPromise(`postcss src/themes/index.css -o dist/themes.css --config src/themes`);
  });

  if (!skipfullcss) {
    await nextTask('Prejss full', () => {
      return execPromise(`postcss src/full/index.css -o dist/full.css --config src/full`);
    });
  }
})()
