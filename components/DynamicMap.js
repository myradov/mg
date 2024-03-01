import dynamic from 'next/dynamic';


const DynamicMap = dynamic(
  () => import('./MyMap'), // replace './MyMap' with the path to your map component
  { ssr: false }  // This will load the component only on client side
);

export default DynamicMap;

