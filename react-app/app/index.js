import { createApp } from 'frint';

import RootComponent from '../components/Root';

export default createApp({
  name: 'TodoList',

  providers: [
    {
      name: 'component',
      useValue: RootComponent
    }
  ]
})
