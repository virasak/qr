import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/virasak/qr.git', // Update to point to your repository
    user: {
      name: 'Virasak Dugnsrikaew', // update to use your name
      email: 'virasak@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);