import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomeScreen } from './screens/HomeScreen';
import { SpendScreen } from './screens/SpendScreen';
import { GoalsScreen } from './screens/GoalsScreen';
import { MoodScreen } from './screens/MoodScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { VisionScreen } from './screens/VisionScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomeScreen },
      { path: 'spend', Component: SpendScreen },
      { path: 'goals', Component: GoalsScreen },
      { path: 'mood', Component: MoodScreen },
      { path: 'profile', Component: ProfileScreen },
      { path: 'vision', Component: VisionScreen },
    ],
  },
]);
