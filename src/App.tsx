import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageLayout, ErrorLayout } from './layouts';
import { ErrorPage, StepOneForm, StepTwoForm, StepThreeForm, StepResultForm } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: (
      <ErrorLayout>
        <ErrorPage />
      </ErrorLayout>
    ),
    children: [
      {
        element: <StepOneForm />,
        index: true
      },
      {
        element: <StepTwoForm />,
        path: 'step-two'
      },
      {
        element: <StepThreeForm />,
        path: 'step-three'
      },
      {
        element: <StepResultForm />,
        path: 'step-result'
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
