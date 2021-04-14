import React from 'react';
import { useOptionsServices } from "./useOptionServices";
import { QuicklyProvider, useQuickly } from '../index';


const QuicklyClient = (props: { hotkey: string, children: any }): React.ReactElement => {

  return <QuicklyProvider hotkey={props.hotkey}>
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
