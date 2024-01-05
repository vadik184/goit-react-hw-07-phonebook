import { RotatingLines } from 'react-loader-spinner';
import { SpinerStyled } from 'components/Loader/LoaderStyled';
export const Loader = () => {
  return (
    <SpinerStyled>
      <RotatingLines
        strokeColor="#7aa7c7"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </SpinerStyled>
  );
};
