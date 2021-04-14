import React from 'react';
import { useOptionsServices } from "./useOptionServices";
import { QuicklyProvider, useQuickly } from '../index';


const QuicklyClient = (props): React.ReactElement => {

  return <QuicklyProvider hotkey="ctrl+shift+l">
    <QuicklyServices />
    {props.children}
  </QuicklyProvider>
};

const QuicklyServices = () => {
  const services = useOptionsServices();
  const quickly = useQuickly();

  React.useEffect(() => {
    quickly.registerOptionServices(services);
  }, []);

  return null;
};

export default QuicklyClient;
