import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="blue"
      ariaLabel="circles-loading"
      visible={true}
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
    />
  );
}