import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getBrands } from '../redux/action/brands';

export function Teste(props) {
  const brands = props.brands;
  console.log(props);

  useEffect(() => {
    // props.getBrands();
  }, []);

  return (
    <div>
      hello
      {/* {brands.map(brand => {
        return (
          <>
            <p key={brand.uuid}>{brand.name}</p>
          </>
        );
      })} */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    brands: state.brandsReducer.brands,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBrands: () => dispatch(getBrands()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teste);
